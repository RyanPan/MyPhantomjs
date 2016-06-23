var webPage = require("webpage");
var page = webPage.create();
var settings = {
    operation: "POST",
    encoding: "utf8",
    header: {
        "Content-Type": "application/json"
    },
    data: JSON.stringify({
      some: "data",
      another: ["custom", "data"]  
    })
};

page.open("http://www.yqj.cn", settings, function(status){
    console.log("status:" + status);
});