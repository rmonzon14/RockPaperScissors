const playButton = document.getElementById('play-button');
const username = document.querySelector('#username');
const form = document.getElementById('submission-form');
const error = document.getElementById('error');

username.addEventListener('keyup', () => {
    username.style.backgroundColor = "red";

    if(username.value === '' || username.value == null){
        username.style.backgroundColor = "white";
    }
})

form.addEventListener('submit', (e) =>{
    if(username.value === '' || username.value == null){
        error.style.display = 'block';
        username.setAttribute('style', 'border-color: red; border-width: 3px');
        e.preventDefault();
    }   
})

window.onload = function(){
    username.value = '';
}