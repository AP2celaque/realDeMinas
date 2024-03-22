document.addEventListener('DOMContentLoaded', (event) => {

    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("delayed-animation");
            }
        });
        
    }, { threshold: 0.5 });

    let target = document.querySelector('.carrusel__titulo');
    observer.observe(target);

    let targetCarrusel = document.querySelector('.carrusel--style');
    observer.observe(targetCarrusel);

    var selectCard = document.getElementById('selectCard');

    selectCard.addEventListener('change', () => {
        var card1 = document.getElementById('card1');
        var card2 = document.getElementById('card2');

        if (selectCard.value === 'Casa tipo 2') {
            card2.classList.remove('d-none');
            card1.classList.add('d-none');
        } else if (selectCard.value === 'Casa tipo 1') {
            card1.classList.remove('d-none');
            card2.classList.add('d-none');
        }
    });
    
});