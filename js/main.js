'use strict';

const cards = document.querySelectorAll('.card');
const sfondo = document.getElementById('sfondo');

cards.forEach(card => {
    const content = card.querySelector('.content');

    card.addEventListener('click', () => {

        const isOpen = card.classList.contains('open');

        cards.forEach(c => {
            c.classList.remove('open');
            c.querySelector('.content').style.maxHeight = '0';
            // reset sfondo
            sfondo.style.backgroundImage = 'none';
            sfondo.style.backgroundColor = '#f2f4f7';
            sfondo.style.backgroundSize = '';
            sfondo.style.backgroundPosition = '';
            sfondo.style.backgroundRepeat = '';
        });
        
        if (!isOpen) {
            card.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
            switch(card.id) {
                case 'presenza':
                    sfondo.style.backgroundImage = "url('img/presenza_digitale.webp')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'analisi':
                    sfondo.style.backgroundImage = "url('img/analisi_profili.jpg')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'dati':
                    sfondo.style.backgroundImage = "url('img/dati_condivisi.jpeg')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'vulnerabilita':
                    sfondo.style.backgroundImage = "url('img/vulnerabilita_digitale.jpg')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'miglioramento':
                    sfondo.style.backgroundImage = "url('img/piano_miglioramento.jpg')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                default:
                    sfondo.style.backgroundImage = 'none';
                    sfondo.style.backgroundColor = '#f2f4f7';
            }
        }
    });
});
