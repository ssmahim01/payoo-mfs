document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    // Get the phone Number and Pin

    const phoneNumber = document.getElementById('phone-num').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // Normal way and should not use that

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Please enter the correct Number or Pin');
    };
});