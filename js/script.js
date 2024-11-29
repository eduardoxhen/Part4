let currentPanel = 1;
const panelWidth = 1500; // Largura de cada painel
const totalPanels = 4; // Número total de painéis

function changePanel(direction) {
    currentPanel += direction;

    if (currentPanel < 1) {
        currentPanel = totalPanels;
    } else if (currentPanel > totalPanels) {
        currentPanel = 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const panelContainer = document.querySelector('.carousel-container');
    const translateValue = -panelWidth * (currentPanel - 1);
    carousel.style.transform = `translateX(${translateValue}px)`;
    panelContainer.style.width = `${panelWidth}px`; // Ajuste a largura do contêiner para mostrar apenas um painel
}

// Chame a função updateCarousel inicialmente para garantir que o carrossel inicie corretamente
updateCarousel();

let currentPanel1 = 1;
const panelWidth1 = 1200; // Largura de cada painel
const totalPanels2 = 4; // Número total de painéis

function changePanel2(direction) {
    currentPanel1 += direction;

    if (currentPanel1 < 1) {
        currentPanel1 = totalPanels2;
    } else if (currentPanel1 > totalPanels2) {
        currentPanel1 = 1;
    }

    updateCarousel1();
}

function updateCarousel1() {
    const carousel = document.getElementById('carousel1');
    const panelContainer1 = document.querySelector('.carousel-container1');
    const translateValue1 = -panelWidth1 * (currentPanel1 - 1);
    carousel.style.transform = `translateX(${translateValue1}px)`;
    panelContainer1.style.width = `${panelWidth1}px`; // Ajuste a largura do contêiner para mostrar apenas um painel
}

// Chame a função updateCarousel inicialmente para garantir que o carrossel inicie corretamente
updateCarousel1();
