const botoesCarrossel = document.querySelectorAll('.botao');
const images = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {
		const imagemAtual = document.querySelector('.ativa');
		const botaoAtual = document.querySelector('.selecionado');

		botaoAtual.classList.remove('selecionado');
		imagemAtual.classList.remove('ativa');
        
		images[indice].classList.add('ativa');
		botoesCarrossel[indice].classList.add('selecionado');
	});
});

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