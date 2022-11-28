// Desabilitando a div de inserir chave do pix
const step1 = document.getElementsByClassName("input-chave")[0];
step1.style.display = "none";

// Desabilitando os dados do pagamento
const step2 = document.getElementsByClassName("enviar-pag")[0];
step2.style.display = "none";

// Desabilitando o aviso de pagamento realizado
const confirm_pix = document.getElementsByClassName("confirm")[0];
confirm_pix.style.display = "none";

// Desabilitando o botao de inserir chave por padrao
const chave_btn = document.getElementById("next-step");
chave_btn.disabled = true;

// Input da chave inserida
const inserir_chave = document.getElementById("chave");

inserir_chave.addEventListener("input", function(e){
    valida_input_chave();
})

function valida_input_chave(){
    if(inserir_chave.value.length < 11){
        chave_btn.disabled = true;
    }else{
        chave_btn.disabled = false;
    }
}

// Desabilitando o botao de pagar por padrao
const pagar_btn = document.getElementById("pagar-pix");
pagar_btn.disabled = true;

// Input do valo inserido
const input_valor = document.getElementById("input-valor");

input_valor.addEventListener("input", function(e){
    valida_limite();
})

function valida_limite(){
    if(input_valor.value.length < 1){
        pagar_btn.disabled = true;
    } else{
        pagar_btn.disabled = false;
    }
}

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

function onlyNumberKey(evt) {
    // Apenas caracteres ASCII sao liberados
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
