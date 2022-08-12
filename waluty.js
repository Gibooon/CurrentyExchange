var myHeaders = new Headers();
myHeaders.append("apikey", "KFAcZ5mAU6am6RsF1ru23D3qn6t5aYC9");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=symbols&base=PLN", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));