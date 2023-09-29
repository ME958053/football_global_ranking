"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("./Global");
var fs = require("fs");
//FILEPATHS
var countriesRankingFilePath = '../data/spi_global_rankings_intl.json';
var clubRankingFilePath = '../data/spi_global_rankings.json';
//ARRAY FOR DATA
var countriesAvgOff = [];
var countriesAvgDef = [];
var countriesAvgSpi = [];
var clubsAvgOff = [];
var clubsAvgDef = [];
var clubsAvgSpi = [];
//Reads the files and parses the Countries File 
fs.readFile(countriesRankingFilePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    try {
        // Parse the JSON data
        var countriesRanking = JSON.parse(data);
        var country = null;
        // Now you can work with jsonData as a JavaScript object
        for (var i in countriesRanking) {
            country = new Global_1.default(countriesRanking[i].rank, countriesRanking[i].name, countriesRanking[i].off, countriesRanking[i].def, countriesRanking[i].spi, countriesRanking[i].confed);
            countriesAvgDef.push(country.getDef());
            countriesAvgOff.push(country.getOff());
            countriesAvgSpi.push(country.getSpi());
        }
        console.log(country.setAvg(countriesAvgDef));
    }
    catch (jsonErr) {
        console.error('Error parsing JSON:', jsonErr);
    }
});
//Reads the files and parses the Countries File 
fs.readFile(clubRankingFilePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    try {
        // Parse the JSON data
        var clubsRanking = JSON.parse(data);
        var club = void 0;
        // Now you can work with jsonData as a JavaScript object
        for (var i in clubsRanking) {
            club = new Global_1.default(clubsRanking[i].rank, clubsRanking[i].name, clubsRanking[i].off, clubsRanking[i].def, clubsRanking[i].spi, clubsRanking[i].league);
            clubsAvgOff.push(club.getOff());
            clubsAvgDef.push(club.getDef());
            clubsAvgSpi.push(club.getSpi());
        }
    }
    catch (jsonErr) {
        console.error('Error parsing JSON:', jsonErr);
    }
});
// const server = http.createServer((_req: any, res: any) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('Football World Ranking');
//   res.end()
// });
// const port = 5173;
// const hostname = "172.31.196.52";
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
