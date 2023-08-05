const getAllBlogs =(req,res)=> {
    res.send("blog retrieve all api.")
}

const getABlog = (req,res)=> {
    res.send(`get a blog (${req.params.id}) api.`)
}

const createNewBlog = (req,res)=> {
    res.send("blog create a api.")
}

const updateBlog = (req,res)=> {
    res.send("blog update patch a api.")
}

const deleteBlog = (req,res)=> {
    res.send("blog delete a api.")
}

module.exports = {getAllBlogs,getABlog,createNewBlog,updateBlog,deleteBlog}