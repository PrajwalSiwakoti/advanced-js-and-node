const Blog = require('../models/blog');

const blog_index = (req, res)=>{
    Blog.find().sort({createdAt: -1}) //sorting desc
    .then((result)=>{
       // res.send(result);
       res.render('blogs/index', {title: 'Blogs', blogs: result})
    })
    .catch((err)=>{
        console.log(err);
    });
}

const blog_single = (req, res) => {
    const blogId = req.params.id;
    Blog.findById(blogId)
    .then((result)=>{
        res.render('blogs/single-blog', {title: 'Blog Details', blog: result});
    })
    .catch((err)=>{
        res.status(404).render('404', {title: "Blog not found"});
    });
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'Blogs'});
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.log(err);
    });
}

const blog_delete = (req, res) => {
    const blogId = req.params.id;
    Blog.findByIdAndDelete(blogId)
        .then((result)=>{
            res.json({ redirect: '/blogs'})
        })
        .catch((err)=>{
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_single,
    blog_create_get,
    blog_create_post,
    blog_delete
}