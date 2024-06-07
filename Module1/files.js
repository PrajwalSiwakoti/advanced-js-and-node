const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
//  sync approach
//fs.readFileSync('./docs/blog1.txt');


console.log('this prints first');

//write file
fs.writeFile('./docs/blog1.txt', 'hello world', ()=>{
    console.log('existing file was written');
});

fs.writeFile('./docs/blog2.txt','new file text', ()=>{
    console.log('new file is created and written');
});

//dirctories

if(fs.existsSync('./assets')){
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    })
}
else{
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder created')
    })
}


//deleting files
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}