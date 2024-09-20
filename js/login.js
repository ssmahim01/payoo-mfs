document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    // Get the phone Number and Pin

    const phoneNumber = document.getElementById('phone-num').value;
    const pinNumber = document.getElementById('pin-number').value;

    // Normal way and should not use that

    if(pinNumber === '1234'){
        window.location.href = 'https://ssmahim01.github.io/payoo-mfs/index1.html';
    }
    
    else{
        alert('Please enter the correct Number or Pin');
    };
});