// Select das parcelas
const selectParcelas = document.getElementById('parcelas');

for(let i = 12; i < 73; i += 12){
    let options = document.createElement('option');
    options.innerText = i + ' parcelas';
    options.value = i
    selectParcelas.appendChild(options);
}

// Select dos dias
const selectDias = document.getElementById('dias');

for(let d = 1; d < 31; d++){
    let options = document.createElement('option');
    options.innerText = 'dia ' + d;
    options.value = d;
    selectDias.appendChild(options);
}

// Desabilitando a div de inserir o valor
const step1 = document.getElementsByClassName("square1")[0];
step1.style.display = "none";

// Desabilitando a div de inserir o valor
const step2 = document.getElementsByClassName("square2")[0];
step2.style.display = "none";

// Desabilitando a div de inserir o valor
const confirm_val = document.getElementsByClassName("confirm")[0];
confirm_val.style.display = "none";

// Tratando o primeiro botao de novo emprestimo
const new_emprestimo = document.getElementById("next");

new_emprestimo.onclick = () => {
    document.querySelector(".none").style.display = "none";
    step1.style.display = "flex";
}

// Quando o usuario prosseguir o novo emprestimo para selecionar o dia
const prosseguir_btn = document.getElementById("next2");

prosseguir_btn.disabled = true; // Desabilitando o botão por padrão ate que ele digite um valor de 3 digitos

// Quando o usuario clicar em prosseguir vai liberar o proximo passo
prosseguir_btn.onclick = () => {
    prosseguir_btn.style.display = "none";
    step2.style.display = "flex";
}

// Quando o usuario clicar em realizar emprestimo
const finish_btn = document.getElementsByClassName("finish")[0];

// Quando o usuario clicar em realizar empresimo tudo some e uma mensagem de sucesso e exibida
finish_btn.onclick = () => {
    document.querySelector(".info-emprestimo").style.display = "none";
    step1.style.display = "none";
    step2.style.display = "none";
    finish_btn.style.display = "none";
    confirm_val.style.display = "flex";
}

// Atualizacao em tempo real do card
let full_value = document.getElementById("valor-total");

function media(valor, parcela){
    return valor / parcela
}

full_value.addEventListener('input', function(e){
    document.getElementById("per-month").innerText = media(full_value.value,selectParcelas.value).toFixed(2);
    verifica_quantidade();
})

selectParcelas.addEventListener('input', function(e){
    document.getElementById("parcelas-selected").innerText = selectParcelas.value;
    document.getElementById("per-month").innerText = media(full_value.value,selectParcelas.value).toFixed(2);
})

// Funcao que usei para liberar o botao de prosseguir com o emprestimo
function verifica_quantidade(){
    if(full_value.value.length < 3) {
        prosseguir_btn.disabled = true;
    } else if (full_value.value.length > 3){
        prosseguir_btn.disabled = false;
    }
}
