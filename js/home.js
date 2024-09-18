// Add money to the Account.

document.getElementById('btn-add').addEventListener('click', function(event){
    event.preventDefault();

    // Get money to be added to the account

    const addMoneyInput = document.querySelector('#add-money-input').value;
    const pinInput = document.querySelector('#pin-input').value;

    // Verify pin number.

    if(pinInput === '12345'){
        
        // Get the current balance

        const balance = document.querySelector('#account-balance').innerText;

       const addMoney = parseFloat(addMoneyInput);
       const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoney;

        // Update the balance in the DOM.

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong Pin! Please try again and type valid pin');
    }
});