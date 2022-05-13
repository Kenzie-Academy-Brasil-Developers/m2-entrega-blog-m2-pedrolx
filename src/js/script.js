import { Api } from "../modules/api.js";

const usuario = await Api.listarUsuarios(localStorage.getItem('Id User'));
localStorage.setItem('Username', usuario.username);
const ulPosts = document.getElementById('listagemPosts');
let paginaPost = 1;
const posts = await Api.listarPosts();

const ulInfoUsuario = document.getElementById('infoUsuario');
ulInfoUsuario.childNodes[1].firstChild.src = `${usuario.avatarUrl}`;
ulInfoUsuario.childNodes[3].innerText = `${usuario.username}`;

async function criaListagemPosts(pagina) {
    const posts = await Api.listarPosts(pagina);
    const section = document.getElementById('listagemPosts');

    posts.data.forEach(post => {
        const li = document.createElement('li');
        li.id = `${post.owner.username}`;
        li.classList.add(`${post.id}`)
        const h4 = document.createElement('h4');
        h4.innerText = `${post.owner.username}`;
        const img = document.createElement('img')
        img.src = `${post.owner.avatarUrl}`;
        const p = document.createElement('p');
        p.innerText = `${post.post}`;
        const data = document.createElement('span');
        data.innerText = `${post.createdAt}`;
        const divAvatar = document.createElement('div');
        divAvatar.append(img);
        const divMensagem = document.createElement('div');
        divMensagem.append(h4, p)
        const divPrivada = document.createElement('div');
        divPrivada.id = 'divPrivada';

        if (li.id == localStorage.getItem("Username")) {
            const input = document.createElement('input');
            input.placeholder = 'Edite a mensagem aqui'
            const buttonE = criaButtonEditar();
            const buttonEx = criaButtonExcluir();
            divPrivada.append(input, buttonE, buttonEx, data)
            li.append(divAvatar, divMensagem, divPrivada);
            section.appendChild(li);
        } else {
            divPrivada.append(data)
            li.append(divAvatar, divMensagem);
            section.appendChild(li);
        }
    })
    
}

function criaButtonEditar() {
    const buttonEditar = document.createElement('button');
    buttonEditar.innerText = 'Editar';
    buttonEditar.id = 'Editar';
    buttonEditar.addEventListener('click', editarPost);
    return buttonEditar;
}

function criaButtonExcluir() {
    const buttonExcluir = document.createElement('button');
    buttonExcluir.innerText = 'Apagar';
    buttonExcluir.id = 'Excluir';
    buttonExcluir.addEventListener('click', excluirPost)
    return buttonExcluir;
}

async function editarPost(e) {
    e.preventDefault();
    const user = e.target.parentNode.className;
    await Api.editarPost(user, {newContent: e.target.parentNode.childNodes[3].value});
    ulPosts.innerHTML = '';
    criaListagemPosts(1);
    window.scrollTo(0, 0);
}

async function excluirPost(e) {
    e.preventDefault();
    const user = e.target.parentNode.className;
    await Api.deletarPost(user);
    ulPosts.innerHTML = '';
    criaListagemPosts(1);
    window.scrollTo(0, 0);
}

const formPost = document.getElementById('criaPosts');
formPost.addEventListener('submit', postar)

async function postar(e) {
    e.preventDefault();
    const inputPostar = document.getElementById('contentPost');
    const content = {
        content: inputPostar.value
    };
    await Api.criaPosts(content);
    ulPosts.innerHTML = '';
    criaListagemPosts(1);
}

const footer = document.querySelector('footer');
const ul = document.createElement('ul');
ul.classList.add('listaPaginas');

const li = document.createElement('button');
li.classList.add('paginaAtual');
li.innerText = '>';
li.addEventListener('click', atualizarPagina)
ul.appendChild(li);

footer.appendChild(ul);

criaListagemPosts(paginaPost);

function atualizarPagina(e) {
    e.preventDefault();
    ulPosts.innerHTML = '';
    paginaPost++;
    criaListagemPosts(paginaPost);
    window.scrollTo(0, 0)
}

const botaoSair = document.getElementById('botaoSair');
botaoSair.addEventListener('click', deslogar);

function deslogar(e) {
    e.preventDefault();
    localStorage.clear();
    paginaPost = 1;
    window.location.href = 'http://127.0.0.1:5500/pages/index.html';
}
