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

const sendEmail = async (req, res) => { 
  const { email, subject, message } = req.body;
  console.log (email, subject, message);

  var mailOptions = {
    from: email,
    to: "youssfiwael88@gmail.com",
    subject: subject,
    html:` <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            <h1> Contact form</h1>
            ${email}
            ${message}
            `
  };

  const info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      //console.log("Email sent successfully!");
      res.status(200)
        .send({message:'Email sent successfully!'})
    }
  });
};

module.exports = { sendEmail };