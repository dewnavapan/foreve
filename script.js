
    document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const messageBox = document.querySelector('.message-box');

    btnYes.addEventListener('click', () => {
        messageBox.classList.add('heartBeat');

        const colors = ['#ff1493', '#00bfff', '#ffff00', '#32cd32', '#ffa500'];
        const explosions = [];

        function createExplosion() {
            const explosion = document.createElement('div');
            explosion.classList.add('heartExplosion');

            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            explosion.style.backgroundColor = randomColor;
            let newX = Math.random() * window.innerWidth;
            let newY = Math.random() * window.innerHeight;

            explosion.style.left = `${newX}px`;
            explosion.style.top = `${newY}px`;

            document.body.appendChild(explosion);

            explosions.push(explosion);

            explosion.addEventListener('animationend', () => {
                explosion.remove();
                explosions.shift();
            });
        }

        const interval = setInterval(() => {
            createExplosion();
            if (explosions.length >= 15) {
                clearInterval(interval);
            }
        }, 100);

        const heartInterval = setInterval(() => {
            createFloatingHeart();
        }, 200); 

        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heartFloating');

            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            heart.style.backgroundColor = randomColor;

            let newX = Math.random() * window.innerWidth;
            heart.style.left = `${newX}px`;
            heart.style.bottom = '0';

            document.body.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }

       
        setTimeout(() => {
            messageBox.textContent = "❤️ขอบคุณน้า เราจะดูแลหัวใจของเธอเป็นอย่างดีเลย❤️";
        }, 1000); 

      
        setTimeout(() => {
            const hearts = document.querySelectorAll('.heartFloating');
            hearts.forEach(heart => heart.remove());
            const explosions = document.querySelectorAll('.heartExplosion');
            explosions.forEach(explosion => explosion.remove());
            messageBox.textContent = "❤️  เธอจะมอบหัวใจให้เราดูแลไหม? ❤️";
            messageBox.classList.remove('heartBeat');
        }, 8000); 
    });
});

const container = document.getElementById('avoidBox');
const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('mouseover', () => {
    let newX = Math.random() * (window.innerWidth - container.clientWidth);
    let newY = Math.random() * (window.innerHeight - container.clientHeight);

    container.style.left = `${newX}px`;
    container.style.top = `${newY}px`;
});
