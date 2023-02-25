const controller = {};
require('dotenv').config();
controller.getEmailHTML = () => {
    let date = new Date();
    /*
    Guatemala, ${date.toLocaleString('es-MX', {
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        month: 'long',
    })}
    */
    return `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <!-- NAME: TICKET -->
            <!--[if gte mso 15]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>*|MC:SUBJECT|*</title>
            
            <!--[if gte mso 6]>
            <style>
                table.mcnFollowContent{width:100%;}
                table.mcnShareContent{width:100%;}
                td.columnsContainer{width:30%;}
            </style>
            <![endif]-->
        <style type="text/css">
            p{
                margin:10px 0;
                padding:0;
            }
            table{
                border-collapse:collapse;
            }
            h1,h2,h3,h4,h5,h6{
                display:block;
                margin:0;
                padding:0;
            }
            img,a img{
                border:0;
                height:auto;
                outline:none;
                text-decoration:none;
            }
            body,#bodyTable,#bodyCell{
                height:100%;
                margin:0;
                padding:0;
                width:100%;
            }
            .mcnPreviewText{
                display:none !important;
            }
            #outlook a{
                padding:0;
            }
            img{
                -ms-interpolation-mode:bicubic;
            }
            table{
                mso-table-lspace:0pt;
                mso-table-rspace:0pt;
            }
            .ReadMsgBody{
                width:100%;
            }
            .ExternalClass{
                width:100%;
            }
            p,a,li,td,blockquote{
                mso-line-height-rule:exactly;
            }
            a[href^=tel],a[href^=sms]{
                color:inherit;
                cursor:default;
                text-decoration:none;
            }
            p,a,li,td,body,table,blockquote{
                -ms-text-size-adjust:100%;
                -webkit-text-size-adjust:100%;
            }
            .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
                line-height:100%;
            }
            a[x-apple-data-detectors]{
                color:inherit !important;
                text-decoration:none !important;
                font-size:inherit !important;
                font-family:inherit !important;
                font-weight:inherit !important;
                line-height:inherit !important;
            }
            a.mcnButton{
                display:block;
            }
            .mcnImage,.mcnRetinaImage{
                vertical-align:bottom;
            }
            .mcnTextContent{
                word-break:break-word;
            }
            .mcnTextContent img{
                height:auto !important;
            }
            .mcnDividerBlock{
                table-layout:fixed !important;
            }
        /*
        @tab Page
        @section background style
        @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
        */
            body,#bodyTable,#templateFooter{
                /*@editable*/background-color:#FDB813;
            }
        /*
        @tab Page
        @section background style
        @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
        */
            #bodyCell{
                /*@editable*/border-top:0;
            }
        /*
        @tab Page
        @section heading 1
        @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
        @style heading 1
        */
            h1{
                /*@editable*/color:#212223 !important;
                /*@editable*/font-family:Georgia;
                /*@editable*/font-size:40px;
                /*@editable*/font-style:normal;
                /*@editable*/font-weight:normal;
                /*@editable*/line-height:125%;
                /*@editable*/letter-spacing:-1px;
                /*@editable*/text-align:left;
            }
        /*
        @tab Page
        @section heading 2
        @tip Set the styling for all second-level headings in your emails.
        @style heading 2
        */
            h2{
                /*@editable*/color:#212223 !important;
                /*@editable*/font-family:Georgia;
                /*@editable*/font-size:26px;
                /*@editable*/font-style:normal;
                /*@editable*/font-weight:normal;
                /*@editable*/line-height:125%;
                /*@editable*/letter-spacing:-.75px;
                /*@editable*/text-align:left;
            }
        /*
        @tab Page
        @section heading 3
        @tip Set the styling for all third-level headings in your emails.
        @style heading 3
        */
            h3{
                /*@editable*/color:#212223 !important;
                /*@editable*/font-family:Georgia;
                /*@editable*/font-size:18px;
                /*@editable*/font-style:normal;
                /*@editable*/font-weight:normal;
                /*@editable*/line-height:125%;
                /*@editable*/letter-spacing:-.5px;
                /*@editable*/text-align:left;
            }
        /*
        @tab Page
        @section heading 4
        @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
        @style heading 4
        */
            h4{
                /*@editable*/color:#212223 !important;
                /*@editable*/font-family:Georgia;
                /*@editable*/font-size:16px;
                /*@editable*/font-style:normal;
                /*@editable*/font-weight:normal;
                /*@editable*/line-height:125%;
                /*@editable*/letter-spacing:normal;
                /*@editable*/text-align:left;
            }
        /*
        @tab Preheader
        @section preheader style
        @tip Set the background color and borders for your email's preheader area.
        */
            #templatePreheader{
                /*@editable*/background-color:#212223;
                /*@editable*/border-top:0;
                /*@editable*/border-bottom:0;
            }
        /*
        @tab Preheader
        @section preheader text
        @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
        */
            .preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{
                /*@editable*/color:#FFFFFF;
                /*@editable*/font-family:Helvetica;
                /*@editable*/font-size:10px;
                /*@editable*/line-height:125%;
                /*@editable*/text-align:left;
            }
        /*
        @tab Preheader
        @section preheader link
        @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
        */
            .preheaderContainer .mcnTextContent a{
                /*@editable*/color:#FFFFFF;
                /*@editable*/font-weight:normal;
                /*@editable*/text-decoration:underline;
            }
        /*
        @tab Header
        @section header style
        @tip Set the background color and borders for your email's header area.
        */
            #templateHeader{
                /*@editable*/background-color:#FDB813;
                /*@editable*/border-top:0;
                /*@editable*/border-bottom:0;
            }
        /*
        @tab Header
        @section header text
        @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
        */
            .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
                /*@editable*/color:#FFFFFF;
                /*@editable*/font-family:Helvetica;
                /*@editable*/font-size:16px;
                /*@editable*/line-height:150%;
                /*@editable*/text-align:left;
            }
        /*
        @tab Header
        @section header link
        @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
        */
            .headerContainer .mcnTextContent a{
                /*@editable*/color:#FFFFFF;
                /*@editable*/font-weight:normal;
                /*@editable*/text-decoration:underline;
            }
        /*
        @tab Columns
        @section column style
        @tip Set the background color and borders for your email's columns area.
        */
            #templateColumns{
                /*@editable*/background-color:#FFFFFF;
                /*@editable*/border-top:0;
                /*@editable*/border-bottom:1px solid #EFEFEF;
            }
        /*
        @tab Columns
        @section left column text
        @tip Set the styling for your email's left column text. Choose a size and color that is easy to read.
        */
            .leftColumnContainer .mcnTextContent,.leftColumnContainer .mcnTextContent p{
                /*@editable*/color:#212223;
                /*@editable*/font-family:Helvetica;
                /*@editable*/font-size:16px;
                /*@editable*/line-height:150%;
                /*@editable*/text-align:left;
            }
        /*
        @tab Columns
        @section left column link
        @tip Set the styling for your email's left column links. Choose a color that helps them stand out from your text.
        */
            .leftColumnContainer .mcnTextContent a{
                /*@editable*/color:#541900;
                /*@editable*/font-weight:normal;
                /*@editable*/text-decoration:underline;
            }
        /*
        @tab Columns
        @section right column text
        @tip Set the styling for your email's right column text. Choose a size and color that is easy to read.
        */
            .rightColumnContainer .mcnTextContent,.rightColumnContainer .mcnTextContent p{
                /*@editable*/color:#212223;
                /*@editable*/font-family:Helvetica;
                /*@editable*/font-size:16px;
                /*@editable*/line-height:150%;
                /*@editable*/text-align:left;
            }
        /*
        @tab Columns
        @section right column link
        @tip Set the styling for your email's right column links. Choose a color that helps them stand out from your text.
        */
            .rightColumnContainer .mcnTextContent a{
                /*@editable*/color:#541900;
                /*@editable*/font-weight:normal;
                /*@editable*/text-decoration:underline;
            }
        /*
        @tab Body
        @section body style
        @tip Set the background color and borders for your email's body area.
        */
            #templateBody,.backgroundColor{
                /*@editable*/background-color:#FDB813;
            }
        /*
        @tab Body
        @section body style
        @tip Set the background color and borders for your email's body area.
        */
            #templateBody{
                /*@editable*/border-top:0;
                /*@editable*/border-bottom:0;
            }
        /*
        @tab Body
        @section body container
        @tip Set the background color for your email's body container.
        */
            #bodyBackground{
                /*@editable*/background-color:#FFFFFF;
            }
        /*
        @tab Body
        @section body text
        @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
        */
            .bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{
                /*@editable*/color:#212223;
                /*@editable*/font-family:Helvetica;
                /*@editable*/font-size:16px;
                /*@editable*/line-height:150%;
                /*@editable*/text-align:left;
            }
        /*
        @tab Body
        @section body link
        @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
        */
            .bodyContainer .mcnTextContent a{
                /*@editable*/color:#541900;
                /*@editable*/font-weight:normal;
                /*@editable*/text-decoration:underline;
            }
        /*
        @tab Footer
        @section footer style
        @tip Set the background color and borders for your email's footer area.
        */
            #templateFooter{
                /*@editable*/border-top:0;
                /*@editable*/border-bottom:0;
            }
        /*
        @tab Footer
        @section footer text
        @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
        */
            .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
                /*@editable*/color:#212223;
                /*@editable*/font-family:Helvetica;
                /*@editable*/font-size:10px;
                /*@editable*/line-height:125%;
                /*@editable*/text-align:center;
            }
        /*
        @tab Footer
        @section footer link
        @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
        */
            .footerContainer .mcnTextContent a{
                /*@editable*/color:#212223;
                /*@editable*/font-weight:normal;
                /*@editable*/text-decoration:underline;
            }
        @media only screen and (max-width: 480px){
            body,table,td,p,a,li,blockquote{
                -webkit-text-size-adjust:none !important;
            }
    
    }	@media only screen and (max-width: 480px){
            body{
                width:100% !important;
                min-width:100% !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .templateContainer{
                max-width:600px !important;
                width:100% !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .columnsContainer{
                display:block!important;
                max-width:600px !important;
                padding-bottom:18px !important;
                padding-left:0 !important;
                width:100%!important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnRetinaImage{
                max-width:100% !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnImage{
                height:auto !important;
                width:100% !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
                max-width:100% !important;
                width:100% !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnBoxedTextContentContainer{
                min-width:100% !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnImageGroupContent{
                padding:9px !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
                padding-top:9px !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
                padding-top:18px !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnImageCardBottomImageContent{
                padding-bottom:9px !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnImageGroupBlockInner{
                padding-top:0 !important;
                padding-bottom:0 !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnImageGroupBlockOuter{
                padding-top:9px !important;
                padding-bottom:9px !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnTextContent,.mcnBoxedTextContentColumn{
                padding-right:18px !important;
                padding-left:18px !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
                padding-right:18px !important;
                padding-bottom:0 !important;
                padding-left:18px !important;
            }
    
    }	@media only screen and (max-width: 480px){
            .mcpreview-image-uploader{
                display:none !important;
                width:100% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section heading 1
        @tip Make the first-level headings larger in size for better readability on small screens.
        */
            h1{
                /*@editable*/font-size:24px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section heading 2
        @tip Make the second-level headings larger in size for better readability on small screens.
        */
            h2{
                /*@editable*/font-size:20px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section heading 3
        @tip Make the third-level headings larger in size for better readability on small screens.
        */
            h3{
                /*@editable*/font-size:18px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section heading 4
        @tip Make the fourth-level headings larger in size for better readability on small screens.
        */
            h4{
                /*@editable*/font-size:16px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section Boxed Text
        @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
        */
            .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
                /*@editable*/font-size:18px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section Preheader Visibility
        @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
        */
            #templatePreheader{
                /*@editable*/display:block !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section Preheader Text
        @tip Make the preheader text larger in size for better readability on small screens.
        */
            .preheaderContainer .mcnTextContent,.preheaderContainer .mcnTextContent p{
                /*@editable*/font-size:14px !important;
                /*@editable*/line-height:115% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section Header Text
        @tip Make the header text larger in size for better readability on small screens.
        */
            .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
                /*@editable*/font-size:18px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section Body Text
        @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
        */
            .bodyContainer .mcnTextContent,.bodyContainer .mcnTextContent p{
                /*@editable*/font-size:18px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section Left Column Text
        @tip Make the left column text larger in size for better readability on small screens. We recommend a font size of at least 16px.
        */
            .leftColumnContainer .mcnTextContent,.leftColumnContainer .mcnTextContent p{
                /*@editable*/font-size:18px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section Right Column Text
        @tip Make the right column text larger in size for better readability on small screens. We recommend a font size of at least 16px.
        */
            .rightColumnContainer .mcnTextContent,.rightColumnContainer .mcnTextContent p{
                /*@editable*/font-size:18px !important;
                /*@editable*/line-height:125% !important;
            }
    
    }	@media only screen and (max-width: 480px){
        /*
        @tab Mobile Styles
        @section footer text
        @tip Make the body content text larger in size for better readability on small screens.
        */
            .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
                /*@editable*/font-size:14px !important;
                /*@editable*/line-height:115% !important;
            }
    
    }</style></head>
        <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
            <!--*|IF:MC_PREVIEW_TEXT|*-->
            <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span><!--<![endif]-->
            <!--*|END:IF|*-->
            <center>
                <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                    <tr>
                        <td align="center" valign="top" id="bodyCell">
                            <!-- BEGIN TEMPLATE // -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center" valign="top">
                                        <!-- BEGIN PREHEADER // -->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templatePreheader">
                                            <tr>
                                                <td align="center" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="600" class="templateContainer">
                                                        <tr>
                                                            <td valign="top" class="preheaderContainer" style="padding-top:10px; padding-bottom:10px;"></td>
                                                        </tr>
                                                    </table>
                                                </td>                                            
                                            </tr>
                                        </table>
                                        <!-- // END PREHEADER -->
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" valign="top">
                                        <!-- BEGIN HEADER // -->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateHeader">
                                            <tr>
                                                <td align="center" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="600" class="templateContainer">
                                                        <tr>
                                                            <td valign="top" class="headerContainer" style="padding-top:10px; padding-bottom:10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
        <tbody class="mcnImageBlockOuter">
                <tr>
                    <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                            <tbody><tr>
                                <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                    
                                        
                                            <img align="center" alt="" src="https://mcusercontent.com/c47aae6c7ad5012bbbff34bb5/images/d4e682db-138e-b874-4dae-cbfec958f2c3.png" width="512" style="max-width:512px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        
                                    
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
        </tbody>
    </table></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- // END HEADER -->
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateBody">
                                            <tr>
                                                <td align="center" valign="top" style="padding-top:10px; padding-bottom:10px;">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="600" class="templateContainer">
                                                        <tr>
                                                            <td align="center" valign="top">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" id="bodyBackground">
                                                                    <tr>
                                                                        <td align="center" valign="top">
                                                                            <!-- BEGIN COLUMNS // -->
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateColumns">
                                                                                <tr>
                                                                                    <td align="left" valign="top" class="columnsContainer" width="50%" style="padding-top:9px; padding-bottom:9px;">
                                                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateColumn">
                                                                                            <tr>
                                                                                                <td valign="top" class="leftColumnContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                      <!--[if mso]>
                    <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->
                    
                    <!--[if mso]>
                    <td valign="top" width="300" style="width:300px;">
                    <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                <h2>¡Hola!</h2>
    
                            </td>
                        </tr>
                    </tbody></table>
                    <!--[if mso]>
                    </td>
                    <![endif]-->
                    
                    <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                      <!--[if mso]>
                    <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->
                    
                    <!--[if mso]>
                    <td valign="top" width="300" style="width:300px;">
                    <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                El motivo del presente correo es para notificarte que has sido añadido a la lista de contactos favoritos del grupo 4 de AyD1 
                            </td>
                        </tr>
                    </tbody></table>
                    <!--[if mso]>
                    </td>
                    <![endif]-->
                    
                    <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td align="left" valign="top" class="columnsContainer" width="50%" style="padding-top:9px; padding-bottom:9px;">
                                                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateColumn">
                                                                                            <tr>
                                                                                                <td valign="top" class="rightColumnContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                      <!--[if mso]>
                    <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->
                    
                    <!--[if mso]>
                    <td valign="top" width="300" style="width:300px;">
                    <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                Análisis y Diseño 1<br>
    Grupo 4<br>
    Guatemala, ${date.toLocaleString('es-MX', {
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        month: 'long',
    })}
                            </td>
                        </tr>
                    </tbody></table>
                    <!--[if mso]>
                    </td>
                    <![endif]-->
                    
                    <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
        <tbody class="mcnButtonBlockOuter">
            <tr>
                <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top" align="center" class="mcnButtonBlockInner">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonContentContainer" style="border-collapse: separate !important;border-radius: 3px;background-color: #212223;">
                        <tbody>
                            <tr>
                                <td align="center" valign="middle" class="mcnButtonContent" style="font-family: Arial; font-size: 16px; padding: 10px;">
                                    <a class="mcnButton " title="TE RECOMIENDO UNA CANCIÓN &lt;3" href="https://open.spotify.com/track/24RuYOdotpYBzP6U2sZoH0?si=da395e8c385b4190" target="_self" style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">TE RECOMIENDO UNA CANCIÓN &lt;3</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                            <!-- // END COLUMNS -->
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" valign="top">
                                                                            <!-- BEGIN BODY // -->
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" id="">
                                                                                <tr>
                                                                                    <td valign="top" class="bodyContainer" style="padding-top:10px; padding-bottom:10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                      <!--[if mso]>
                    <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->
                    
                    <!--[if mso]>
                    <td valign="top" width="600" style="width:600px;">
                    <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
    
    <h3>${id}</h3>
    
                            </td>
                        </tr>
                    </tbody></table>
                    <!--[if mso]>
                    </td>
                    <![endif]-->
                    
                    <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                      <!--[if mso]>
                    <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                    <tr>
                    <![endif]-->
                    
                    <!--[if mso]>
                    <td valign="top" width="600" style="width:600px;">
                    <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">                                                           
                                <em>
                                    Por que tu inventas e intentas hacer piruetas<br aria-hidden="true">
                                    ¿Con la verdad, si la verdad es de personas honestas?<br aria-hidden="true">
                                    Dime<br aria-hidden="true">
                                    Por que tu inventas e intentas hacer piruetas<br aria-hidden="true">
                                    ¿Con la realidad, si la verdad es de la gente honesta?<br aria-hidden="true"><br aria-hidden="true">
                                    ¿Ya no dices mentiras?<br aria-hidden="true">
                                    Eso es mentira...<br aria-hidden="true">
                                    Que dios te duplique lo que piensas cuando me miras<br aria-hidden="true">
                                    Y si todavía respiras aférrate de la vida<br aria-hidden="true">
                                    Porque... El tiempo pasa y se reducen las salidas<br aria-hidden="true">
                                    Mira a tu alrededor, hay. demasiada intriga<br aria-hidden="true">
                                    Pero donde esta el amor, si te preocupa es lo que digan las vecinas<br aria-hidden="true">
                                    Que se hacen llamar sus amigas<br aria-hidden="true">
                                    Si te darían la espalda si te montan una barriga...<br aria-hidden="true">
                                </em>
                            </td>
                        </tr>
                    </tbody></table>
                    <!--[if mso]>
                    </td>
                    <![endif]-->
                    
                    <!--[if mso]>
                    </tr>
                    </table>
                    <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                                                                                </tr>
                                                                            </table>
                                                                            <!-- // END BODY -->
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" valign="top" class="backgroundColor">
                                                                            <img src="https://cdn-images.mailchimp.com/template_images/gallery/eb_stubend.png" height="10" width="600" class="mcnImage" style="display:block; max-width:600px;">
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" valign="top" style="padding-bottom:40px;">
                                        <!-- BEGIN FOOTER // -->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateFooter">
                                            <tr>
                                                <td align="center" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="600" class="templateContainer">
                                                        <tr>
                                                            <td valign="top" class="footerContainer" style="padding-top:10px; padding-bottom:10px;"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- // END FOOTER -->
                                    </td>
                                </tr>
                            </table>
                            <!-- // END TEMPLATE -->
                        </td>
                    </tr>
                </table>
            </center>
        <script type="text/javascript"  src="/yP1W4iTGeYlxqCiM7KvA1LGD/7p3QVr6bYpuS9u/CyJwZQ/UGdlHW/4LDAc"></script></body>
    </html>
    
		
			`;
}



module.exports = controller;