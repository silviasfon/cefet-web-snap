let filtro = document.querySelector('#filtro-da-foto');

filtro.addEventListener('change', e => {
    foto.style.filter = filtro.value;
});