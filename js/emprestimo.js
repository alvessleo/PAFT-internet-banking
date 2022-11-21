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