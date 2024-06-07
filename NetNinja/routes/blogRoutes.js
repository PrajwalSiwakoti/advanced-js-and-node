const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/add-blog', (req,res)=>{
    const blog = new Blog({
        title: 'Shradha Maskey blog',
        snippet: 'about my make up blog',
        body: 'more about makeup blog'
    });

    blog.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

router.get('/blogs', blogController.blog_index);
router.get('/blogs/create', blogController.blog_create_get);
router.post('/blogs', blogController.blog_create_post);
router.get('/blogs/:id', blogController.blog_single);
router.delete('/blogs/:id', blogController.blog_delete);

module.exports = router;