// Mudar o login para pessoa fisica ou juridica
const main_input = document.getElementById("main-input");

// Pessoa fisica
const person_fisica = document.getElementsByClassName("fisica")[0];




// function mascara(i){
//     var v = i.value;
    
//     if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
//        i.value = v.substring(0, v.length-1);
//        return;
//     }
    
//     i.setAttribute("maxlength", "14");
//     if (v.length == 3 || v.length == 7) i.value += ".";
//     if (v.length == 11) i.value += "-"; 
// }


main_input.addEventListener("blur", function(){
    if(main_input.value) main_input.value = main_input.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});

person_fisica.onclick = () => {
    person_fisica.classList.add("active");
    person_juridica.classList.remove("active");
    main_input.placeholder = " CPF";
    main_input.maxLength = "11";
    main_input.value = "";
}

// Pessoa juridica
const person_juridica = document.getElementsByClassName("juridica")[0];

person_juridica.onclick = () => {
    person_juridica.classList.add("active");
    person_fisica.classList.remove("active");
    main_input.placeholder = " CNPJ";
    main_input.maxLength = "18";
    main_input.value = ""
    // main_input.addEventListener('input', function (e) {
    //     var x = main_input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    //     main_input.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
    // });

}

const init = () => {
    // Validaçao de campos
    const button_submit = document.getElementById("acessar");
    const password_input = document.getElementById("password-input");
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

    const validatePassowrd = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8) {
            button_submit.setAttribute("disabled", "disabled");
            // password_input.classList.add('error');
        } else if (main_input.value.length >= 11 && input.value.length >= 8){
            button_submit.removeAttribute("disabled");
            // password_input.classList.remove('error');
        }
    }

    main_input.addEventListener('input', validade_CPF);
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
            button_submit.textContent = "Loading...";
            demo();
        })
    }
}

window.onload = init;