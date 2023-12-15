const {body,validationResult}= require("express-validator")

exports.registervalidation= [
    body("email","email is note valide").isEmail(),
    body("password","minimum length 6 cara").isLength({min:6}),
] 

exports.loginvalidation= [
    body("email","email is note valide").isEmail(),
    body("password","minimum length 6 cara").isLength({min:6})
]

exports.validation = (req,res,next)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).send({errors:errors.array()})
    }
    next()
} 