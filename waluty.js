const GBPxhttp = new XMLHttpRequest();
GBPxhttp.onload = function() {
  document.getElementById("three").innerHTML = this.responseText;
}

var base = "PLN";
var to = "GBP";
var amount = 1;
var apikey = "KFAcZ5mAU6am6RsF1ru23D3qn6t5aYC9";

GBPxhttp.open("GET", "https://api.apilayer.com/exchangerates_data/convert?to="+to+"&from="+base+"&amount="+amount+"&apikey="+apikey);
GBPxhttp.send();


  //.then(result => document.getElementById("three").innerHTML += result)