const products= require("../Module/module")

exports.getProduct=async(req,res)=>{
    try {
        const AllProducts= await products.find()
         res.status(200)
            .send({message:"ok",AllProducts})

    } catch (error) {
        res.status(500)
            .send({message:"erreur"})
    }
}

exports.AddProduct= async(req,res) =>{
    try {
        const product = new products(req.body)
        await product.save()
        res.status(200)
            .send({message:"ok",product})
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}
exports.DeletProduct = async(req,res) =>{
    try {
        const product = await products.findByIdAndDelete(req.params.id)
        res.status(200)
            .send({message:"product supprime",product})
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}
exports.UpdateProduct = async(req,res)=>{
    try {
        const product = await products
            .findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200)
        .send({message:"product modifie",product})    
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}
exports.findProduct = async(req,res)=>{
    try {
        const product= await products.findById(req.params.id)
        res.status(200)
        .send({message:"product existe",product}) 
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}
exports.deletProducts = async(req,res)=>{
    const {data}= req.body
    try {
        const product= await products
        .deleteMany({_id:{$in:data}})
        res.status(200)
        .send({message:"products supprime",product}) 
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}