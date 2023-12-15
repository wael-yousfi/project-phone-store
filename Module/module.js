const mongoose = require("mongoose")
const product_schema= new mongoose.Schema(
    {   //name est required
        name:{type:String,required:true},
        description:String,
        price: Number,
        image: String
    },
    {   //date de la creation ou bien la modification
       timestamps: true 
    }
)
//creation de la schema
module.exports=mongoose.model("products",product_schema) 


