const mongoose = require("mongoose")
const connection=async ()=>{
    try {
        await mongoose
        .connect("mongodb+srv://youssfiwael88:e0QgX8w8u0vGjFlf@cluster0.q2febq6.mongodb.net/?retryWrites=true&w=majority")
        
        console.log("database is connect")
    } catch (error) {
        console.log(`Could not connect to MongoDB: ${error.message}`)
    }
}
module.exports= connection  