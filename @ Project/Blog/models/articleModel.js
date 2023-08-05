const mongooseDB = require('mongoose')

const articleSchema = new mongooseDB.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
module.exports = mongooseDB.model('Articles', articleSchema) // Collection name in MongoDB, ArticleModel, CollectionSchema
