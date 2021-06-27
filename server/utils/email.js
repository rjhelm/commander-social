import nodemailer from 'nodemailer';

const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;

// transporter object for sending email
const transporter = nodemailer.createTransport({
    service: MAIL_SERVICE,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
});

// email user
export const sendEmail = ({ to, subject, html }) => {
    return new Promise((resolve, reject) => {
        const options = { from: MAIL_USER, to, subject, html };

        return transporter
            .sendMail(options)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};