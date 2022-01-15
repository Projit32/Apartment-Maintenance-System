const createMonthlyExpensesMailTemplate=(mailData)=>{
  
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml"><head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Roopvilla: Monthly Ledger</title>
      <style type="text/css">
        @import url(http://fonts.googleapis.com/css?family=Lato:400);
    
        /* Take care of image borders and formatting */
    
        img {
          max-width: 600px;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
    
        a {
          text-decoration: none;
          border: 0;
          outline: none;
        }
    
        a img {
          border: none;
        }
    
        /* General styling */
    
        td, h1, h2, h3  {
          font-family: Helvetica, Arial, sans-serif;
          font-weight: 400;
        }
    
        body {
          -webkit-font-smoothing:antialiased;
          -webkit-text-size-adjust:none;
          width: 100%;
          height: 100%;
          color: #37302d;
          background: #ffffff;
        }
    
         table {
          border-collapse: collapse !important;
        }
    
    
        h1, h2, h3 {
          padding: 0;
          margin: 0;
          color: #ffffff;
          font-weight: 400;
        }
    
        h3 {
          color: #21c5ba;
          font-size: 24px;
        }
    
        .important-font {
          color: #ff7300;
          font-weight: bold;
        }
    
        .hide {
          display: none !important;
        }
    
        .force-full-width {
          width: 100% !important;
        }
      </style>
    
      <style type="text/css" media="screen">
        @media screen {
           /* Thanks Outlook 2013! http://goo.gl/XLxpyl*/
          td, h1, h2, h3 {
            font-family: 'Lato', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
          }
        }
      </style>
    
      <style type="text/css" media="only screen and (max-width: 480px)">
        /* Mobile styles */
        @media only screen and (max-width: 480px) {
          table[class="w320"] {
            width: 320px !important;
          }
    
          table[class="w300"] {
            width: 300px !important;
          }
    
          table[class="w290"] {
            width: 290px !important;
          }
    
          td[class="w320"] {
            width: 320px !important;
          }
    
          td[class="mobile-center"] {
            text-align: center !important;
          }
    
          td[class="mobile-padding"] {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-bottom: 20px !important;
          }
    
          td[class="mobile-block"] {
            display: block !important;
            width: 100% !important;
            text-align: left !important;
            padding-bottom: 20px !important;
          }
    
          td[class="mobile-border"] {
            border: 0 !important;
          }
    
          td[class*="reveal"] {
            display: block !important;
          }
        }
      </style>
    </head>
    <body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
    <table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%">
      <tbody><tr>
        <td align="center" valign="top" bgcolor="#ffffff" width="100%">
    
        <table cellspacing="0" cellpadding="0" width="100%">
          <tbody><tr>
            <td style="border-bottom: 3px solid #e3882d;" width="100%">
              <center>
                <table cellspacing="0" cellpadding="0" width="500" class="w320">
                  <tbody><tr>
                    <td valign="top" style="padding:10px 0; text-align:left;" class="mobile-center">
                      <img width="250" height="62" src="https://proapplication.000webhostapp.com/roopvilla_logo.png">
                    </td>
                  </tr>
                </tbody></table>
              </center>
            </td>
          </tr>
          <tr>
            <td background="https://www.filepicker.io/api/file/kmlo6MonRpWsVuuM47EG" bgcolor="#8b8284" valign="top" style="background: url(https://www.filepicker.io/api/file/kmlo6MonRpWsVuuM47EG) no-repeat center; background-color: #8b8284; background-position: center;">
              <!--[if gte mso 9]>
              <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:303px;">
                <v:fill type="tile" src="https://www.filepicker.io/api/file/kmlo6MonRpWsVuuM47EG" color="#8b8284" />
                <v:textbox inset="0,0,0,0">
              <![endif]-->
              <div>
                <center>
                  <table cellspacing="0" cellpadding="0" width="530" height="303" class="w320">
                    <tbody><tr>
                      <td valign="middle" style="vertical-align:middle; padding-right: 15px; padding-left: 15px; text-align:left;" height="303">
    
                        <table cellspacing="0" cellpadding="0" width="100%">
                          <tbody><tr>
                            <td>
                              <h1>Roopvilla : Monthly Ledger For ${mailData.month}'${mailData.year} </h1><br>
                              <h2>Hi ${mailData.name}, here's the monthly earnings and expenses report from the maintenance for this month.</h2>
                              <br>
                            </td>
                          </tr>
                        </tbody></table>
    
                        
                      </td>
                    </tr>
                  </tbody></table>
                </center>
              </div>
              <!--[if gte mso 9]>
                </v:textbox>
              </v:rect>
              <![endif]-->
            </td>
          </tr>
          <tr>
            <td valign="top">
    
              <center>
                <table cellspacing="0" cellpadding="0" width="500" class="w320">
                  <tbody><tr>
                    <td valign="top" style="border-bottom:1px solid #a1a1a1;">
    
    
                    <table cellspacing="0" cellpadding="0" width="100%">
                      <tbody><tr>
                        <td style="padding: 30px 0;" class="mobile-padding">
    
                        <table class="force-full-width" cellspacing="0" cellpadding="0">
                          <tbody><tr>
                            <td style="text-align: left;">
                              <span class="important-font">
                                Projit Chandra, Treasury <br>
                              </span>Roopvilla Apartment<br>210, Dum Dum Park<br>Kolkata - 700055<br>
                             +91 - 87777 37002
     </td>
                            <td style="text-align: right; vertical-align:top;">
                              <span class="important-font">Generated On:<br>
                              </span>
                              ${new Date()}
    
                            </td>
                          </tr>
                        </tbody></table>
    
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 30px;" class="mobile-padding">
    
                          <table class="force-full-width" cellspacing="0" cellpadding="0">
                            <tbody><tr>
    
                              <td class="mobile-block" width="55%">
                                <table cellspacing="0" cellpadding="0" class="force-full-width">
                                  <tbody><tr>
                                    <td class="mobile-border" style="background-color: #e3882d; color: #ffffff; padding: 5px; border-right: 3px solid #ffffff;">
                                      Item
                                    </td>
                                  </tr>
                                  ${getCoulmnData(mailData.expData,'item')}
                                </tbody></table>
                              </td>
    
                              <td class="mobile-block" width="15%">
                                <table cellspacing="0" cellpadding="0" class="force-full-width">
                                  <tbody><tr>
                                    <td class="mobile-border" style="background-color: #e3882d; color: #ffffff; padding: 5px; border-right: 3px solid #ffffff;">
                                      Credit
                                    </td>
                                  </tr>
                                  ${getCoulmnData(mailData.expData,'credit')}
                                </tbody></table>
                              </td>
    
                              <td class="mobile-block" width="15%">
                                <table cellspacing="0" cellpadding="0" class="force-full-width">
                                  <tbody><tr>
                                    <td style="background-color: #e3882d; color: #ffffff; padding: 5px; border-right: 3px solid #ffffff">
                                      Debit
                                    </td>
                                    ${getCoulmnData(mailData.expData,'debit')}
                                </tbody></table>
                              </td>
    
                            <td class="mobile-block" width="15%">
                                <table cellspacing="0" cellpadding="0" class="force-full-width">
                                  <tbody><tr>
                                    <td class="mobile-border" style="background-color: #e3882d; color: #ffffff; padding: 5px;">
                                      Balance
                                    </td>
                                  </tr>
                                  ${getCoulmnData(mailData.expData,'balance')}
                                  </tr></tbody></table>
                              </td></tr>
                          </tbody></table>
    
                        </td>
                      </tr>
                      <tr>
                    <td class="mobile-padding">

                      <table cellspacing="0" cellpadding="0" width="100%">
                        <tbody><tr>
                          <td style="text-align: left;">
                            <i>**Please Note: The closing balance from last month has been added to the monthly maintenance of this month.</i>
                            <br>
                            <br>
                          </td>
                        </tr>
                      </tbody></table>

                    </td>
                  </tr>
                    </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
                <table cellspacing="0" cellpadding="0" width="500" class="w320">
                  <tbody><tr>
                    <td>
                      <table cellspacing="0" cellpadding="0" width="100%">
                        <tbody><tr>
                          <td class="mobile-padding" style="text-align:left;">
                          <br>Maintenance is our primary responsibility as a memeber of this society. This feeds the people who are directly or indirectly serving us even in these tough times. It's our duty to recoginize their service and provide them with their due earnings.
        <br>
        <br> If you observe any inaccuracies or inconsistancies in the records, please <a href="mailto:roopvilla210ddp@gmail.com">contact us</a> with the same.
                          <br>
                          <br>
                          Roopvilla Maintenance
                          <br>
                          <br>
                          <br>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </center>
            </td>
          </tr>
          
        </tbody></table>
        </td>
      </tr>
    </tbody></table>
    
    </body></html>`


}

const getCoulmnData=(data, property)=>{
  
  var rowsData=""
  data.forEach(element => {
    rowsData+=`<tr>
    <td style="background-color: #ebebeb; padding: 8px; border-top: 3px solid #ffffff;">
      ${element[property]}
    </td>
  </tr>`
  });
  return rowsData

}

module.exports={createMonthlyExpensesMailTemplate}