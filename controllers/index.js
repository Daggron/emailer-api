const nodemailer = require('nodemailer');

exports.mailer = async (req,res) => {
    const {
           name,
           userEmail,
           phoneNumber,
           message,
           supportmail,
           subject,
           ...rest
    } = req.body;

    console.log(userEmail);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ashokbhaichitkara@gmail.com',
            pass: 'Cesium131',
        }
    });
    transporter.sendMail({
        from: `${name} ⚡ 🖐`,
        to: `${supportmail}`,
        subject: `${subject? subject: '"Contact Support Form Email Recieved"'}`,
        html: `${message}
               ${name? `<br/><Strong>Name ${name}</Strong>`: ''} 
               ${phoneNumber? `<br/><Strong>Contact number ${phoneNumber}</Strong>`: ''}
               ${userEmail? `<br/><Strong>User Email ${userEmail}</Strong>`: ''}`,
    });

    return res.json({
        success: true,
        message: "Your response has been recorded"
    })
}
