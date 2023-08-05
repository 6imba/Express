// Import Modules:
const express = require('express')
const router = express.Router()
const path = require("path")
const blogs = require("../data/blogsdata")

router.get("/", (req,res) => { //url: http://localhost:3000/
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    // res.sendFile(path.join(__dirname,"../views/index.html"))
    res.render("index.handlebars");
})
router.get("/blogs", (req,res) => { //url: http://localhost:3000/blogs
    // blogs.forEach(blog => {
        //     console.log(blog.title)
        // })
    // res.sendFile(path.join(__dirname,"../templates/blogsHome.html"))
    res.render("blogsHome.handlebars", {allBlogs: blogs});
})
router.get("/blogpost/:postSlug", (req,res) => { //url: http://localhost:3000/blogpost/learn-seo
    const aBlogPost = blogs.filter((blog) => req.params.postSlug === blog.slug)
    // console.log(aBlogPost)
    // console.log(aBlogPost[0])
    // console.log(aBlogPost[0].title)
    // res.sendFile(path.join(__dirname,"../templates/blogPost.html"))
    // res.render("blogPost.handlebars", {blog: aBlogPost});
    res.render("blogPost.handlebars", {blog: aBlogPost[0]});
})

module.exports = router;