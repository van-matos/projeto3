let contador = 0;

function togglePizzas(pizzaEscolhida) {
    const opcao = document.querySelector(".selecao-pizza");
    if (opcao !== null) {
        opcao.classList.remove("selecao-pizza");
        contador--;
    }
    pizzaEscolhida.classList.add("selecao-pizza");
    escolhaPizza = pizzaEscolhida.innerHTML;
    contador++;
    ativarBotao();
}

function toggleBebidas(bebidaEscolhida) {
    const opcao = document.querySelector(".selecao-bebida");
    if (opcao !== null) {
        opcao.classList.remove("selecao-bebida");
        contador--;
    }
    bebidaEscolhida.classList.add("selecao-bebida");
    escolhaBebida = bebidaEscolhida.innerHTML;
    contador++;
    ativarBotao();
}

function toggleSobremesas(sobremesaEscolhida) {
    const opcao = document.querySelector(".selecao-sobremesa");
    if (opcao !== null) {
        opcao.classList.remove("selecao-sobremesa");
        contador--;
    }
    sobremesaEscolhida.classList.add("selecao-sobremesa");
    escolhaSobremesa = sobremesaEscolhida.innerHTML;
    contador++;
    ativarBotao();
}

function ativarBotao() {
    if (contador == 3) {
        const botao = document.querySelector(".botao-inativo");
        botao.classList.remove("botao-inativo");
        botao.classList.add("botao-ativo");
        botao.disabled = false;
        
        const aviso = document.querySelector(".confirmacao")
        aviso.innerHTML = "Fechar pedido";
    } 
}

function envioPedido() {
    let mensagem = `Olá, gostaria de fazer o pedido.`;
    alert(mensagem);
}