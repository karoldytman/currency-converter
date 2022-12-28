{
    const currrency = (exchangeElement) => {
        const EURElement = document.querySelector(".js-EUR")
        const GBPElement = document.querySelector(".js-GBP")
        const USDElement = document.querySelector(".js-USD")
        const carrencyElement = document.querySelector(".js-carrency")

        if (exchangeElement.value === EURElement.value) {
            carrencyElement.innerText = " EUR";
        } if (exchangeElement.value === GBPElement.value) {
            carrencyElement.innerText = " GBP";
        } if (exchangeElement.value === USDElement.value) {
            carrencyElement.innerText = " USD";
        }
    };

    const updateResult = (result) => {

        const resultElement = document.querySelector(".js-result")
        resultElement.innerText = result.toFixed(2);

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        const exchangeElement = document.querySelector(".js-exchange")

        const amount = amountElement.value;
        const exchange = exchangeElement.value;

        const result = amount / exchange;

        
        updateResult(result);
        currrency(exchangeElement);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("submit", onFormSubmit)
    };

    init();
}