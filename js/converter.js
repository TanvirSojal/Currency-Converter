const exchange_api_url = "https://api.exchangerate-api.com/v4/latest/";

function makeUrl(currency){
    return exchange_api_url + currency;
}

async function getExchangeResult(currency1, currency2, value){
    const url = makeUrl(currency1);
    const response = await fetch(url);
    const data = await response.json();

    let rate = data.rates[currency2];

    let resultField = document.getElementById("result");
    resultField.value = value * rate;
}

function convertCurrency(){
    // value of field 1
    let value = document.getElementById("value").value;
    if (value == "") value = 0.0;

    // currency of field 1
    let currency1 = document.getElementById("currency1").value;
    // currency of field 2
    let currency2 = document.getElementById("currency2").value;
    getExchangeResult(currency1, currency2, value);
}