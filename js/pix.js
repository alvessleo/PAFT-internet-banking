// Desabilitando a div de inserir chave do pix
const step1 = document.getElementsByClassName("input-chave")[0];
step1.style.display = "none";

// Desabilitando os dados do pagamento
const step2 = document.getElementsByClassName("enviar-pag")[0];
step2.style.display = "none";

// Desabilitando o aviso de pagamento realizado
const confirm_pix = document.getElementsByClassName("confirm")[0];
confirm_pix.style.display = "none";