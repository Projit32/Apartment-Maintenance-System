const createPersonalDataMailTemplate=(mailData)=>{
  
  return `<!DOCTYPE html>
  <html>
  <head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <style type="text/css">
  /* CLIENT-SPECIFIC STYLES */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; }
  
  /* RESET STYLES */
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
  }
  
  /* MEDIA QUERIES */
  @media screen and (max-width: 480px) {
      .mobile-hide {
          display: none !important;
      }
      .mobile-center {
          text-align: center !important;
      }
  }
  
  /* ANDROID CENTER FIX */
  div[style*="margin: 16px 0;"] { margin: 0 !important; }
  </style>
  </head>
  <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
  
  
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
          <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
  
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
              <tr>
                  <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#044767">
  
                  <div style="display:inline-block; max-width:80%; min-width:100px; vertical-align:top; width:100%;">
                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr>
                              <td align="center" valign="top" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;" class="mobile-center">
                                  <h1 style="font-size: 36px; font-weight: 800; margin: 0; color: #ffffff;">Personal Information and Payment History</h1>
                              </td>
                          </tr>
                      </table>
                  </div>
  
                  </td>
              </tr>
              <tr>
                  <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;" bgcolor="#ffffff">
  
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                      <tr>
                          <td align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                              <img src="https://proapplication.000webhostapp.com/roopvilla_logo.png" width="350" height="300" style="display: block; border: 0px;" /><br>
                              <h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                  Hi ${mailData.name}!
                              </h2>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                              <p style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                                  To maintain transparency, we completely discolse what we have collected on you. You can review them and report inaccuracies, if any.
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td align="left" style="padding-top: 20px;">
                              <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                  <tr>
                                      <td width="50%" align="left" bgcolor="#eeeeee" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                          Info
                                      </td>
                                      <td width="50%" align="right" bgcolor="#eeeeee" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                          Data
                                      </td>
                                  </tr>
                                  <tr>
                                      <td width="50%" align="left" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                          Name
                                      </td>
                                      <td width="50%" align="right" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                          ${mailData.name}
                                      </td>
                                  </tr>
                                  <tr>
                                      <td width="50%" align="left" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                          Flats in possesion
                                      </td>
                                      <td width="50%" align="right" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                          ${mailData.flats}
                                      </td>
                                  </tr>
                                  <tr>
                                      <td width="50%" align="left" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                          Email Addresses Registered
                                      </td>
                                      <td width="50%" align="right" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                          ${mailData.emails}
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
  
  
                  </table>
  
                  </td>
              </tr>
               <tr>
                  <td align="center" height="100%" valign="top" width="100%" style="padding: 0 35px 35px 35px; background-color: #ffffff;" bgcolor="#ffffff">
  
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">
                      <tr>
                          <td align="center" valign="top" style="font-size:0;">
  
                              <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
  
                                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                      <tr>
                                          <td align="left" valign="top" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                              <p style="font-weight: 800;">Registered Address</p>
                                              <p>Flat(s) ${mailData.flats}<br>210, Dum Dum Park,<br>${mailData.floor} Floor,<br>South Dum Dum, Kolkata - 55</p>
  
                                          </td>
                                      </tr>
                                  </table>
                              </div>
  
                              <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                      <tr>
                                          <td align="left" valign="top" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                              <p style="font-weight: 800;">These information is upto date as of:</p>
                                              <p>${new Date()}</p>
                                          </td>
                                      </tr>
                                  </table>
                              </div>
  
                          </td>
                      </tr>
                  </table>
  
                  </td>
              </tr>
              <tr>
                  <td align="center" style=" padding: 35px; background-color: #1b9ba3;" bgcolor="#1b9ba3">
  
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                      <tr>
                          <td align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                              <h2 style="font-size: 24px; font-weight: 800; line-height: 30px; color: #ffffff; margin: 0;">
                                  The payment history of the monthly maintenance for this year.
                              </h2>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" style="padding: 25px 0 15px 0;">
  
                              <table>
                                  <!-- MONTHLY DATA -->
                                      <tr>
                                          <td>
                                              <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                  <tr>
                                                      <td width="25%" align="center" bgcolor="#eeeeee" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                          Month
                                                      </td>
                                                      <td width="25%" align="center" bgcolor="#eeeeee" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                          Year
                                                      </td>
                                                      <td width="25%" align="center" bgcolor="#eeeeee" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                          Payment Status
                                                      </td>
                                                      <td width="25%" align="center" bgcolor="#eeeeee" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                          Amount
                                                      </td>
                                                  </tr>
  
                                                  <!-Template for Monthly Data-->

                                                  ${getPaymentData(mailData)}
  
                                                  <!-Template for Monthly Data-->
                                              </table>
                                          </td>
                                      </tr>
                                      
                                      <!--BORDER-->
  
                                      <tr>
                                          <td>
                                              <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                  <tr>
                                                      <td width="75%" align="left" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee; color: white;">
                                                          TOTAL
                                                      </td>
                                                      <td width="25%" align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee; color: white;">
                                                          ${mailData.total}
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
  
                                      <!-- MONTHLY DATA END -->
                              </table>
  
                          </td>
                      </tr>
                  </table>
  
                  </td>
              </tr>
              <tr>
                  <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
  
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                      <tr>
                          <td align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">
                              <p style="font-size: 14px; font-weight: 800; line-height: 18px; color: #333333;">
                                  <p>&copy; Roopvilla Project</p>
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td align="left" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                              <p style="font-size: 14px; font-weight: 400; line-height: 20px; color: #777777;">
                                  If you feel that there are some inaccuracies, please write us an <a href="mailto:roopvilla210ddp@gmail.com" >email here</a>.
                              </p>
                          </td>
                      </tr>
                  </table>
  
                  </td>
              </tr>
          </table>
  
          </td>
      </tr>
  </table>
  
  
  </body>
  </html>
  `


}

const getPaymentData = (data)=>{

  finalTable=""

  data.payments.forEach(element => {

    paymentColor= element.status === 'YES' ? '#B8FF4B' : '#FF3825'

    rowValue=
              `<tr>
                  <td width="02%" align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px; color: white;">
                      ${element.month}
                  </td>
                  <td width="02%" align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px; color: white;">
                      ${element.year}
                  </td>
                  <td width="02%" align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px; " >
                      <b style="color: ${paymentColor};">${element.status}</b> 
                  </td>
                  <td width="02%" align="center" style="font-family: Times New Roman, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px; color: white;">
                      ${element.amount}
                  </td>
              </tr>`

    finalTable+=rowValue
    
  });

  return finalTable

}


module.exports={createPersonalDataMailTemplate}