document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOutInput);

    const pinInput = document.getElementById('cash-out-pin-input').value;
    console.log(cashOutInput, pinInput);

    // Wrong way to verify Pin

    if(pinInput === '12345'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // Subtract the balance

        const newBalance = balanceNumber - cashOutNumber;

        // Update in the DOM

        document.getElementById('account-balance').innerText = newBalance;
    }
        else{
            alert('Failed to cash out! Please give the correct pin then try again.');
        }
});