import { fonts, sizes, colors } from "./defaults";

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
    <link href="https://use.typekit.net/kfw1and.css" rel="stylesheet" type="text/css" />
    <!--<![endif]--> 
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
        height: auto !important;
        line-height: 100%;
        max-width: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      h1, h2, h3 {
        font-family: ${fonts.heading};
        font-weight: bold;
        margin: 0;
      }
      h1 {
        font-size: 3.5em;
        line-height: 1;
        padding-bottom: 5px;
      }
      h2 {
        font-size: 1.69em;
        line-height: ${(sizes.lineHeight * 0.85).toFixed(2)};
      }
      h3 {
        font-size: 1.15em;
        line-height: ${(sizes.lineHeight * 0.85).toFixed(2)};
        padding-bottom: 5px;
      }
      p {
        display: block;
        Margin: 0 0 ${sizes.break}px 0; 
      }
      ul {
        Margin-top:0;
        Margin-bottom:0;
        padding-bottom: ${Math.round(sizes.break - sizes.breakSm * 0.5)}px;
      }
      li {
        Margin-bottom: ${Math.round(sizes.breakSm * 0.5)}px;
      }
      hr {
        border-top: 2px solid ${colors.rule};
      }
      a {
        color: #900028 !important;
        text-decoration: none;
        font-family: ${fonts.link};
      }
      .footer a {
        color: ${colors.text} !important;
        text-decoration: none;
        font-family: ${fonts.text};
      }
      .footer__tagline a {
        color: ${colors.text} !important;
        text-decoration: none;
        font-family: ${fonts.link};
      }
      .footer__address a {
        color: ${colors.light} !important;
        text-decoration: none;
        font-family: ${fonts.text};
      }
      .footer__links a {
        color: ${colors.primary} !important;
      }
      .button,
      .button a {
        color: #ffffff !important;
        text-decoration: none;
      }
      
      @media (max-width: 440px) {
        h1 {
          font-size: 2.6em !important;
          line-height: 1.1 !important;
        }
        h2 {
          font-size: 1.1em !important;
        }
      }
    </style>
    <style data-embed>
		  a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
		  
		  u + .body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      @media only screen and (max-width: 480px) {
        u ~ .body { min-width: 100vw; }
        u ~ .body .container { padding: 0 !important; }
      }
    </style>
    ${styles}
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
