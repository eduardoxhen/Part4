document.addEventListener("DOMContentLoaded", function () {
    const lerTextoBtn = document.getElementById("lerTexto");
    let synth = window.speechSynthesis; // Inicializa o mecanismo de síntese de voz
    let isSpeaking = false; // Controle do estado de fala

    // Captura o texto do header e do texto principal
    const headerTexto = document.querySelector("header").innerText;
    const textoPrincipal = document.querySelector(".fundo .item.a").innerText;

    // Junta os dois textos
    const textoParaLer = `${headerTexto}. ${textoPrincipal}`;

    // Função para iniciar ou interromper a leitura
    function controlarLeitura() {
        if (isSpeaking) {
            synth.cancel(); // Para a leitura
            isSpeaking = false;
            lerTextoBtn.innerText = "Ler Texto"; // Atualiza o botão
        } else {
            const utterance = new SpeechSynthesisUtterance(textoParaLer);
            utterance.lang = "pt-BR"; // Configura o idioma
            synth.speak(utterance); // Inicia a leitura
            isSpeaking = true;

            utterance.onend = () => {
                isSpeaking = false; // Reseta o estado após a leitura
                lerTextoBtn.innerText = "Ler Texto"; // Atualiza o botão
            };

            utterance.onerror = () => {
                console.error("Erro ao tentar ler o texto.");
                isSpeaking = false;
                lerTextoBtn.innerText = "Ler Texto";
            };

            lerTextoBtn.innerText = "Parar Leitura"; // Atualiza o botão
        }
    }

    // Adiciona evento ao botão
    lerTextoBtn.addEventListener("click", controlarLeitura);
});
