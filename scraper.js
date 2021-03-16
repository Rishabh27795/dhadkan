// Import dependencies.
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');
const jsdom = require("jsdom");

// Make a GET request to our URL.
const Http = new XMLHttpRequest();
const url = "https://www.totalsportek.com/category/football/";
Http.open("GET", url);
Http.send();

// Call the getStreamz function on the response data.
// Our response data is a HTML string.
Http.onreadystatechange = (e) => {
    const data = Http.responseText;
    getStreamz(data);
}

function getStreamz(data) {
    // Using JSDom to build a DOM tree from the string HTML.
    const dom = new jsdom.JSDOM(data);
    var anchors = dom.window.document.querySelectorAll("a");
    var streamz = {}
    for (var i=0; i<anchors.length; i++) {
        var nametext = anchors[i].textContent;
        var cleantext = nametext.replace(/\s+/g, ' ').trim();
        var cleanlink = anchors[i].href;
        streamz[cleantext] = cleanlink;
    };

    // For local testing, uncomment the code below to investigate the json object. 
    // fs.writeFile('streamz.json', JSON.stringify(streamz), (err) => { 
    //     if (err) throw err; 
    // });
}