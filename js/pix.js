// Desabilitando a div de inserir chave do pix
const step1 = document.getElementsByClassName("input-chave")[0];
step1.style.display = "none";

// Desabilitando os dados do pagamento
const step2 = document.getElementsByClassName("enviar-pag")[0];
step2.style.display = "none";

// Desabilitando o aviso de pagamento realizado
const confirm_pix = document.getElementsByClassName("confirm")[0];
confirm_pix.style.display = "none";

// Tratando o primeiro botao de realizar pagamento pix
const pag_pix = document.getElementById("pag-pix");

pag_pix.onclick = () => {
    step1.style.display = "flex";
}

// Quando o usuario clicar em prosseguir
const next_step = document.getElementById("next-step");

next_step.onclick = () => {
    step1.style.display = "none";
    step2.style.display = "flex";
    document.querySelector(".info-pix").style.display = "none";
}

// Quando o usuario clicar em pagar
const pagar_pix = document.getElementById("pagar-pix");

pagar_pix.onclick = () => {
    step2.style.display = "none";
    confirm_pix.style.display = "flex";
}