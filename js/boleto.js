// Desabilitando a div de inserir o codigo do boleto
const step1 = document.getElementsByClassName("input-codigo")[0];
step1.style.display = "none";

// Desabilitando os dados do pagamento
const step2 = document.getElementsByClassName("dados-pag")[0];
step2.style.display = "none";

// Desabilitando o aviso de pagamento realizado
const confirm_bol = document.getElementsByClassName("confirm")[0];
confirm_bol.style.display = "none";

// Desabilitando o botao de escanear codigo de barras
const escanear_btn = document.getElementById("escanear");
escanear_btn.disabled = true;

// Tratando o primeiro botao de digitar codigo de barras
const cod_boleto = document.getElementById("codigo_barras");

cod_boleto.onclick = () => {
    step1.style.display = "flex";
}

// Liberando o botao de prosseguir apenas se o usuario colocar o numero do boleto inteiro
const input_boleto = document.getElementById("codigo-boleto");

input_boleto.addEventListener('input', function (e) {
    verifica_codigo_boleto();
});

function verifica_codigo_boleto(){
    if(input_boleto.value.length < 35) {
        prosseguir_btn.disabled = true;
    } else if (input_boleto.value.length >= 35){
        prosseguir_btn.disabled = false;
    }
}


// Tratando o botao de prosseguir 
const prosseguir_btn = document.getElementById("prosseguir-btn");

prosseguir_btn.disabled = true;

prosseguir_btn.onclick = () => {
    document.querySelector(".info-boleto").style.display = "none";
    step1.style.display = "none";
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

function onlyNumberKey(evt) {
    // Apenas caracteres ASCII sao liberados
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
