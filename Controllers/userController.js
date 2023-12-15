const User = require("../Module/userModule")
//crypt la MDP
const bcrypt = require('bcryptjs')

//jwt = json web token
const jwt = require('jsonwebtoken')
// @desc    Get  user
// @route   /users/get
// @access  Private
exports.getUser = async (req, res) => {
  try {
    const AllUsers = await User.find()
    res.status(200)
      .send({ message: "ok", AllUsers })

  } catch (error) {
    res.status(500)
      .send({ message: "erreur" })
  }
}
// @desc    Register a new user
// @route   /users
// @access  Public

exports.RegisterUser = async (req, res) => {
  // Get user data from request body
  const { name, email, password } = req.body;
  // Validate request body
  //const errors = validationResult(req);
  if (!name || !email || !password) {

    res.status(400)
    throw new Error('Please include all fields')
  }


  //   Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //   Hash password
  // docs: https://www.npmjs.com/package/bcryptjs
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  //   create user
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
}
//Generate token
const generateToken = (id) => {
  const secretKey = process.env.JWT_SECRET || 'abc123';

  return jwt.sign({ id }, secretKey, {
    expiresIn: '30d'
  })
}

exports.LoginUser = async (req, res) => {
  // Get user data from request body
  const { email, password } = req.body;
  // Validate request body
  //const errors = validationResult(req);
  if (!email || !password) {

    res.status(400)
    throw new Error('Please include all fields')
  }


  //   Check if user exists and the correcte password
  const userExists = await User.findOne({ email });

  if (
    userExists &&
    (await bcrypt.compare(
      typeof password === 'undefined' ? '' : password,
      userExists.password
    ))
  ) {
    res.status(200).json({user:userExists,
      token: generateToken(userExists.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }


}

/*exports.UpdateUser= async(req,res)=>{
 
    try {
     const usermodif = await User 
         .findByIdAndUpdate(req.params.id,{$set:req.body})
         res.status(200)
         .send({message:"User modifie",usermodif})     
         console.log(req.params.id)
 } catch (error) {
     res.status(500)
     .send(error)
 }
}*/
exports.UpdateUser = async (req, res) => {
  const { name, image, email, password } = req.body;
  console.log(req.body);

  try {
    const userModif = await User.findById(req.params.id);

    if (userModif) {
      let hashedPassword; 
      console.log("MP envoye par client "+req.body.password)
      if (!req.body.password) {
       
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt); 
        console.log('nouveau psw ' + hashedPassword);
     

      const Usermodif = await User.findByIdAndUpdate(
        req.params.id,
        { $set: { password: hashedPassword , name,email,image} },
        { new: true } 
      );

      res.status(200).send({ message: 'User modifié', Usermodif });
    }else{
      console.log(req.body.password)
      const Usermodif = await User.findByIdAndUpdate(
        req.params.id,
        { $set: {  name,email,image} },
        { new: true } 
      );

      res.status(200).send({ message: 'User modifié', Usermodif });
    }

    }
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.DeleteUser = async (req, res) => {
  try {
    const userdelete = await User
      .findByIdAndDelete(req.params.id)
    res.status(200)
      .send({ message: "User supprime", userdelete })
  } catch (error) {
    res.status(500)
      .send(error)
  }
}
