import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado")
const botaoJogarNovamente = document.querySelector(".novamente-btn")
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual= 0;
    historiaFinal = "";
    telaInicial.computedStyleMap.display = `none`;
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
perguntaAtual = perguntas [atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntasAtual.alternativa)
        const botaoAlternativas = document.createElement("button"){
    botaoAlternativas.textContent = botaoAlternativas.texto;
    botaoAlternativas.addEventListener
}

function mostraResultado() {
    caixaPerguntas.textContent = `Após tudo isso, ${nome} descobriu que`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {}