const emailTemplate = (
  styles: string,
  html: string,
  title?: string
): string => {
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
