/*//aktualna data (potrzebna do sprawdzenia kursu sprzed x dni)
var date = new Date();
var day = date.getDate();
var month = +date.getMonth()+1;
if(month < 10){month ="0"+month}
var year = date.getFullYear();
var actualDate = year+"-"+month+"-"+day;
alert("Today is "+actualDate);
*/

//APIKEY
var apikey = "bo0HiDbOS3ydGVDzvzuOWw0oITMF6DVG";
//zmienna przetrzymujaca kurs waluty
var kursE;
var kursU;
var kursG;
var kursC;

//kurs EUR
const EURxhttp = new XMLHttpRequest();
EURxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs euro: "+final.slice(171,184));
  kursE = final.slice(171,184);
  document.getElementById("eur").innerHTML += "Aktualny kurs: "+kursE+" PLN<br>";
}
EURxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=EUR&from=PLN&amount=1&apikey="+apikey);
EURxhttp.send();
/*
//kurs USD
const USDxhttp = new XMLHttpRequest();
USDxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs dolara: "+final.slice(171,184));
  kursU = final.slice(171,184);
  document.getElementById("usd").innerHTML += "Aktualny kurs: "+kursU+" PLN<br>";
  
}
USDxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=USD&from=PLN&amount=1&apikey="+apikey);
USDxhttp.send();

//kurs GBP
const GBPxhttp = new XMLHttpRequest();
GBPxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs funta: "+final.slice(171,184));
  kursG = final.slice(171,184);
  document.getElementById("gbp").innerHTML += "Aktualny kurs: "+kursG+" PLN<br>";
  
}
GBPxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=GBP&from=PLN&amount=1&apikey="+apikey);
GBPxhttp.send();

//kurs CHF
const CHFxhttp = new XMLHttpRequest();
CHFxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs franka: "+final.slice(171,184));
  kursC = final.slice(171,184);
  document.getElementById("chf").innerHTML += "Aktualny kurs: "+kursC+" PLN<br>";
  
}
CHFxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=CHF&from=PLN&amount=1&apikey="+apikey);
CHFxhttp.send();

  //.then(result => document.getElementById("three").innerHTML += result)*/