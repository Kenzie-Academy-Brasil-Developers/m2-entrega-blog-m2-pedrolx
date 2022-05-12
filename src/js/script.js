import { Api } from "../modules/api.js";

function receberPosts() {
    Api.listarPosts();
    Api.listarUsuarios();
}

receberPosts();