// deposit button 

document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById("deposit-total");
    const currentDepositTotal = depositTotal.innerText;
    const newDepositTotal = parseFloat(currentDepositTotal) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositTotal;

    // update balance 

    const totalBalance = document.getElementById("balance-total");
    const previousBalance = totalBalance.innerText;

    const updatedBalance = parseFloat(previousBalance) + parseFloat(newDepositTotal);
    totalBalance.innerText = updatedBalance;

    // clearing input field 
    depositInput.value = '';
})

// withdraw button 

document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const totalWithdraw = document.getElementById("withdraw-total");
    const previousWithdrawAmount = totalWithdraw.innerText;
    const totalWithdrawAmount = parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmount);
    totalWithdraw.innerText = totalWithdrawAmount;

    //update balance 

    const totalBalance = document.getElementById("balance-total");
    const totalBalaceText = totalBalance.innerText;

    const totalBalaceAfterWithdraw = parseFloat(totalBalaceText) - parseFloat(totalWithdrawAmount);

    totalBalance.innerText = totalBalaceAfterWithdraw;



    //clearing input field 
    withdrawInput.value = '';
})