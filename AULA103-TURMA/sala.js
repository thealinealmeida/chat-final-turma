

firebase.initializeApp(firebaseConfig);

inicializar();

function inicializar() {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    // console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";

    getData();
}

function addSala() {
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);
    if (nomeSala) {
        firebase.database().ref('/').child(nomeSala).set({
            purpose: "sala criada"
        });

        carregaSala(nomeSala);
    }
}

function getData() {
    firebase.database().ref('/').on("value", snapshot => {
        let salas = [];
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            const html = '<div class="nomeSala" id="'
                + childKey
                + '" onclick="carregaSala(this.id)">#'
                + childKey
                + '</div>'
            salas.push(html);
        });
        document.getElementById("output").innerHTML = salas.join("");
        // const output = document.getElementById("output");
        // output.innerHTML = salas.join("");
    });
}

function carregaSala(sala) {
    localStorage.setItem("nomeSala", sala);
    location = "chat.html";
}
