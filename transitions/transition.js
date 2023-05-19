const transition = document.querySelector('.BDY');

window.addEventListener('load',() => {
    transition.style.opacity ='0';
    setTimeout(() =>{
        transition.style.display = 'none';
    }, 1200)
});