function entrar() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    console.log(nomeUsuario);
    if(nomeUsuario) {
        localStorage.setItem("nomeUsuario", nomeUsuario);
        window.location = "sala.html";
    }
}

function logout() {
    //hoje vamos começar
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("nomeSala");

    location = "index.html"

    
}