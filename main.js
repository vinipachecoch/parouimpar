console.log("esta funcionando...");

const painel1 = document.querySelector("#par-ou-impar")
const painel2 = document.querySelector("#escolha-numeros")
const resultado = document.querySelector("#resultado")
const botaojogar = document.querySelector("#botao-jogar");
var numerocomputador;
function escolherParOuImpar(parOuImpar){
    this.parOuImpar = parOuImpar
    console.log(parOuImpar)
    painel1.style.display = "none"
    painel2.style.display = "block"
    return parOuImpar
}

function escolhernumero(numeroUsuario){
    this.numeroUsuario = numeroUsuario
    console.log(numeroUsuario)
    desabilitarBotoes()
return numeroUsuario}

function desabilitarBotoes(){
    for(i = 0; i <= 5;i++){
        document.getElementById("b" + i).setAttribute("disabled", true);
        document.getElementById("b" + i).classList.add("desabilitado");

    }
}

function selecionar(id){
    const botao = document.getElementById(id);
    botao.classList.add("selecionado");

}

function escolhernumerocomputador() {
    numerocomputador = Math.floor(Math.random() * 6);
    console.log(numerocomputador);

}

function gerarTextoEscolherUsuario(){
    if (parOuImpar == 0){
        textoParOuImpar = "par";
    } else if (parOuImpar == 1){
        textoParOuImpar = "impar";
    }
    return textoParOuImpar
    }

    function verificarvencedor(){
        if ((numeroUsuario + numerocomputador) % 2 == parOuImpar){
            vencedor = "usuario";
        } else {
            vencedor = "compurtador";

        }

        return vencedor;
        

    }

function jogarparouimpar() {
    painel2.style.display = "none";
    resultado.style.display = "block";
    botaojogar.style.display = "none";

    resultado.innerHTML = "<h2 class='mensagem centralizado'>resultado </h2>";

   var parOuimparescolhido = gerarTextoEscolherUsuario ();
   escolhernumerocomputador();
   var nomevencedor = verificarvencedor();

   console.log(parOuImpar);
   console.log(numeroUsuario);
   console.log(numerocomputador);
   console.log(nomevencedor);
}