const mongoose = require('mongoose')

// connect or create new database.
mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`)
    .then(()=> console.log("Node connected to mongoDB(JWTDataBase)."))
    .catch((err)=> console.log("Database Connection Error: ",err))
