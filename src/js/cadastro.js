import { Api } from "../modules/api.js";

const form = document.querySelector('form');
form.addEventListener('submit', cadastrarUsuario);

function cadastrarUsuario(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const usuario = {};
    inputs.forEach(item => {
        usuario[item.name] = item.value;
    })
    console.log(usuario);
    Api.cadastrarUsuario(usuario);
}
