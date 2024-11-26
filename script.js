function createHearts() {
    const container = document.querySelector('.animation-container');

    
    setInterval(() => {
  
        const heart = document.createElement('img');
        heart.src = 'serce.png'; 
        heart.classList.add('animated-heart');

        
        const randomLeft = Math.random() * 100; 
        heart.style.left = `${randomLeft}%`;

 
        const randomDuration = 6 + Math.random() * 3;
        heart.style.animationDuration = `${randomDuration}s`;


        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, randomDuration * 10000); 
    }, 2000); 
}


window.onload = createHearts;