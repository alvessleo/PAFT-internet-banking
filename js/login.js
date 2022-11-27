// Mudar o login para pessoa fisica ou juridica
const main_input = document.getElementById("main-input");

// Pessoa fisica
const person_fisica = document.getElementsByClassName("fisica")[0];

person_fisica.onclick = () => {
    person_fisica.classList.add("active");
    person_juridica.classList.remove("active");
    main_input.placeholder = " CPF";
}

// Pessoa juridica
const person_juridica = document.getElementsByClassName("juridica")[0];

person_juridica.onclick = () => {
    person_juridica.classList.add("active");
    person_fisica.classList.remove("active");
    main_input.placeholder = " CNPJ";
}

const init = () => {
    // Validaçao de campos
    const button_submit = document.getElementById("acessar");
    const password_input = document.getElementById("password-input");
    // campo de input cpf/cnpj -> main_input

    const validade_CPF = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const cpf_test = regex.test(input.value);

        if(!cpf_test) {
            button_submit.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            button_submit.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validatePassowrd = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8) {
            button_submit.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            button_submit.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }

    const errorHandler = () => {
        button_submit.textContent = "Error :(";
    }

    const successHandler = () => {
        button_submit.textContent = "Sent! :)";
    }

    main_input.addEventListener('input', validade_CPF);
    password_input.addEventListener('input', validatePassowrd);

    if(button_submit) {
        button_submit.addEventListener('click', (event) => {
            event.preventDefault();

            button_submit.textContent = "Loading...";

            // fetch('https://reqres.in/api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         email: main_input.value,
            //         password: password_input.value,
            //     })
            // }).then((response) => {
            //     if (response.status !== 200) {
            //         return errorHandler();
            //     }
                
            //     successHandler();
                
            // }).catch(() => {
            //     errorHandler();
            // })
        })
    }
}






// 000.000.000-00
const CPF_mask = (value) => {
    const string_value = value.toString();
    return string_value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
};
  
// 00.000.000/0000-000
const CNPJ_mask = (value) => {
    const string_value = value.toString();
    return string_value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{2})/, '$1-$2');
};

// Regex para mascara CPF
const CPF_CNPJ_mask = (value) => {
    const string_value = value.toString();
    if (string_value.length >= 15) {
      return CNPJ_mask(value);
    }
    return CPF_mask(value);
  };

const cpfcnpj = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/

const validadeCPF = () => {
    if(!cpfcnpj.test(main_input)){
        console.log("true")
    } else {
        console.log("false")
    }
}

window.onload = init;