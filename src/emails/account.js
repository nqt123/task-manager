const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nqt@nqt.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to : email,
        from: "nqt123@nqt.com",
        subject: 'Let me know your problems!',
        text: `Hi ${name}, sorry about late for answer, we had cancelled your register.`
    })
}
module.exports = { sendWelcomeEmail, sendCancelationEmail }