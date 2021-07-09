let balaozinho = document.querySelector('#balaozinho')
let marcacoes = document.querySelectorAll('.marcacao');

for (let marcacao of marcacoes) {
    marcacao.addEventListener('mouseover', mouseoverMarcacao);
    marcacao.addEventListener('mouseout', mouseoutMarcacao);
    marcacao.addEventListener('mousemove', mousemoveMarcacao);
}

function mouseoverMarcacao(e) {
    let marcacao = e.target;
    let titulo = marcacao.getAttribute('data-titulo');
    let conteudo = marcacao.getAttribute('data-conteudo');
    let cor = marcacao.getAttribute('data-cor');
    balaozinho.innerHTML = `<h2>${titulo}</h2><p>${conteudo}</p>`;
    balaozinho.style.top = `${e.pageY}px`;
    balaozinho.style.left = `${e.pageX}px`;
    balaozinho.style.background = cor;
}

function mousemoveMarcacao(e) {
    balaozinho.style.top = `${e.pageY}px`;
    balaozinho.style.left = `${e.pageX}px`;
}

function mouseoutMarcacao(e) {
    balaozinho.innerHTML = ''
}

