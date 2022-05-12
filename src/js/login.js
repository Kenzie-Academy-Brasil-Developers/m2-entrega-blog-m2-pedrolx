import { Api } from "../modules/api.js";

const form = document.querySelector('form');
form.addEventListener('submit', logarUsuario);

function logarUsuario(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const usuario = {};
    inputs.forEach(item => {
        usuario[item.name] = item.value;
    })

    Api.loginUsuario(usuario);
}

