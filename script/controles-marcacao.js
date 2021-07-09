let visibilidade = document.querySelector('#visibilidade-das-marcacoes')
let foto = document.querySelector('.foto-anotada')

let seletor_x = document.querySelector('#x-da-marcacao');
let seletor_y = document.querySelector('#y-da-marcacao');
let seletor_largura = document.querySelector('#largura-da-marcacao');
let seletor_altura = document.querySelector('#altura-da-marcacao');
let seletor_titulo = document.querySelector('#titulo-da-marcacao');
let seletor_conteudo = document.querySelector('#conteudo-da-marcacao');
let seletor_cor = document.querySelector('#cor-da-marcacao');
let formato = document.querySelectorAll('input[name="formato-da-marcacao"]');
let seletor_retangular = formato[0];
let seletor_oval = formato[1];

visibilidade.addEventListener('change', function(e) {
    if(e.target.checked){
        foto.classList.add('marcacoes-ocultas')
    } else {
        foto.classList.remove('marcacoes-ocultas')
    }
})

for (let marcacao of marcacoes) {
    marcacao.addEventListener('click', function(e) {
        let marcacaoSelecionada = e.target;
        for (marcacao of marcacoes) {
            if(marcacao !== marcacaoSelecionada)
                marcacao.classList.remove('selecionada');
            else 
                marcacao.classList.add('selecionada');
        }

        atualizaControles(marcacaoSelecionada)
    })
}

function atualizaControles(marcacao){
    seletor_x.value = parseInt(marcacao.style.left, 10);
    seletor_y.value = parseInt(marcacao.style.top, 10);
    seletor_largura.value = parseInt(marcacao.style.width, 10);
    seletor_altura.value = parseInt(marcacao.style.height, 10);
    seletor_titulo.value = marcacao.getAttribute('data-titulo');
    seletor_conteudo.value = marcacao.getAttribute('data-conteudo');
    seletor_cor.value = marcacao.getAttribute('data-cor');
    seletor_retangular.checked = !marcacao.classList.contains('formato-oval');
    seletor_oval.checked = marcacao.classList.contains('formato-oval');
}

document.addEventListener('change', function(e) {
    const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
    const value = e.target.value;

    if (e.target === seletor_x) marcacaoSelecionada.style.left = `${value}px`;
    else if (e.target === seletor_y) marcacaoSelecionada.style.top = `${value}px`;
    else if (e.target === seletor_altura) marcacaoSelecionada.style.height = `${value}px`;
    else if (e.target === seletor_titulo) marcacaoSelecionada.setAttribute('data-titulo', value);
    else if (e.target === seletor_largura) marcacaoSelecionada.style.width = `${value}px`;
    else if (e.target === seletor_conteudo) marcacaoSelecionada.setAttribute('data-conteudo', value);
    else if (e.target === seletor_cor) marcacaoSelecionada.setAttribute('data-cor', value);
    else if (e.target === seletor_retangular && seletor_retangular.checked) marcacaoSelecionada.classList.remove('formato-oval');
    if (e.target === seletor_oval && seletor_oval.checked) marcacaoSelecionada.classList.add('formato-oval');  
});

atualizaControles(document.querySelector('.marcacao.selecionada'));