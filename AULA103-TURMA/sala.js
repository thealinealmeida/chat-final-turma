const firebaseConfig = {




    
}





inicializar();
function inicializar(){

    const nomeUsuario = localStorage.getItem("nomeUsuario");
    console.log(nomeUsuario);
    //colocar nome na tela
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";

}


function addSala(){
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);
    if (nomeSala) {
        firebase.database().ref('/').child(nomeSala).set({
            purpose: "sala criada"
        });

        carregaSala(nomeSala);
    }






}

function getData(){
    firebase.database().ref('/').on("value", snapshot => {
        //criar lista de salas
        let salas = [];
        //pegar as subpastas (child) na pasta principal (parent);
        snapshot.forEach(childSnapshot => {
        //guardar as informações da pasta
        const childKey = childSnapshot.key;

        //criar pasta no html
        const html = '<div class="nomeSala" id="'
                + childKey
                + '" onclick="carregaSala(this.id)">#'
                + childKey
                + '</div>'
                //colocar a sala na lista de salas
            salas.push(html);

        })
        //imprimir no html

        document.getElementById("output").innerHTML = salas.join("");


    })
}
function carregaSala(sala) {
    localStorage.setItem("nomeSala", sala);
    location = "chat.html";
}