var webPage = require("webpage");
var page = webPage.create();
var postBody = "username=panzhh;password:123456";

page.open("http://www.google.com", "POST", postBody, function(status){
    console.log("status=" + status);
    phantom.exit();
});