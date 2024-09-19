// Show the Cash out form.

document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // Show the Cash out button clicked

    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide the Add money form.

    document.querySelector('#add-money-form').classList.add('hidden');
});

// Show Add money form and Remove Cash out form.

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
});