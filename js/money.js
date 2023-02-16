document.getElementById("btn-calculate").addEventListener("click", function(){
    // income field
    const incomeField = getInputFieldValueById("income-field");
    
    // food field
    const foodField = getInputFieldValueById("food-field");

    // rent field
    const rentField = getInputFieldValueById("rent-field");

    // clothes field
    const clothesField = getInputFieldValueById("clothes-field");

    // previous Expenses
    const totalExpensesElement = getTextElementById("total-expenses");

    // previous Balance
    const balanceElement = getTextElementById("balance-total");

    // Calculation:
    const newEXpensesTotal = foodField + rentField + clothesField;
    

    // new balance total:
    const newBalanceTotal = incomeField - newEXpensesTotal;

    

    // warning:
    const warning = document.getElementById("warning");

    if(newEXpensesTotal > incomeField){
        alert("Your income amount is very poor");
        warning.style.display = 'block';
    }else{
        warning.style.display = 'none';
        // set new expenses value:
        setTextElementById("total-expenses", newEXpensesTotal);
        // set new balance total:
        setTextElementById("balance-total", newBalanceTotal);
    }
})

document.getElementById("btn-save").addEventListener("click", function(){
    // saveMoneyField
    const saveMoneyField = getInputFieldValueById("save-field");
    
    // savingAmountElement
    const savingAmountElement = getTextElementById("saving-amount");

    // remainingBalanceElement
    const remainingBalanceElement = getTextElementById("remaining-balance")

    // balance
    const balanceElement = getTextElementById("balance-total");

    // Calculate Saving Amount:
    const newSavingAmount = (balanceElement / 100) * saveMoneyField;
    // set SAving Amount:
    setTextElementById("saving-amount", newSavingAmount);

    // Calculate Remaining Balance:
    const newRemainingBalance = balanceElement - newSavingAmount;
    // set Remaining Balance:
    setTextElementById("remaining-balance", newRemainingBalance);
})