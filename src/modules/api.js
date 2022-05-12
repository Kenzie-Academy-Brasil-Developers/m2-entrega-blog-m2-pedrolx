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
        .catch(err => console.error(err))
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
        .catch(err => console.error(err))
        Api.token = response.token;
        localStorage.setItem("Token", response.token)
        window.location = 'http://127.0.0.1:5500/pages/index.html';
        return response;
    }

    static async listarUsuarios() {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/86e1a659-fc49-4c5e-b2e4-ee286e4c901f', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))
        return response;
    }

    static async criaPosts(content) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/86e1a659-fc49-4c5e-b2e4-ee286e4c901f', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))
        return response;
    }

    static async listarPosts() {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post/9cc3c5e3-83df-4201-b1f3-87efae81fa96', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("Token")}`
            },
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err))
        return response;
    }
}

export { Api }