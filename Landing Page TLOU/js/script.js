const botoesCarrosel = document.querySelectorAll('.botoes');
const imagens = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao,indice) =>{
    botao.addEventListener('click',()=>{
         removerBotaoSelecionado();
         
         adicionarClasseBotao(botao);

         removerImagemSelecionada();

         alterarImagem(indice);
    })
});

function adicionarClasseBotao(botao) {
    botao.classList.add('selecionado');
}

function removerBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function alterarImagem(indice) {
    imagens[indice].classList.add('ativa');
}

function removerImagemSelecionada() {
    const imagemSelecionada = document.querySelector('.ativa');
    imagemSelecionada.classList.remove('ativa');
}
