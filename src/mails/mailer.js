const nodeMailer = require('nodemailer')
const { google } = require('googleapis')
const ErrorHandler = require('../utils/error-handler')
const MonthlyExpenseTemplate = require('./templates/monthly-expense')
const PersonalDataTemplate = require('./templates/personal-data')
const OAuth2 = google.auth.OAuth2

const mailerConfig={
    CLIENT_ID : process.env.GMAIL_CLIENT_ID,
    CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET,
    REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,
    USER: 'roopvilla210ddp@gmail.com'
}

const OAuth2_client = new OAuth2(mailerConfig.CLIENT_ID,mailerConfig.CLIENT_SECRET, "https://developers.google.com/oauthplayground")
OAuth2_client.setCredentials({refresh_token:mailerConfig.REFRESH_TOKEN})

const generateMonthlyExpenseMail= (mailData,response) =>{

    const mailOptions ={
        from: `Roopvilla Apartment <${mailerConfig.USER}>`,
        to: mailData.emails,
        subject: `Roopvilla Monthly Ledger for ${mailData.month}'${mailData.year}`,
        html: MonthlyExpenseTemplate.createMonthlyExpensesMailTemplate(mailData)
    }

    sendMail(mailOptions, response)

}

const generatePersonalDataMail=(mailData,response)=>{

    const mailOptions ={
        from: `Roopvilla Apartment <${mailerConfig.USER}>`,
        to: mailData.emails,
        subject: `Your Personal Information`,
        html: PersonalDataTemplate.createPersonalDataMailTemplate(mailData)
    }

    sendMail(mailOptions, response)
}

const sendMail= (mailOptions, response)=>{
    const accessToken=OAuth2_client.getAccessToken()

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: mailerConfig.USER,
            clientId: mailerConfig.CLIENT_ID,
            clientSecret: mailerConfig.CLIENT_SECRET,
            refreshToken: mailerConfig.REFRESH_TOKEN,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
          }
    })

    transporter.sendMail(mailOptions,(err,info)=>{
        transporter.close()
        if(err){
            console.log("Error in mail sending", err)
            ErrorHandler.handleError(err,response)
        }
        else{
            response.status(201).send({envelop: info.envelope,
                response: info.response
            })
        } 
    })
}

module.exports ={generateMonthlyExpenseMail, generatePersonalDataMail}