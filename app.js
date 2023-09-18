const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({

    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "",
        pass: "",

    }
})

const sendEmail = async()=>{
    await transporter.sendMail({
        to: "alan@gmail.com",
        from: "aziz@gmail.com",
        subject: "Test",
        html:"<h1>Hello tester</h1>",
    })
}