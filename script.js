const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');



// first we have to check the condidtion if the nevabr is showing in the screen or not 
//for check we have to use if else condition
if(bar){
    bar.addEventListener('click', () => {
nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
nav.classList.remove('active');
    })
}

