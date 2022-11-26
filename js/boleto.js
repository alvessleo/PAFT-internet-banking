// Desabilitando a div de inserir o codigo do boleto
const step1 = document.getElementsByClassName("input-codigo")[0];
step1.style.display = "none";

// Desabilitando os dados do pagamento
const step2 = document.getElementsByClassName("dados-pag")[0];
step2.style.display = "none";

// Desabilitando o aviso de pagamento realizado
const confirm_bol = document.getElementsByClassName("confirm")[0];
confirm_bol.style.display = "none";

// Tratando o primeiro botao de digitar codigo de barras
const cod_boleto = document.getElementById("codigo_barras");

cod_boleto.onclick = () => {
    step2.style.display = "flex";
}

// Tratanto o botao de pagar
const pagar = document.getElementById("pagar");

pagar.onclick = () => {
    step1.style.display = "none"
    step2.style.display = "none"
    document.querySelector(".info-boleto").style.display = "none";
    confirm_bol.style.display = "block"
}

// Quando o usuario decidir realizar outro pagamento
const another_payment = document.getElementById("another-payment");

another_payment.onclick = () => {
    window.location.reload();
}
