import { Api } from "../modules/api.js";

const form = document.querySelector('form');
form.addEventListener('submit', cadastrarUsuario);

async function cadastrarUsuario(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    console.log(inputs)
    const usuario = {};
    inputs.forEach(item => {
        usuario[item.name] = item.value;
    })
    await Api.cadastrarUsuario(usuario);
    window.location.href = 'http://127.0.0.1:5500/pages/login.html';
}
