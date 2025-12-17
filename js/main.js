'use strict';

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const content = card.querySelector('.content');

    card.addEventListener('click', () => {

        const isOpen = card.classList.contains('open');

        cards.forEach(c => {
            c.classList.remove('open');
            c.querySelector('.content').style.maxHeight = '0';
        });
        
        if (!isOpen) {
            card.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
