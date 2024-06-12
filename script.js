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
                afirmacao: "Não prejudicaria a reputação de uma dama."
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
                afirmacao: "Minhas irmãs iriam se arrepender de me tratar mal"
            }
        ]
    },
    {
        enunciado: "Se você descobrisse que a Lady Whitledown é uma pessoa próxima de você, iria entregá-la?",
        alternativas: [
            {
                texto: "Sim, independentemente se fosse uma pessoa querida.",
                afirmacao: "a Lady Whistledown prejudicou muitas pessoas, merece ser entregada,"
            },
            {
                texto: "Se fosse alguém querido, eu iria acobertar",
                afirmacao: "mesmo que tenha prejudicado pessoas, não serei eu quem vai entregá-la."
            }
        ]
    },
    {
        enunciado: "Se a rainha desconfiasse que sua melhor amiga é a Lady Whistledown, o que você faria?",
        alternativas: [
            {
                texto: "Eu a defenderia e colocaria a culpa em qualquer outra pessoa.",
                afirmacao: "Minha amiga não pode perder a aprovação da rainha!"
            },
            {
                texto: "Eu deixaria para lá, não é comigo.",
                afirmacao: "Se o problema fosse comigo, aí sim seria diferente"
            }
        ]
    },
    {
        enunciado: "Você acredita que o  amor verdadeiro é maior que os títulos de um cavalheiro?",
        alternativas: [
            {
                texto: "Eu não me casaria com alguém que não é da alta sociedade",
                afirmacao: "Não me casaria com alguém sem títulos, seria um escândalo."
            },
            {
                texto: "Sim, casamento deve ser sobre amor, não títulos",
                afirmacao: "Acredito que o amor supera os títulos, deve ser sempre sobre sentimentos."
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
