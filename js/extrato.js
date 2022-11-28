
const valor = document.getElementsByClassName('valor');

const sinal = document.getElementsByClassName('pos-neg');

let count = 1
for(let x = 0; x < 4; x++){
    let value_money = document.getElementsByClassName("val" + count)[0];
    console.log(value_money)
    console.log(sinal[x])
    if(sinal[x].innerText === '+'){
        console.log('oi');
        value_money.classList.add("positivo");
        count++;
    } else{
        console.log("2");
        value_money.classList.add('negativo');
        count++;
    }
}
