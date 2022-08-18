//zmienna zapasowa do -1, -7, -30 date
var changedDay;

//aktualna data potrzebna do aktualnego kursu
var date = new Date();
var day = date.getDate();
var month = +date.getMonth()+1;
if(month < 10){month ="0"+month}
var year = date.getFullYear();
var actualDate = year+"-"+month+"-"+day;

//data sprzed jednego dnia
var date1 = new Date();
var day1 = date1.getDate()-1;
var month1 = +date1.getMonth()+1;
if(month1 < 10){month1 ="0"+month1}
var year1 = date1.getFullYear();
if(day1 < 0){
  month1 -=1
  if(month1 == -1 || month1 == 1 || month1 == 3 || month1 == 5 || month1 == 7 || month1 == 8 || month1 == 10 || month1 == 12){
    changedDay = 31;
    changedDay +=day1;
    day1 = changedDay;
  }
  else if(month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11){
    changedDay = 30;
    changedDay +=day1;
    day1 = changedDay;
  }
  else if(month1 == 2){
    if(year1%4==0 && year1%100==0 && year1%400){
      changedDay = 29;
      changedDay += day1;
      day1 = changedDay;
    }
    else if(year1%4==0 && year1%100==0 && year1%400!=0 || year1%4!=0){
      changedDay = 28;
      changedDay += day1
      day1 = changedDay
    }
  }
}
var date1 = year1+"-"+month1+"-"+day1;

//data sprzed 7 dniu
var date7 = new Date();
var day7 = date7.getDate()-7;
var month7 = +date7.getMonth()+1;
if(month7 < 10){month7 ="0"+month7}
var year7 = date7.getFullYear();
if(day7 < 0){
  month7 -=1
  if(month7 == -1 || month7 == 1 || month7 == 3 || month7 == 5 || month7 == 7 || month7 == 8 || month7 == 10 || month7 == 12){
    changedDay = 31;
    changedDay +=day7;
    day7 = changedDay;
  }
  else if(month7 == 4 || month7 == 6 || month7 == 9 || month7 == 11){
    changedDay = 30;
    changedDay +=day7;
    day7 = changedDay;
  }
  else if(month7 == 2){
    if(year7%4==0 && year7%100==0 && year7%400){
      changedDay = 29;
      changedDay += day7;
      day7 = changedDay;
    }
    else if(year7%4==0 && year7%100==0 && year7%400!=0 || year7%4!=0){
      changedDay = 28;
      changedDay += day7
      day7 = changedDay
    }
  }
}
var date7 = year7+"-"+month7+"-"+day7;

//data sprzed 30 dni
var date3 = new Date();
var day3 = date3.getDate()-30;
var month3 = date3.getMonth()+1;
var year3 = date3.getFullYear();
if(day3 < 0){
  month3 -=1
  if(month3 == -1 || month3 == 1 || month3 == 3 || month3 == 5 || month3 == 7 || month3 == 8 || month3 == 10 || month3 == 12){
    changedDay = 31;
    changedDay +=day3;
    day3 = changedDay;
  }
  else if(month3 == 4 || month3 == 6 || month3 == 9 || month3 == 11){
    changedDay = 30;
    changedDay +=day3;
    day3 = changedDay;
  }
  else if(month3 == 2){
    if(year3%4==0 && year3%100==0 && year3%400){
      changedDay = 29;
      changedDay += day3;
      day3 = changedDay;
    }
    else if(year3%4==0 && year3%100==0 && year3%400!=0 || year3%4!=0){
      changedDay = 28;
      changedDay += day3
      day3 = changedDay
    }
  }
}
if(month3 < 10){month3 ="0"+month3}
var date3 = year3+"-"+month3+"-"+day3;





//APIKEY
var apikey = "R9PflQ51h9OMZlrgXaGARqxw33wRaCd3";
//zmienne przetrzymujace kurs waluty
//aktualny kurs
var kursE;
var kursU;
var kursG;
var kursC;
//kurs sprzed 1 dnia
var kurs1E;
var kurs1U;
var kurs1G;
var kurs1C;
//kurs sprzed tygodnia
var kurs7E;
var kurs7U;
var kurs7G;
var kurs7C;
//kurs sprzed miesiaca
var kurs3E;
var kurs3U;
var kurs3G;
var kurs3C;

//Sprawdzanie aktualnego kursu poszczególnych walut za pomocą obiektu JS XMLHttpRequest

//kurs EUR
//actual
const EURxhttp = new XMLHttpRequest();
EURxhttp.onload = function() {
  var final = this.responseText;
  kursE = final.slice(171,184);
  document.getElementById("e0").innerHTML += kursE+" PLN<br>";
}
EURxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=PLN&from=EUR&amount=1&apikey="+apikey);
EURxhttp.send();
//1 day
const EUR1xhttp = new XMLHttpRequest();
EUR1xhttp.onload = function() {
  var final1 = this.responseText;
  kurs1E = final1.slice(150,159);
  document.getElementById("e1").innerHTML += kurs1E+" PLN<br>";
}
EUR1xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date1+"?symbols=PLN&base=EUR&apikey="+apikey);
EUR1xhttp.send();
//7 days
const EUR7xhttp = new XMLHttpRequest();
EUR7xhttp.onload = function() {
  var final7 = this.responseText;
  kurs7E = final7.slice(150,159);
  document.getElementById("e7").innerHTML += kurs7E+" PLN<br>";
}
EUR7xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date7+"?symbols=PLN&base=EUR&apikey="+apikey);
EUR7xhttp.send();
//30 days
const EUR3xhttp = new XMLHttpRequest();
EUR3xhttp.onload = function() {
  var final3 = this.responseText;
  kurs3E = final3.slice(150,159);
  document.getElementById("e3").innerHTML += kurs3E+" PLN<br>";
}
EUR3xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date3+"?symbols=PLN&base=EUR&apikey="+apikey);
EUR3xhttp.send();
/*

//kurs USD
//actual
const USDxhttp = new XMLHttpRequest();
USDxhttp.onload = function() {
  var final = this.responseText;
  kursU = final.slice(171,184);
  document.getElementById("u0").innerHTML += kursU+" PLN<br>";
}
USDxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=PLN&from=USD&amount=1&apikey="+apikey);
USDxhttp.send();
//1 day
const USD1xhttp = new XMLHttpRequest();
USD1xhttp.onload = function() {
  var final1 = this.responseText;
  kurs1U = final1.slice(150,159);
  document.getElementById("u1").innerHTML += kurs1U+" PLN<br>";
}
USD1xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date1+"?symbols=PLN&base=USD&apikey="+apikey);
USD1xhttp.send();
//7 days
const USD7xhttp = new XMLHttpRequest();
USD7xhttp.onload = function() {
  var final7 = this.responseText;
  kurs7U = final7.slice(150,159);
  document.getElementById("u7").innerHTML += kurs7U+" PLN<br>";
}
USD7xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date7+"?symbols=PLN&base=USD&apikey="+apikey);
USD7xhttp.send();
//30 days
const USD3xhttp = new XMLHttpRequest();
USD3xhttp.onload = function() {
  var final3 = this.responseText;
  kurs3U = final3.slice(150,159);
  document.getElementById("u3").innerHTML += kurs3U+" PLN<br>";
}
USD3xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date3+"?symbols=PLN&base=USD&apikey="+apikey);
USD3xhttp.send();

//kurs GBP
//actual
const GBPxhttp = new XMLHttpRequest();
GBPxhttp.onload = function() {
  var final = this.responseText;
  kursG = final.slice(171,184);
  document.getElementById("g0").innerHTML += kursG+" PLN<br>";
}
GBPxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=PLN&from=GBP&amount=1&apikey="+apikey);
GBPxhttp.send();
//1 day
const GBP1xhttp = new XMLHttpRequest();
GBP1xhttp.onload = function() {
  var final1 = this.responseText;
  kurs1G = final1.slice(150,159);
  document.getElementById("g1").innerHTML += kurs1G+" PLN<br>";
}
GBP1xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date1+"?symbols=PLN&base=GBP&apikey="+apikey);
GBP1xhttp.send();
//7 days
const GBP7xhttp = new XMLHttpRequest();
GBP7xhttp.onload = function() {
  var final7 = this.responseText;
  kurs7G = final7.slice(150,159);
  document.getElementById("g7").innerHTML += kurs7G+" PLN<br>";
}
GBP7xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date7+"?symbols=PLN&base=GBP&apikey="+apikey);
GBP7xhttp.send();
//30 days
const GBP3xhttp = new XMLHttpRequest();
GBP3xhttp.onload = function() {
  var final3 = this.responseText;
  kurs3G = final3.slice(150,159);
  document.getElementById("g3").innerHTML += kurs3G+" PLN<br>";
}
GBP3xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date3+"?symbols=PLN&base=GBP&apikey="+apikey);
GBP3xhttp.send();

//kurs CHF
//actual
const CHFxhttp = new XMLHttpRequest();
CHFxhttp.onload = function() {
  var final = this.responseText;
  kursC = final.slice(171,184);
  document.getElementById("c0").innerHTML += kursC+" PLN<br>";
}
CHFxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=PLN&from=CHF&amount=1&apikey="+apikey);
CHFxhttp.send();
//1 day
const CHF1xhttp = new XMLHttpRequest();
CHF1xhttp.onload = function() {
  var final1 = this.responseText;
  kurs1C = final1.slice(150,159);
  document.getElementById("c1").innerHTML += kurs1C+" PLN<br>";
}
CHF1xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date1+"?symbols=PLN&base=CHF&apikey="+apikey);
CHF1xhttp.send();
//7 days
const CHF7xhttp = new XMLHttpRequest();
CHF7xhttp.onload = function() {
  var final7 = this.responseText;
  kurs7C = final7.slice(150,159);
  document.getElementById("c7").innerHTML += kurs7C+" PLN<br>";
}
CHF7xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date7+"?symbols=PLN&base=CHF&apikey="+apikey);
CHF7xhttp.send();
//30 days
const CHF3xhttp = new XMLHttpRequest();
CHF3xhttp.onload = function() {
  var final3 = this.responseText;
  kurs3C = final3.slice(150,159);
  document.getElementById("c3").innerHTML += kurs3C+" PLN<br>";
}
CHF3xhttp.open("GET", "https://api.apilayer.com/exchangerates_data/"+date3+"?symbols=PLN&base=CHF&apikey="+apikey);
CHF3xhttp.send();


*/
//sprawdzanie tendencji kursow
//EURO
const eel = document.getElementById("es");
var euroTendency = kursE-kurs1E;
if(euroTendency > 0){
  eel.innerHTML = " +";
  eel.style.color = "red";
}else if(euroTendency < 0){
  eel.innerHTML = " -";
  eel.style.color = "green";
}
//DOLAR AMERYKANSKI
const uel = document.getElementById("us");
var dollarTendency = kursU-kurs1U
if(dollarTendency > 0){
  uel.innerHTML = " +";
  uel.style.color = "red";
}else if(dollarTendency < 0){
  uel.innerHTML = " -";
  uel.style.color = "green";
}
//FUNT BRYTYJSKI
const gel = document.getElementById("gs");
var poundTendency = kursG-kurs1G
if(poundTendency > 0){
  gel.innerHTML = " +";
  gel.style.color = "red";
}else if(poundTendency < 0){
  gel.innerHTML = " -";
  gel.style.color = "green";
}

//FRANK SZWAJCARSKI
const cel = document.getElementById("cs");
var francTendency = kursC-kurs1C
if(francTendency > 0){
  cel.innerHTML = "+";
  cel.style.color = "red";
}else if(francTendency < 0){
  cel.innerHTML = " -";
  cel.style.color = "green";
}
