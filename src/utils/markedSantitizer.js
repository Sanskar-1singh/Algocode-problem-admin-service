const marked=require('marked');
const TurndownService=require('turndown');
const sanitizeHtmllibrary=require('sanitize-html');

function sanitizeMarkdowncontent(markdownContent){

    const turndownservice=new TurndownService();
    // convert markdown to html

    const convertedHtml=marked.parse(markdownContent);
    // console.log("converted  html",convertedHtml);
    //sanitize  html

    const sanitizehtml=sanitizeHtmllibrary(convertedHtml,{
        allowedTags:sanitizeHtmllibrary.defaults.allowedTags.concat(['img'])
    });
           // console.log("sanitize html",sanitizehtml)
    const sanitizeMarkdown=turndownservice.turndown(sanitizehtml);
    //console.log(sanitizeMarkdown);
    return sanitizeMarkdown;
}

module.exports=sanitizeMarkdowncontent;