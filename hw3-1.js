const fs = require("fs");
const { exchangeRates } = require('exchange-rates-api');

let data = JSON.parse(fs.readFileSync("hw3/task1/data.json", "utf8"));
//console.log(data);
let data2 = JSON.parse(JSON.stringify(data));

//add new field
data["data"].map((elem) => elem.Currency = "USD");
data2["data"].map((elem) => elem.Currency = "EUR");

const getExRate = async () => {
    // Get exchange rate
    try{
    return await exchangeRates().setApiBaseUrl('https://api.exchangerate.host').latest().symbols('USD').fetch(); 
    }
    catch(error){console.log(error);}    
};


(async () => {
    let rate = await getExRate();
    data2["data"].map((elem) => {for(let price in elem.Prices){
    elem.Prices[price] *= rate;
} })
fs.writeFileSync("dataOut.json", JSON.stringify(data),  "utf8");
fs.writeFileSync("data2Out.json", JSON.stringify(data2),  "utf8");
})()




