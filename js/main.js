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
                    sfondo.style.backgroundImage = "url('https://i0.wp.com/www.webheroes.it/wp-content/uploads/2019/08/sviluppo-presenza-digitale.jpg?fit=1920%2C1280&ssl=1')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'analisi':
                    sfondo.style.backgroundImage = "url('https://leasenews.it/storage/app/uploads/public/615/858/76e/61585876e6430474256868.jpeg')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'dati':
                    sfondo.style.backgroundImage = "url('https://leasenews.it/storage/app/uploads/public/615/858/76e/61585876e6430474256868.jpeg')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'vulnerabilita':
                    sfondo.style.backgroundImage = "url('https://dnewpydm90vfx.cloudfront.net/wp-content/uploads/2019/02/Identit%C3%A0-digitale.jpg')";
                    sfondo.style.backgroundSize = 'cover';
                    sfondo.style.backgroundPosition = 'center';
                    sfondo.style.backgroundRepeat = 'no-repeat';
                    sfondo.style.backgroundColor = 'transparent';
                    break;
                case 'miglioramento':
                    sfondo.style.backgroundImage = "url('https://dhamzv23wqk2g.cloudfront.net/wp-content/uploads/2022/10/03171825/competenze-digitali-digital-skill.jpg')";
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
