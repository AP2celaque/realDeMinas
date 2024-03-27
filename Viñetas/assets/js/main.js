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
        console.log('Cambio detectado');

        let card1 = document.getElementById('card1');
        let card2 = document.getElementById('card2');

        if (selectCard.value === 'Casa tipo 2') {

            console.log('Seleccionada Casa tipo 2');

            card1.classList.add('d-none');
            card2.classList.remove('d-none');
        } else if (selectCard.value === 'Casa tipo 1') {

            console.log('Seleccionada Casa tipo 1');

            card2.classList.add('d-none');
            card1.classList.remove('d-none');
        }
    });

    // uso de los tooltips de bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Boton de pago y alerta - Visualización
    let inputs = document.querySelectorAll('.modal-body input');
    let btnStripe = document.getElementById('btnStripe');
    let alertStripe = document.getElementById('alertStripe');

    inputs.forEach(input => {
        input.addEventListener('input', () => {

            let allFilled = Array.from(inputs).every(input => input.value.trim() !== '');

            // Si todos los campos están llenos, muestra el botón de Stripe
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
        });
    });

    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {

          form.addEventListener('submit', event => {

            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
      
            form.classList.add('was-validated');

          }, false);
          
        });
    })()

});