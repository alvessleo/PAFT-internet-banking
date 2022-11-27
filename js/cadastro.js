const init = () => {

    // Todos od inputs que vou utizar para validar
    const nome_input = document.getElementById("nome-input");
    const nascimento_input = document.getElementById("nascimento-input");
    const cpf_input = document.getElementById("cpf-input");
    cpf_input.addEventListener("blur", function(){
        if(cpf_input.value) cpf_input.value = cpf_input.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
    });

    const email_input = document.getElementById("email-input");
    const pass_input = document.getElementById("pass-input");
    const confirm_input = document.getElementById("confirm-input");
    const button_submit = document.getElementById("create-account");

    button_submit.disabled = true;



    const validade_CPF = (event) => {
        const input = event.currentTarget;
        const regex = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
        const cpf_test = regex.test(input.value);

        // if(!cpf_test) {
        //     button_submit.setAttribute("disabled", "disabled");
        // }else if (cpf_input.value.length === 11) {
        //     button_submit.removeAttribute("disabled");
        // }
    }

    const validate_passowrd = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8 && input.value != confirm_input.value) {
            // button_submit.setAttribute("disabled", "disabled");
            pass_input.style.color = "red";
        } else if (input.value.length >= 8 && input.value === confirm_input.value){
            // button_submit.removeAttribute("disabled");
            pass_input.style.color = "green";
        }
    }

    const validate_email = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if(!emailTest) {
            // button_submit.setAttribute("disabled", "disabled");
            input.classList.add('error');
        } else {
            // button_submit.removeAttribute("disabled");
            input.classList.remove('error');
        }
    }

    cpf_input.addEventListener('input', validade_CPF);
    email_input.addEventListener('input', validate_email);
    pass_input.addEventListener('input', validate_passowrd);
    

    const verify_overall = () => {
        if(nome_input.length < 4 && cpf_input.length < 11 && !email_input.includes('@') && pass_input.value != confirm_input.value){
            button_submit.disabled = true;
        }else{
            button_submit.disabled = false;
        }
    }

    verify_overall();
}

window.onload = init;