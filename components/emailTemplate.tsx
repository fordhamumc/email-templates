import fonts from "./fonts";

interface Props {
  styles: string;
  html: string;
  title?: string;
}

const emailTemplate = ({ styles, html, title }: Props) => {
  const titleTag = title ? `<title>${title}</title>\n    ` : "";

  return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    ${titleTag}<meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://use.typekit.net/hsy3jdx.css" rel="stylesheet" type="text/css" />
    <!--<![endif]--> 
    ${styles}
    <style data-embed>
      #outlook a {
        padding: 0;
      }

      .ReadMsgBody {
        width: 100%;
      }

      .ExternalClass {
        width: 100%;
      }

      .ExternalClass * {
        line-height: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        max-width: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      p {
        display: block;
        Margin: 0 0 18px 0; 
      }
      ul {
        Margin-top:0;
        Margin-bottom:0;
        padding-bottom: 8px;
      }
      li {
        Margin-bottom: 10px;
      }
      a {
        color: #900028 !important;
        text-decoration: none;
        font-family: ${fonts.link};
      }
      .address a {
        color: #594f51 !important;
        text-decoration: none;
        font-family: ${fonts.text};
      }
      .button {
        color: #ffffff !important;
      }
    </style>
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]--> 
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
    table, table td {border-collapse: collapse;}
    h1, h2, h3 {font-family: 'Arial Narrow', sans-serif !important;}
    .ExternalClass * {line-height: 100%}
    </style>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
    .outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
  </head>
  <body class="body">
    ${html}
  </body>
</html>

  `;
};

export default emailTemplate;
