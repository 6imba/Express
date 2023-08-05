const express = require('express')
const router = express.Router()
const ArticleModel = require('../models/articleModel')

router.get('/', (req,res) => {
    res.send('In articles!')
})

router.get('/create', (req,res) => {
    res.render('articlesViewFolder/createNew', { articleObj: new ArticleModel() })
})

router.post('/', (req, res) => {
    const fillArticleObj = new ArticleModel({
        title: req.body.title1,
        description: req.body.description1,
        markdown: req.body.markdown1
    })
    try{
        saveArticleObj = fillArticleObj.save()
        res.redirect('articles/saved')
    } catch(err){
        console.log('Look error: ', err)
        res.render('articlesViewFolder/createNew', {articleObj: fillArticleObj})
    }
})

router.get('/saved', (req, res) => {
    console.log('New article created !')
    res.send("Saved !")
})

module.exports = router
// console.log(typeof(router))