const $ = require('jquery');

$(document).ready(function(){
  console.log('hello world');
  
//  var htmlSource = fs.readFileSync("./thrush/index.html", "utf8");

//  call_jsdom(htmlSource, function (window) {
//      var $ = window.$;

      var title = $("title").text();
      $("h1").text(title);

      console.log(title);

//      console.log(documentToSource(window.document));
//  });
});
