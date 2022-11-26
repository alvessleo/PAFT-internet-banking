// Desabilitando a div de inserir o codigo do boleto
const step1 = document.getElementsByClassName("input-codigo")[0];
step1.style.display = "none";

// Desabilitando os dados do pagamento
const step2 = document.getElementsByClassName("dados-pag")[0];
step2.style.display = "none";

// Desabilitando o aviso de pagamento realizado
const confirm_bol = document.getElementsByClassName("confirm")[0];
confirm_bol.style.display = "none";