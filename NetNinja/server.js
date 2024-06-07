const http =  require('http');
const fs = require('fs');

const server =  http.createServer((req, res)=>{
    //console.log('request made');
    res.setHeader('Content-Type', 'text/html');

    //basic routing
    let viewsPath = './views/';

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
            res.end
            break;
        default:
            viewsPath += '404.html';
            res.statusCode = 404;
            break;
    }
   
    fs.readFile(viewsPath, (err, data) => {
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