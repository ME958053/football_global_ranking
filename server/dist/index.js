import Global from './Global.js';
import * as fs from 'fs';
//FILEPATHS
const countriesRankingFilePath = '../data/spi_global_rankings_intl.json';
const clubRankingFilePath = '../data/spi_global_rankings.json';
//ARRAY FOR DATA
let countriesAvgOff = [];
let countriesAvgDef = [];
let countriesAvgSpi = [];
let clubsAvgOff = [];
let clubsAvgDef = [];
let clubsAvgSpi = [];
//Reads the files and parses the Countries File 
fs.readFile(countriesRankingFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    try {
        // Parse the JSON data
        const countriesRanking = JSON.parse(data);
        let country = null;
        // Now you can work with jsonData as a JavaScript object
        for (const i in countriesRanking) {
            country = new Global(countriesRanking[i].rank, countriesRanking[i].name, countriesRanking[i].off, countriesRanking[i].def, countriesRanking[i].spi, countriesRanking[i].confed);
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
fs.readFile(clubRankingFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    try {
        // Parse the JSON data
        const clubsRanking = JSON.parse(data);
        let club;
        // Now you can work with jsonData as a JavaScript object
        for (const i in clubsRanking) {
            club = new Global(clubsRanking[i].rank, clubsRanking[i].name, clubsRanking[i].off, clubsRanking[i].def, clubsRanking[i].spi, clubsRanking[i].league);
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
//# sourceMappingURL=index.js.map