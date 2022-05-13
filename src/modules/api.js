class Api {

    static token = '';

    static async cadastrarUsuario(usuario) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
        return response;
    }

    static async loginUsuario(usuario) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
        if (response.token) {
        localStorage.setItem("Id User", response.userId)
        localStorage.setItem("Token", response.token)
        window.location = 'http://127.0.0.1:5500/pages/index.html';
        }
        return response;
    }

    static async listarUsuarios(id) {
        const response = await fetch(`https://api-blog-m2.herokuapp.com/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
        return response;
    }

    static async criaPosts(content) {
        const response = await fetch(`https://api-blog-m2.herokuapp.com/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(content),
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
        return response;
    }

    static async listarPosts(pagina) {
        const response = await fetch(`https://api-blog-m2.herokuapp.com/post?page=${pagina}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
        return response;
    }

    static async editarPost(id, newContent) {
        const response = await fetch(`https://api-blog-m2.herokuapp.com/post/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(newContent)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
        return response;
    }

    static async deletarPost(id) {
        const response = await fetch(`https://api-blog-m2.herokuapp.com/post/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
        return response;
    }

}

export { Api }