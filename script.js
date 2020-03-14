const NAVIGATION = document.getElementById('navigation');
/*const BUTTON = document.*/



NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('focused'));
    event.target.classList.add('focused');
});