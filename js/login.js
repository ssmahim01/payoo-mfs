// Search: form submit then loading.

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login is complete');

    const phoneNumber = document.getElementById('phone-num').value;
    console.log(phoneNumber);
});