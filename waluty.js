//zmienna zapasowa do -1, -7, -30 date
var changedDay;

//aktualna data potrzebna do aktualnego kursu
var date = new Date();
var day = date.getDate();
var month = +date.getMonth()+1;
if(month < 10){month ="0"+month}
var year = date.getFullYear();
var actualDate = year+"-"+month+"-"+day;
alert("Today is "+actualDate);

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
alert("Yesterday was "+date1);

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
alert("A week ago was "+date7);

//data sprzed 30 dni
var date3 = new Date();
var day3 = date3.getDate()-30;
var month3 = +date3.getMonth()+1;
if(month3 < 10){month3 ="0"+month3}
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
var date3 = year3+"-"+month3+"-"+day3;
alert("30 days ago was "+date3);





//APIKEY
var apikey = "R9PflQ51h9OMZlrgXaGARqxw33wRaCd3";
//zmienna przetrzymujaca kurs waluty
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

//funkcja sprawdzajaca tendencje danego kursu
function tendency(){
document.getElementsByClassName("column").style.backgroundColor = "red";
}
function tendencyOff(){
  document.getElementsByClassName("column").style.backgroundColor = "#94aac0";
  }


//Sprawdzanie aktualnego kursu poszczególnych walut za pomocą obiektu JS XMLHttpRequest
/*
//kurs EUR
const EURxhttp = new XMLHttpRequest();
EURxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs euro: "+final.slice(171,184));
  kursE = final.slice(171,184);
  document.getElementById("e0").innerHTML += kursE+" PLN<br>";
}
EURxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=EUR&from=PLN&amount=1&apikey="+apikey);
EURxhttp.send();
//kurs USD
const USDxhttp = new XMLHttpRequest();
USDxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs dolara: "+final.slice(171,184));
  kursU = final.slice(171,184);
  document.getElementById("u0").innerHTML += kursU+" PLN<br>";

}
USDxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=USD&from=PLN&amount=1&apikey="+apikey);
USDxhttp.send();

//kurs GBP
const GBPxhttp = new XMLHttpRequest();
GBPxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs funta: "+final.slice(171,184));
  kursG = final.slice(171,184);
  document.getElementById("g0").innerHTML += kursG+" PLN<br>";
  
}
GBPxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=GBP&from=PLN&amount=1&apikey="+apikey);
GBPxhttp.send();

//kurs CHF
const CHFxhttp = new XMLHttpRequest();
CHFxhttp.onload = function() {
  var final = this.responseText;
  console.log("kurs franka: "+final.slice(171,184));
  kursC = final.slice(171,184);
  document.getElementById("c0").innerHTML += kursC+" PLN<br>";
  
}
CHFxhttp.open("GET", "http://api.apilayer.com/exchangerates_data/convert?to=CHF&from=PLN&amount=1&apikey="+apikey);
CHFxhttp.send();
*/
  //.then(result => document.getElementById("three").innerHTML += result)
