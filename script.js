// Seleção dos elementos do DOM
let botao = document.getElementById("botao");
let input = document.getElementById("input");
let origem = document.getElementById("from-currency");
let destino = document.getElementById("to-currency");
let resultado = document.getElementById("resultado");

// Garante que o foco fique no campo de entrada ao carregar a página
window.addEventListener("load", () => {
    input.focus();
});

// Adiciona um evento ao botão para executar a função de conversão
botao.addEventListener("click", converter);

function converter() {
    // Valida se o valor inserido é positivo
    let valor = Number(input.value);
    if (!valor || valor <= 0) {
        resultado.textContent = "Por favor, insira um valor válido.";
        resultado.style.color = "red"; // Mensagem de erro em vermelho
        return;
    }

    // Realiza a conversão de acordo com as moedas selecionadas
    if (origem.value === 'real' && destino.value === 'dolar') {
        resultado.textContent = `Resultado: ${(valor / 5.97).toFixed(2)} USD`;
        resultado.style.color = "#2ec011";
    } else if (origem.value === 'dolar' && destino.value === 'real') {
        resultado.textContent = `Resultado: ${(valor * 5.97).toFixed(2)} BRL`;
        resultado.style.color = "#2ec011";
    } else if (origem.value === destino.value) {
        resultado.textContent = `Resultado: ${valor} (Mesma moeda selecionada)`;
        resultado.style.color = "#2ec011";
    }
}