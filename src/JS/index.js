botoesCarrossel = document.querySelectorAll('.botao');
imagens = document.querySelectorAll('.imagem');
descricao = document.querySelectorAll('.descricao')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        imagens[indice].classList.add('ativa');

        descricaoAtiva = document.querySelector('.ativo');
        descricaoAtiva.classList.remove('ativo');
        descricao[indice].classList.add('ativo');
        console.log(descricao[indice]);

    });
});