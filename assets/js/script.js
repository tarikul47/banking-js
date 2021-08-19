/**
 * Get input value for deposit and withdraw input value 
 */
function getInputValue(inputId) {
    const inputFieldValue = parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value = "";
    return inputFieldValue;
}
/**
 * Collect previous balance 
 */
function getPrevBalance(inputId) {
    const prevBalance = parseFloat(document.getElementById(inputId).innerText);
    return prevBalance;
}
/*
 * Addition with two number 
 */
function totalAmount(num1, num2) {
    return num1 + num2;
}
/*
 * waring message function
 */
function showMessage(message, inputId) {
    return document.getElementById(inputId).innerText = message;
}

/**
 * deposit box operation
 */
document.getElementById('deposit-submit-btn').addEventListener('click', function () {
    // deposit new value collect
    const newDepositValue = getInputValue('deposit-new-ammount');
    //console.log("New ammount " + newDepositValue);   //  string

    //deposit previous value collect 
    const preDepositValue = getPrevBalance('deposit-pre-ammount');
    // console.log(" Old ammount " + preDepositValue);  //  string 

    // get previous avilable blance 
    const preBlanceAmount = getPrevBalance('blance-pre-ammount');
    // console.log(preBlanceAmount);

    if (isNaN(newDepositValue)) {
        showMessage('Please must be filled the input field', 'deposit-warning-message');
    } else if (newDepositValue < 0) {
        showMessage('Please must be a positive number', 'deposit-warning-message');
    } else {
        //  update deposit field
        document.getElementById('deposit-pre-ammount').innerText = totalAmount(newDepositValue,
            preDepositValue);
        // updaet avilable blance
        document.getElementById('blance-pre-ammount').innerText = totalAmount(newDepositValue,
            preBlanceAmount);
    }
});

/**
 * withdraw box operation
 */
document.getElementById('withdraw-submit-btn').addEventListener('click', function () {
    // get withdraw new value collect
    const newWithdrawValue = getInputValue('withdraw-ammount');
    //console.log(newWithdrawValue);

    // get withdraw previous ammount 
    const preWithdrawBlance = getPrevBalance('withdraw-pre-ammount');

    // get previous avilable blance 
    const preBlanceAmount = getPrevBalance('blance-pre-ammount');

    if (isNaN(newWithdrawValue)) {
        showMessage('Please must be filled the input field', 'withdraw-warning-message');
    } else if (newWithdrawValue < 0) {
        showMessage('Please must be a positive number', 'withdraw-warning-message');
    } else if (newWithdrawValue > preBlanceAmount) {
        showMessage('You can\'t withdraw more than what you have in your account',
            'withdraw-warning-message');
    } else {
        // update withdraw blance
        document.getElementById('withdraw-pre-ammount').innerText = totalAmount(newWithdrawValue,
            preWithdrawBlance);

        // update avilable blance
        document.getElementById('blance-pre-ammount').innerText = totalAmount(preBlanceAmount,
            -newWithdrawValue);
    }
});