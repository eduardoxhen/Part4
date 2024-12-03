document.addEventListener("DOMContentLoaded", function () {
    const families = [
        {
            id: 'rec43w3ipXvP28vog',
            title: 'Centro Cultural Donana',
            family: 'Belford Roxo',
            image: '../img/conjunto-img/1_faixada_centroculturaldonana-26346544.jpg',
            url: ''
        },
        {
            id: 'recyqtRglGNGtO4Q5',
            title: 'Floresta Nacional Mario Xavier',
            family: 'Seropédica',
            image: '../img/conjunto-img/Xavier.png',
            url: '../Regiões/seropedica/xavier.html'
        },
        {
            id: 'recNWGyP7kjFhSqw3',
            title: 'Museu Ciência e Vida',
            family: 'Duque de Caxias',
            image: '../img/conjunto-img/ciencia e vida.JPG',
            url: '../Regiões/caxia/ciencia.html'
        },
        {
            id: 'recZEougL5bbY4AEx',
            title: 'Poço Verde',
            family: 'Guapimirim',
            image: '../img/conjunto-img/poco_verde.jpg',
            url: ''
        },
        {
            id: 'recjMK1jgTb2ld7sv',
            title: 'Cachoeira da Saudade',
            family: 'Japeri',
            image: '../img/conjunto-img/Cachoeira da Saudade.jpg',
            url: ''
        },
        {
            id: 'recjMK1jgTb2ld7sv',
            title: 'Castelos do Açu',
            family: 'Magé',
            image: '../img/conjunto-img/castelos de açu.jpg',
            url: '../regiões/nova_iguacu/castelos.html'
        },
        {
            id: 'recjMK1jgTb2ld7sv',
            title: 'Vila Olímpica de Mesquita',
            family: 'Mesquita',
            image: '../img/conjunto-img/Vila olimpica mesquita.jpg',
            url: '../Regiões/mesquita/vilaolimpica.html'
        },
        {
            id: 'recxaXFy5IW539sgM',
            title: 'Parque Natural Municipal de Nova Iguaçu',
            family: 'Nova Iguaçu',
            image: '../img/conjunto-img/Parque natural nova iguacu.jpg',
            url: ''
        },
        {
            id: 'recyqtRglGNGtO4Q5',
            title: 'Parque do Gericinó',
            family: 'Nilópolis',
            image: '../img/conjunto-img/entrada-do-parque-do-gericino.webp',
            url: '../Regiões/nilopolis/gericino.html'
        },
        {
            id: 'recyqtRglGNGtO4Q5',
            title: 'Parque Natural do Curió',
            family: 'Paracambi',
            image: '../img/conjunto-img/Parque natural municipal curio.jpg',
            url: ''
        },
        {
            id: 'recyqtRglGNGtO4Q5',
            title: 'Praça do Eucalipto',
            family: 'Queimados',
            image: '../img/conjunto-img/praca do eucalipto.jpg',
            url: ''
        },
        {
            id: 'recyqtRglGNGtO4Q5',
            title: 'Praça do Araruama',
            family: 'São João de Meriti',
            image: '../img/conjunto-img/pracaararuama.jpg',
            url: ''
        },
        {
            id: 'recyqtRglGNGtO4w5',
            title: 'Casa de Cultura Marise Moreira de Brito',
            family: 'Itaguaí',
            image: '../img/conjunto-img/i.jpg',
            url: ''
        },
    ];

    // Agrupa os locais por município
    const agrupados = families.reduce((acc, item) => {
        if (!acc[item.family]) {
            acc[item.family] = [];
        }
        acc[item.family].push(item.title);
        return acc;
    }, {});

    // Constrói um texto para leitura apenas dos locais turísticos
    let textoParaLer = "";
    for (const [municipio, locais] of Object.entries(agrupados)) {
        textoParaLer += `No município ${municipio}, temos os locais: ${locais.join(", ")}. `;
    }

    // Função de leitura usando Speech Synthesis
    const synth = window.speechSynthesis;
    const lerTextoBtn = document.getElementById("lerTexto");
    let isSpeaking = false;

    function controlarLeitura() {
        if (isSpeaking) {
            synth.cancel(); // Interrompe a leitura
            isSpeaking = false;
            lerTextoBtn.innerText = "Ler Texto";
        } else {
            const utterance = new SpeechSynthesisUtterance(textoParaLer);
            utterance.lang = "pt-BR";
            synth.speak(utterance);
            isSpeaking = true;
            lerTextoBtn.innerText = "Parar Leitura";

            utterance.onend = () => {
                isSpeaking = false;
                lerTextoBtn.innerText = "Ler Texto";
            };

            utterance.onerror = () => {
                console.error("Erro ao tentar ler o texto.");
                isSpeaking = false;
                lerTextoBtn.innerText = "Ler Texto";
            };
        }
    }

    lerTextoBtn.addEventListener("click", controlarLeitura);
});