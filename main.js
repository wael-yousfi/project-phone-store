const express=require("express");
const router = require("./Router/Router");
const userRouter = require("./Router/userRouter")
const connection = require("./DB/db");
const cors = require("cors");
const routerPayment = require("./Router/PaiementRouter");
const port = 5668
const app= express() 
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
})) 
connection()
app.listen(port,console.log(`server is runing at http://192.168.3.63:${port}`))
app.use("/product",router)
app.use("/users",userRouter)
app.use('/paiement',routerPayment)

 