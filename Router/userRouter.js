var express = require("express")
const { RegisterUser, getUser, LoginUser, UpdateUser, DeleteUser, UpdateUser2} = require("../Controllers/userController")
const { registervalidation, validation, loginvalidation } = require("../middleware/Validation")
const { sendEmail } = require("../Controllers/Nodemailer")
const { sendEmailAdmin } = require("../Controllers/Nodemaileradmin")
 
var userRouter = express.Router()

userRouter.get("/get",getUser)
userRouter.post("/post/",registervalidation,validation,RegisterUser) 
userRouter.post("/login",loginvalidation,validation,LoginUser)
userRouter.put("/update/:id",UpdateUser)
//userRouter.put("/update2/:id",UpdateUser2 )
userRouter.delete("/delete/:id",DeleteUser)
userRouter.post("/sendemail",sendEmail)
userRouter.post('/sendEmailAdmin',sendEmailAdmin)
module.exports = userRouter