'use strict';

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const content = card.querySelector('.content');

    card.addEventListener('click', () => {

        const isOpen = card.classList.contains('open');

        cards.forEach(c => {
            c.classList.remove('open');
            c.querySelector('.content').style.maxHeight = '0';
            document.body.style.backgroundColor = '#ffffffff'; // colore di default
        });
        
        if (!isOpen) {
            card.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
            switch(card.id) {
                case 'presenza':
                    document.body.style.backgroundColor = '#ffe4e1'; // colore per Presenza
                    break;
                case 'analisi':
                    document.body.style.backgroundColor = '#e0f7fa'; // colore per Analisi
                    break;
                case 'dati':
                    document.body.style.backgroundColor = '#fff8e1'; // colore per Dati
                    break;
                case 'vulnerabilita':
                    document.body.style.backgroundColor = '#f3e5f5'; // colore per Vulnerabilità
                    break;
                case 'miglioramento':
                    document.body.style.backgroundColor = '#e8f5e9'; // colore per Miglioramento
                    break;
                default:
                    document.body.style.backgroundColor = '#ffffffff'; // colore default
            }
        }
    });
});
