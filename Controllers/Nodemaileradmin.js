const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'youssfiwael88@gmail.com', // generated ethereal user
    pass: 'hwso wwdu zmrr faod', // generated ethereal password
  },
});

const sendEmailAdmin = async (req, res) => { 
  const { email} = req.body;
  //console.log (email, subject, message);

  var mailOptions = {
    from: "youssfiwael88@gmail.com",
    to: email,
    subject: "vous avez inscrire dans notre site",
    html:` <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            <h1> Contact form</h1>
            ${email}
            `
  };

  const info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        res.status(400)
        .send(error)
    } else {
      //console.log("Email sent successfully!");
      res.status(200)
        .send({message:'Email sent successfully!'})
    }
  });
};

module.exports = { sendEmailAdmin };