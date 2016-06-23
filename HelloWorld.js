var webPage = require("webpage");
var page = webPage.create();
page.open("http://www.baidu.com", function(status){
    if (status !== "success") {
        console.log("open fail!");
    }
    else{
        console.log("open success!");
    }
    phantom.exit();
})