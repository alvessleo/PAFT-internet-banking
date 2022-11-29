function validateTest(desc,fn){
    try {
        fn();
        console.log("Test passed: " + desc);
    } catch (error) {
        console.log("Test fail: " + desc);
        console.assert(error);
    }
}

function assert(isTrue){
    if(!isTrue){
        throw new Error();
    }
}

validateTest('Deu errado!',() =>{
    assert(1 != 1);
});

validateTest('Foi um sucesso!',() =>{
    assert(1 == 1);
});


function validate_CPF(cpf, senha){
    return (!isNaN(cpf) && cpf.value.length < 11 !== "CPF inválido") 
}

// function validateDate(date){
//     return (!isNaN(new Date(date)) && new Date(date) !== "Invalid Date");
// }


validateTest('Validando login', () => {
    assert(validate_CPF("09398483920", "12345678"))
})

// validateTest('Validando datas',() => {
//     assert(validateDate("51/01/2022"));
// });



document.addEventListener('submit',function(event){
    event.preventDefault();
    var elements = document.querySelector('#login');
    var cpf = elements['cpf'].value;
    var senha = elements['senha'].value;

    let input_cpf = document.getElementById("main-input");
    input_cpf = cpf;
    let input_senha = document.getElementById("password-input");
    input_senha = senha;

    elements.submit();
});

// document.addEventListener('submit',function(event){
//     event.preventDefault();
//     var elements = document.querySelector('#tweetForm');
//     var tweet = elements['tweet'].value;

//     var tweetList = document.querySelector('#tweets');
//     tweetList.innerHTML += `<li>${tweet}</li>`

//     elements['tweet'].value = '';
// });

validateTest('Log In', function(){
    var elements = document.querySelector('#login');
    elements['cpf'].value = '09398483920';
    elements['senha'].value = '12345678';

    var evt = new Event("submit",{"bubbles":true,"cancelable":true});
    elements.dispatchEvent(evt);

    var login = document.querySelector('#login');
    assert(login.innerHTML.toLowerCase().includes("<input>09398483920</input>"));
    login.innerHTML = '';
});


// validateTest('add new tweet',function(){
//     var elements = document.querySelector('#tweetForm');
//     elements['tweet'].value = 'test tweet';

//     var evt = new Event("submit",{"bubbles":true,"cancelable":true});
//     elements.dispatchEvent(evt);

//     var tweetList = document.querySelector('#tweets');
//     assert(tweetList.innerHTML.toLowerCase().includes("<li>test tweet</li>"));
//     tweetList.innerHTML = '';
// });