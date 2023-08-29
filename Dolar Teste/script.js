const myHeaders = new Headers();
myHeaders.append("apikey", "baj2PcKP0uaQoDYU3895bsRgJsKnBFOO");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.apilayer.com/exchangerates_data/latest?base=USD", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates.BRL
      const resultElement = document.getElementById("result")
      resultElement.textContent = `1 USD = ${rate.toFixed(2)} BRL`
    })
    .catch((error) => {
      console.error(error)
      const resultElement = document.getElementById("result")
      resultElement.textContent = "Erro ao obter a cotação do dólar."
    })
})
