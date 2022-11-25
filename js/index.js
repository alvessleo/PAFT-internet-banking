// slider

let counter = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 6000)

function nextImage(){
    counter++;
    if(counter > 2){
        counter = 1;
    }

    document.getElementById("radio" + counter).checked = true;
}