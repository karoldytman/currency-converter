
let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let exchangeElement = document.querySelector(".js-exchange")
let EURElement = document.querySelector(".js-EUR")
let GBPElement = document.querySelector(".js-GBP")
let USDElement = document.querySelector(".js-USD")
let resultElement = document.querySelector(".js-result")
let carrencyElement = document.querySelector(".js-carrency")


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let exchange = exchangeElement.value;

    let result = amount / exchange;
    resultElement.innerText = result.toFixed(2);

    if (exchangeElement.value === EURElement.value) {
        carrencyElement.innerText = "EUR";
    } if (exchangeElement.value === GBPElement.value) {
        carrencyElement.innerText = "GBP";
    } if (exchangeElement.value === USDElement.value) {
        carrencyElement.innerText = "USD";
    }

});



