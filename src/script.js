
 // Script para abrir e fechar o menu mobile
 const menuBtn = document.getElementById('menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');

 menuBtn.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
 });

    // Inicializando o ScrollReveal
    ScrollReveal().reveal('#sobre ', { 
        origin: 'left', // Animação vinda da esquerda
        distance: '50px', 
        duration: 1000, 
        easing: 'ease-in-out',
        reset: true,  // Repetir a animação ao rolar novamente
        interval: 200
    });

    ScrollReveal().reveal('#projetos', { 
        origin: 'bottom', // Animação vinda de baixo
        distance: '50px', 
        duration: 1000, 
        interval: 200, // Intervalo entre cada item
        easing: 'ease-in-out',
        reset: true  // Repetir a animação ao rolar novamente
    });

    ScrollReveal().reveal('#home', { 
        origin: 'bottom', // Animação vinda de baixo
        distance: '50px', 
        duration: 1000, 
        interval: 200, // Intervalo entre cada item
        easing: 'ease-in-out',
        reset: true  // Repetir a animação ao rolar novamente
    });
    ScrollReveal().reveal('#contatos', { 
        origin: 'bottom', // Animação vinda de baixo
        distance: '50px', 
        duration: 1000, 
        interval: 200, // Intervalo entre cada item
        easing: 'ease-in-out',
        reset: true  // Repetir a animação ao rolar novamente
    });

    ScrollReveal().reveal('nav', {
        origin: 'top',
        distance: '20px',
        duration: 800,
        easing: 'ease-in-out'
    });
    

