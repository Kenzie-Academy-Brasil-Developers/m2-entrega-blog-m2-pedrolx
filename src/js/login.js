import { Api } from "../modules/api.js";

const form = document.querySelector('form');
form.addEventListener('submit', logarUsuario);

async function logarUsuario(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const usuario = {};
    inputs.forEach(item => {
        usuario[item.name] = item.value;
    })
    
    await Api.loginUsuario(usuario);
    window.location.href = 'http://127.0.0.1:5500/pages/blog.html';
}

