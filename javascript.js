document.addEventListener("DOMContentLoaded", function() {
    navigate('home');
    setupSlides();
});

function navigate(page) {
    showLoading();
    setTimeout(() => {
        hideLoading();
        loadPage(page);
    }, 1000); // Simula um carregamento de 1 segundo
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    if (page === 'home') {
        mainContent.innerHTML = `
            <div class="slide-container">
                <div class="slide"><img src="https://via.placeholder.com/600x300?text=Vinho+1" alt="Vinho 1"></div>
                <div class="slide"><img src="https://via.placeholder.com/600x300?text=Cerveja+2" alt="Cerveja 2"></div>
                <div class="slide"><img src="https://via.placeholder.com/600x300?text=Destilado+3" alt="Destilado 3"></div>
            </div>
        `;
        setupSlides();
    } else if (page === 'vinhos' || page === 'cervejas' || page === 'destilados') {
        mainContent.innerHTML = `
            <h2>${capitalize(page)}</h2>
            <section class="product-section">
                <img src="https://via.placeholder.com/200?text=${capitalize(page)}+1" alt="${capitalize(page)} 1">
                <img src="https://via.placeholder.com/200?text=${capitalize(page)}+2" alt="${capitalize(page)} 2">
                <img src="https://via.placeholder.com/200?text=${capitalize(page)}+3" alt="${capitalize(page)} 3">
                <img src="https://via.placeholder.com/200?text=${capitalize(page)}+4" alt="${capitalize(page)} 4">
            </section>
        `;
    } else if (page === 'sobre') {
        mainContent.innerHTML = '<h2>Sobre</h2><p>Informações sobre a Adega do Varguinhas.</p>';
    } else if (page === 'contato') {
        mainContent.innerHTML = '<h2>Contato</h2><p>Formas de entrar em contato com a Adega do Varguinhas.</p>';
    }
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function setupSlides() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Muda a cada 2 segundos
    }

    showSlides();
}

function toggleMenu() {
    document.querySelector('nav').classList.toggle('menu-open');
}
