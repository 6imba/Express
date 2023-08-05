const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// defined schema of a model|collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already exist"]
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    tokens: [{ //token filed as an array of an object and we are using outer {} to define the schema of inner object.
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function(){
    try{
        const payload = {user_id:this._id.toString()}
        const generatedToken = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: 30000})
        this.tokens = this.tokens.concat({token:generatedToken})
        // await this.save()
        return generatedToken
    }catch(error){
        console.log(error)
    }
}

// create mongodb_collection mapping mongoose_model with respective mongoose_schema.
const userModel = new mongoose.model("testUsersCollection", userSchema);

module.exports = userModel