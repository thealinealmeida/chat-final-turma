const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);



inicializar();

function inicializar() {
    document.getElementById("nomeSala").textContent = '#' + nomeSala;

    getData();
}

function getData() {
    const output = document.getElementById("output");
    firebase.database().ref('/' + nomeSala).on("value", snapshot => {
        output.innerHTML = "";
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            if(childKey != "purpose") {
                const childMsg = childSnapshot.val();
                const nome = childMsg.nome;
                const msg = childMsg.mensagem;
                const likes = childMsg.likes;

                const chatCard = document.createElement("div");
                chatCard.className = "chatCard";
                const chatNome = document.createElement("h4");
                chatNome.className = "chatNome";
                chatNome.textContent = nome;
                chatCard.appendChild(chatNome);
                const row = document.createElement("div");
                row.className = "row";
                chatCard.appendChild(row);
                const col = document.createElement("div");
                col.className = "col";
                row.appendChild(col);
                const chatMsg = document.createElement("h5");
                chatMsg.className = "chatMsg";
                chatMsg.textContent = msg;
                col.appendChild(chatMsg);
                const colAuto = document.createElement("div");
                colAuto.className = "col-auto";
                row.appendChild(colAuto);
                const botaoLike = document.createElement("button");
                botaoLike.className = "btn btn-info";
                botaoLike.id = childKey;
                botaoLike.value = likes;
                botaoLike.setAttribute("onclick", "likeMsg(this.id)");
                botaoLike.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> ' + likes;
                colAuto.appendChild(botaoLike);
                output.appendChild(chatCard);
            }
        });
    });
}

function send() {
    
}

function likeMsg(btnId) {
   //likes
}