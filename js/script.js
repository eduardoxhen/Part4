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

if ('speechSynthesis' in window) {
    const botaoLerTexto = document.getElementById('lerTexto');
    let utterance = null; // Variável para armazenar a instância da leitura atual
    let textoLido = ""; // Variável para armazenar o texto a ser lido e evitar repetição

    botaoLerTexto.addEventListener('click', function() {
      // Se já houver uma leitura em andamento, interrompe a leitura
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel(); // Interrompe a leitura atual
        botaoLerTexto.textContent = "Ler Texto"; // Restaura o texto do botão
        console.log("Leitura interrompida!");
      } else {
        // Captura todos os elementos de texto, excluindo o conteúdo dentro do <fieldset>
        if (textoLido === "") {  // Verifica se o texto já foi processado
          textoLido = Array.from(document.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li'))
            .filter(el => !el.closest('fieldset')) // Exclui qualquer texto dentro de <fieldset>
            .map(el => el.innerText)  // Extrai o texto de cada elemento
            .join(' ');  // Junta o texto em uma string única
        }

        // Cria uma nova instância do SpeechSynthesisUtterance apenas uma vez
        utterance = new SpeechSynthesisUtterance(textoLido);

        // Define a voz (opcional) - Você pode ajustar para uma voz específica, como 'Google Português'
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google Português'); // Para vozes em português

        // Define o idioma
        utterance.lang = 'pt-BR';

        // Define o evento onend para restaurar o estado do botão após a leitura
        utterance.onend = function() {
          botaoLerTexto.textContent = "Ler Texto"; // Restaura o texto do botão quando a leitura terminar
          console.log("Leitura concluída!");
        };

        // Altera o texto do botão e inicia a leitura
        botaoLerTexto.textContent = "Parar Leitura"; // Muda o texto do botão enquanto lê
        speechSynthesis.speak(utterance); // Inicia a leitura
        console.log("Leitura iniciada!");
      }
    });
  } else {
    console.log('Web Speech API não é suportada neste navegador.');
  }


