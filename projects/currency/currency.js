document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    fetch("https://api.exchangeratesapi.io/latest/?base=USD")
      .then((Response) => Response.json())
      .then((data) => {
        const amount = Number(document
          .querySelector("#amount").value);
        const currency = document
          .querySelector("#currency")
          .value.toUpperCase();
        let rate = data.rates[currency];
        if ((rate !== undefined) && (amount > 0))  {
          const rat = Number(rate)
          let amt = amount * rat
          document.querySelector(
            "#result"
          ).innerHTML = `${amount} USD is equal to ${amt.toFixed(2)} ${currency}.`;
        } else {
          document.querySelector("#result").innerHTML = `Invalid Submission.`;
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    return false;
  };
});