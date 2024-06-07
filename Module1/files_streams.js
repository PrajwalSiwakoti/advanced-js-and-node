//for large files, we can use Streams
//by using streams, we can start using data, before it has finished loading
//eg: Water tank to basin (via stream//jharna)
//netflix video..streams video data available from huge movie file

const fs = require('fs');

const readStream = fs.createReadStream('./docs/large_blog.txt', {encoding: 'utf-8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');

//event function just like onClick
//event listener
readStream.on('data', (chunk)=>{
    console.log('----------new chunk-----------');
    console.log(chunk);
    writeStream.write('\n New Chunk \n');
    writeStream.write(chunk);
})

//piping
//read and write to
//readStream.pipe(writeStream);