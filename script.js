const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Uma das garotas que debutou com você se envolveu num escândalo, e só você sabe, iria espalhar ou não?",
        alternativas: [
            {
                texto: "De jeito nenhum!",
                afirmacao: "Isso poderia acabar com toda sua reputação"
            },
            {
                texto: "Sim! Principalmente se ela fosse o diamante da temporada.",
                afirmacao: "Faria o possível para afastá-la de meus pretendentes"
            }
        ]
    },
    {
        enunciado: "Se você fosse a Lady Whitledown e ficasse sabendo de um escândalo da sua família, iria escrever sobre?",
        alternativas: [
            {
                texto: "Não, não iria valer a pena.",
                afirmacao: "Não espalharia nada sobre minha família."
            },
            {
                texto: "Sim, não gosto deles e eles não gostam de mim",
                afirmacao: "Elas iriam aprender a me tratar melhor."
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Se a rainha desconfiasse que sua melhor amiga é a Lady Whistledown, o que você faria?",
        alternativas: [
            {
                texto: "Eu a defenderia e colocaria a culpa em quelquer outra pessoa.",
                afirmacao: "Ela não é culpada, não pode perder a aprovação da Rainha!"
            },
            {
                texto: "Eu deixaria para lá, não é comigo.",
                afirmacao: "Se acontecesse comiigo, aí sim seria diferente"
            }
        ]
    },
    {
        enunciado: "Você acredita que o  amor verdadeiro é maior que os títulos de um cavalheiro?",
        alternativas: [
            {
                texto: "Eu não me casaria com alguém que não é da alta sociedade",
                afirmacao: "Isso seria um escândalo!"
            },
            {
                texto: "Sim, casamento deve ser sobre amor, não títulos",
                afirmacao: "Acredita que o amor supera tudo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
