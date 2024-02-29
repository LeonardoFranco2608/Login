document.addEventListener('DOMContentLoaded', function () {
    const userInput = document.getElementById('loginInput');
    const senhaInput = document.getElementById('senhaInput');
    const confirmBotton = document.querySelector('.confirmBotton a');
    const erroMessage = document.getElementById('erro');


    confirmBotton.addEventListener('click', function (event) {
        event.preventDefault();
        
        const username = userInput.value;

        const password = senhaInput.value;

        if (username === 'admin' && password === 'admin') {
           
          window.location.href = './pages/pg.html';
        } else {
            
            erroMessage.style.display = 'block';
        }

    });

});