const http =  require('http');
const fs = require('fs');

const server =  http.createServer((req, res)=>{
    //console.log('request made');
    res.setHeader('Content-Type', 'text/html');

    //basic routing
    let viewsPath = './views/';

    //this is from oreilly
    //we can also do like this, where we handle incoming request data in chunk
    //bts how express works

    if(req.url === '/message' && req.method === 'GET'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action = "/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        res.end(); //if return not mentiond console will print...res.end() will not terminate the execution
        // res.end() is JUST a function call like any other function call. It does not affect the Javascript flow of control in your function at all. It terminates the http request, but not the function you're in. If there are lines of code after it in the function, they will execute. If you want to terminate the execution of the request handler, then use a return after the res.end() or structure an if/else logic so it only executes one thing and then is done.
        return;
    }

    if(req.url === '/message' && req.method === 'POST'){

        const body = [];
        //we catch request body by registering event listener
        //data event will be fired whenever a new chunk is ready to be read
        req.on('data', (chunk)=>{
            body.push(chunk);
        });

        //it will be fired once it is done parsing incoming request 
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString(); //only works for text request body, we should do different for file
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('./message.txt',message);
        });
        
        res.end();
        return;
    
    }

    //console.log('ljlhere');
   // return;

    switch(req.url){
        case '/':
            viewsPath += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            viewsPath += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            //redirect
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            return;
            break;
        default:
            viewsPath += '404.html';
            res.statusCode = 404;
            break;
    }

  // console.log(viewsPath);
    //return;
   
    fs.readFile(viewsPath, (err, data) => {
        //res.write(data);
        //return res.end() //if return not mentioned, wii continuing executing other urls//but not exactly in this case
        if(err){
            res.write(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });
    
})

server.listen(4000, 'localhost', ()=>{
    console.log('Listening for requests on port 4000');
})