const conversionRates = {
    USD: { USD: 1, EUR: 0.85, INR: 74.5 },
    EUR: { USD: 1.18, EUR: 1, INR: 90.5 },
    INR: { USD: 0.013, EUR: 0.011, INR: 1 },
  };
  
  const sourceCurrency = document.getElementById("source-currency");
  const targetCurrency = document.getElementById("target-currency");
  const amountInput = document.getElementById("amount");
  const convertBtn = document.getElementById("convert-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultDiv = document.getElementById("result");
  
  convertBtn.addEventListener("click", () => {
    const source = sourceCurrency.value;
    const target = targetCurrency.value;
    const amount = parseFloat(amountInput.value);
  
    if (isNaN(amount) || amount <= 0) {
      resultDiv.textContent = "Please enter a valid amount.";
      return;
    }
  
    const rate = conversionRates[source][target];
    const convertedAmount = (amount * rate).toFixed(2);
  
    resultDiv.textContent = `${amount} ${source} = ${convertedAmount} ${target}`;
  });
  
  clearBtn.addEventListener("click", () => {
    sourceCurrency.value = "USD";
    targetCurrency.value = "USD";
    amountInput.value = "";
    resultDiv.textContent = "";
  });
  