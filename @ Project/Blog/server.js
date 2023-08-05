const express = require('express');
const mongooseObj = require('mongoose');
const ArticleModel = require('./models/articleModel')
const articleRouter = require('./routes/articlesRoute');

const app = express()
mongooseObj.connect("mongodb://localhost:27017/blog")

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.get('/', async (req, res) => {
    const articles = await ArticleModel.find();
    console.log(articles)
    // console.log(Object.keys(ArticleModel.find()));
    // console.log(ArticleModel.find().mongooseCollection);
    // console.log(Object.keys(ArticleModel.find().mongooseCollection));
    // console.log(ArticleModel.find().mongooseCollection.collectionName);
    res.render('articlesViewFolder/index', {articles: articles})
    // res.send("server index")
})

app.use('/articles', articleRouter);
app.listen(5000);