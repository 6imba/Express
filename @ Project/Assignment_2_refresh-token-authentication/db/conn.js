import mongoose from "mongoose";

// connect or create new database.
const dbConnect = () => {
	mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`)
    .then(()=> console.log("Node connected to mongoDB(TestUserDataBase)."))
    .catch((err)=> console.log("Database Connection Error: ",err))

};

export default dbConnect;


