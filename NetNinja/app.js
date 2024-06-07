const express = require('express');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express() ;

//connect to mongodb

//const dbURI = "mongodb+srv://admin:Admin2929@firstsamplecluster.ekzpihx.mongodb.net/?retryWrites=true&w=majority&appName=FirstSampleCluster";

const dbURI ='mongodb://localhost:27017/node-ninja';

mongoose.connect(dbURI)
        .then((result)=>{
            console.log('connected to db');

            //listen for requests
            app.listen(4000, ()=>{
                console.log('server is running on port:' + 4000);
            });
        })
        .catch((err)=>console.log(err))

//register view engine
app.set('view engine', 'ejs');
//if we want to set views folder
//app.set('views', 'myviews');


//middleware for static files
//only files under public folder will be visible in browser
app.use(express.static('public'));

//for geting URL, form data
app.use(express.urlencoded({extended: true}));

//first middleware
app.use((req, res, next)=>{
    //do/check something
    console.log('checking', req.originalUrl);
    next();//forward the request
});

app.use((req, res, next)=>{
    console.log('second gate', req.originalUrl);
    next();
});

app.get('/raw', (req, res)=>{
    res.send('<p>home</p>');
});

app.get('/', (req, res)=>{
    //res.send(__dirname);
    //res.sendFile('./views/index.html', {root: __dirname});//relative path
    //by default render will point to views folder
    // const blogs =[
    //     {title: 'First Blog', snippet:'Blog content'},
    //     {title: 'Second Blog', snippet:'Blog content'},
    //     {title: 'Third Blog', snippet:'Blog content'}
    // ];
    // res.render('index', { title: 'Home', blogs});
    res.redirect('blogs');
});

// app.get('/about', (req, res)=>{
//    res.sendFile('./views/about.html', {root: __dirname});//relative path
// });

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});


//redirect
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
});

//blog routes
app.use(blogRoutes);
//we can also prefix by blogs for blogRoutes
//app.use('blogs',blogRoutes);
//404 page
//always should in last
app.use((req, res)=>{
   // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: "404"});
})