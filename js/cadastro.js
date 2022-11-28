const init = () => {

    // Todos os inputs que vou utilzar para validar
    const nome_input = document.getElementById("nome-input");
    const nascimento_input = document.getElementById("nascimento-input");
    const cpf_input = document.getElementById("cpf-input");

    cpf_input.addEventListener('input', function (e) {
        var c = cpf_input.value.replace(/[^\d]/g, "");
        cpf_input.value = c.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        validate_CPF();
    });

    const email_input = document.getElementById("email-input");
    const pass_input = document.getElementById("pass-input");
    const confirm_input = document.getElementById("confirm-input");
    const button_submit = document.getElementById("create-account");

    button_submit.disabled = true;

    function validate_CPF(){
        if(cpf_input.value.length < 11) {
            cpf_input.style.color = "red"
            // button_submit.disabled = true;
        }else if (cpf_input.value.length >= 11) {
            cpf_input.style.color = "green"
            // button_submit.disabled = false;
        }
    }

    const validate_passowrd = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8) {
            // button_submit.setAttribute("disabled", "disabled");
            input.style.color = "red";
        } else if (input.value.length >= 8){
            // button_submit.removeAttribute("disabled");
            input.style.color = "green";
        }else if (confirm_input.value.lenght !== input.value.lenght){
            input.style.color = "red";
            confirm_input.style.color = "red";
        } else{
            input.style.color = "green";
            confirm_input.style.color = "green";
        }
    }

    const validate_nome = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 4){
            input.style.color = "red";
        }else{
            input.style.color = "green";
        }
    }

    const validate_email = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if(!emailTest) {
            // button_submit.setAttribute("disabled", "disabled");
            input.classList.add('error');
            input.style.color = "red";
            console.log("email errado")
        } else {
            // button_submit.removeAttribute("disabled");
            input.style.color = "green";
            console.log("email certo")
        }
    }

    const checkbox_btn = document.getElementById("checkbox");
    function checkbox(){
        if(checkbox_btn.checked === false){
            button_submit.disabled = true;
        }else if(checkbox_btn.checked === true){
            button_submit.disabled = false;
        }
    }

    nome_input.addEventListener('input', validate_nome);
    cpf_input.addEventListener('input', validate_CPF);
    email_input.addEventListener('input', validate_email);
    pass_input.addEventListener('input', validate_passowrd);
    confirm_input.addEventListener('input', validate_passowrd);
    checkbox_btn.addEventListener('input', checkbox);
}


window.onload = init;