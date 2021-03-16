// Import dependencies.
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');
const jsdom = require("jsdom");

// Make a GET request to our URL.
const Http = new XMLHttpRequest();
// Demo call: "https://darsh.sportsvideo.net/new-api/matches?timeZone=-330&date=" + year + "-" + month + "-" + day
const urlApi = "https://darsh.sportsvideo.net/new-api/matches?timeZone=-330&date=2021-03-15";
Http.open("GET", urlApi);
Http.send();

Http.onreadystatechange = (e) => {
    const data = Http.responseText;
    fs.writeFile('proStreamz.json', data, (err) => { 
        if (err) throw err; 
    });
}