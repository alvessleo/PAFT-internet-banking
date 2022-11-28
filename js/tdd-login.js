function validateTest(desc,fn){
    try {
        fn();
        console.log("Test passed:"+desc);
    } catch (error) {
        console.log("Test fail:"+desc);
        console.assert(error);
    }
}
function assert(isTrue){
    if(!isTrue){
        throw new Error();
    }
}
validateTest('vai da m',() =>{
    assert(1 != 1);
});
validateTest('sucesso',() =>{
    assert(1 == 1);
});
function validateDate(date){
    return (!isNaN(new Date(date)) && new Date(date) !== "Invalid Date");
}
validateTest('Validando datas',() => {
    assert(validateDate("51/01/2022"));
});
document.addEventListener('submit',function(event){
    event.preventDefault();
    var elements = document.querySelector('#tweetForm');
    var tweet = elements['tweet'].value;

    var tweetList = document.querySelector('#tweets');
    tweetList.innerHTML += `<li>${tweet}</li>`

    elements['tweet'].value = '';
});
validateTest('add new tweet',function(){
    var elements = document.querySelector('#tweetForm');
    elements['tweet'].value = 'test tweet';

    var evt = new Event("submit",{"bubbles":true,"cancelable":true});
    elements.dispatchEvent(evt);

    var tweetList = document.querySelector('#tweets');
    assert(tweetList.innerHTML.toLowerCase().includes("<li>test tweet</li>"));
    tweetList.innerHTML = '';
});