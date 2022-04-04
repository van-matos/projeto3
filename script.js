let contador = 0;

function togglePizzas(pizzaEscolhida) {
    const opcao = document.querySelector(".selecao-pizza");
    if (opcao !== null) {
        opcao.classList.remove("selecao-pizza");
        contador--;
    }
    pizzaEscolhida.classList.add("selecao-pizza");
    escolhaPizza = pizzaEscolhida.querySelector("h4").innerHTML;
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
    escolhaBebida = bebidaEscolhida.querySelector("h4").innerHTML;
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
    escolhaSobremesa = sobremesaEscolhida.querySelector("h4").innerHTML;
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
    let precoPizza = document.querySelector(".selecao-pizza").querySelector(".preco").innerHTML;
    precoPizza = Number(precoPizza.replace("R$", "").replace(",", "."));

    let precoBebida = document.querySelector(".selecao-bebida").querySelector(".preco").innerHTML;
    precoBebida = Number(precoBebida   .replace("R$", "").replace(",", "."));

    let precoSobremesa = document.querySelector(".selecao-sobremesa").querySelector(".preco").innerHTML;
    precoSobremesa = Number(precoSobremesa.replace("R$", "").replace(",", "."));

    let precoTotal = precoPizza + precoBebida + precoSobremesa;
    let precoFixed = precoTotal.toFixed(2);

    let mensagem = "Olá, gostaria de fazer o pedido.\n- Prato: " + escolhaPizza + "\n- Bebida: " + escolhaBebida + "\n- Sobremesa: " + escolhaSobremesa + "\nTotal: R$" + precoFixed;
    alert(mensagem);
}