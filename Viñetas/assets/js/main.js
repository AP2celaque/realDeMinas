document.addEventListener('DOMContentLoaded', (event) => {

    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("delayed-animation");
            }
        });
        
    }, { threshold: 1 });

    let target = document.querySelector('.carrusel__titulo');
    observer.observe(target);

    let targetCarrusel = document.querySelector('.carrusel--style');
    observer.observe(targetCarrusel);

    let selectCard = document.getElementById('selectCard');

    selectCard.addEventListener('change', () => {

        let card1 = document.getElementById('card1');
        let card2 = document.getElementById('card2');

        if (selectCard.value === 'Casa tipo 2') {
            card1.classList.add('d-none');
            card2.classList.remove('d-none');
        } else if (selectCard.value === 'Casa tipo 1') {
            card2.classList.add('d-none');
            card1.classList.remove('d-none');
        }
    });

    // uso de los tooltips de bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Boton de pago y alerta - Visualización de la casa tipo 1
    let inputs_tipo1 = document.querySelectorAll('#staticBackdrop .modal-body input');
    let btnStripe_tipo1 = document.getElementById('btnStripe');
    let alertStripe_tipo1 = document.getElementById('alertStripe');

    let inputs_tipo2 = document.querySelectorAll('#modalReserva2 .modal-body input');
    let btnStripe_tipo2 = document.getElementById('btnStripe_tipo2');
    let alertStripe_tipo2 = document.getElementById('alertStripe_tipo2');

    function checkInputs(inputs, btnStripe, alertStripe) {
        let allFilled = Array.from(inputs).every(input => input.value.trim() !== '');

        if (allFilled) {
            btnStripe.classList.remove('d-none');
            alertStripe.classList.remove('d-none');

            setTimeout(() => {
                alertStripe.classList.add('d-none');
            }, 4000);
        } else {
            btnStripe.classList.add('d-none');
            alertStripe.classList.add('d-none');
        }
    }

    inputs_tipo1.forEach(input => {
        input.addEventListener('input', () => checkInputs(inputs_tipo1, btnStripe_tipo1, alertStripe_tipo1));
    });

    inputs_tipo2.forEach(input => {
        input.addEventListener('input', () => checkInputs(inputs_tipo2, btnStripe_tipo2, alertStripe_tipo2));
    });

    (() => {
        'use strict'
       
        const forms = document.querySelectorAll('.needs-validation')
      
        Array.from(forms).forEach(form => {

            form.addEventListener('submit', event => {

                if (!form.checkValidity()) {

                    event.preventDefault();
                    event.stopPropagation();

                } else {
                    event.preventDefault();
    
                    Swal.fire({
                        title: '¡Datos enviados correctamente!',
                        text: 'Su información ha sido enviada. La página se recargará ahora.',
                        icon: 'success',
                        timer: 3000,
                        timerProgressBar: true,
                        didClose: () => {
                            location.reload();
                        }
                    });
                }

                form.classList.add('was-validated');
                
            }, false);
        });

    })()

});