const init = () => {
    // Validaçao de campos
    const button_submit = document.getElementById("acessar");
    const password_input = document.getElementById("password-input");

    // Mudar o login para pessoa fisica ou juridica
    const main_input = document.getElementById("main-input");

    const second_input = document.getElementById("second-input");
    second_input.style.display = "none";

    // Pessoa fisica
    const person_fisica = document.getElementsByClassName("fisica")[0];

    main_input.addEventListener('input', function (e) {
        var m = main_input.value.replace(/[^\d]/g, "");
        main_input.value = m.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    });

    person_fisica.onclick = () => {
        person_fisica.classList.add("active");
        person_juridica.classList.remove("active");
        main_input.value = "";
        main_input.style.display = "flex";
        second_input.style.display = "none";
        password_input.value = "";
    }


    // Pessoa juridica
    const person_juridica = document.getElementsByClassName("juridica")[0];

    person_juridica.onclick = () => {
    person_juridica.classList.add("active");
    person_fisica.classList.remove("active");
    second_input.value = "";
    second_input.style.display = "flex";
    main_input.style.display = "none";
    password_input.value = "";
    second_input.addEventListener('input', function (e) {
        var x = second_input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
        second_input.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
    });

}



    // campo de input cpf/cnpj -> main_input

    button_submit.disabled = true;

    const validade_CPF = (event) => {
        const input = event.currentTarget;
        const regex = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
        const cpf_test = regex.test(input.value);

        if(!cpf_test) {
            button_submit.setAttribute("disabled", "disabled");
        }else if (cpf_test.value.length === 11 && password_input.value.length >= 8 ) {
            button_submit.removeAttribute("disabled");
        }
    }

    const validade_CNPJ = (event) => {
        const input = event.currentTarget;
        const regex = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/;
        const cnpj_test = regex.test(input.value);

        if(!cnpj_test) {
            button_submit.setAttribute("disabled", "disabled");
        }else if (second_input.value.length === 11 && password_input.value.length >= 8 ) {
            button_submit.removeAttribute("disabled");
        }
    }

    const validatePassowrd = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8) {
            button_submit.setAttribute("disabled", "disabled");
        } else if (main_input.value.length >= 11 && input.value.length >= 8){
            button_submit.removeAttribute("disabled");
        } else if (second_input.value.length >= 14 && input.value.length >= 8){
            button_submit.removeAttribute("disabled");
        }
    }

    main_input.addEventListener('input', validade_CPF);
    second_input.addEventListener('input', validade_CNPJ);
    password_input.addEventListener('input', validatePassowrd);



    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function demo() {
        for (let i = 1; i < 3; i++) {
            console.log(`Waiting ${i} seconds...`);
            await sleep(i * 1000);
        }
        window.location.href='user_page.html';
    }

    if(button_submit) {
        button_submit.addEventListener('click', () => {
            button_submit.textContent = "Checando dados...";
            demo();
        })
    }
}

window.onload = init;