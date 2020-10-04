var url = "http://localhost:8000";

function getUsuarios() {

    var data = new FormData();

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            //faça algo
            exibirUsuarios(usuarios);
        }
    });

    xhr.open("GET", url);
    xhr.send(data);


}

function adicionarUsuario(objUsuario) {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuario = JSON.parse(this.responseText);
            //faça algo
            alert("Usuario adicionado");
            reloadThePage();
        }
    });
    xhr.open("POST", url);
    xhr.send(JSON.stringify(objUsuario));
}

function editarUsuario(objUsuario) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            getUsuarios();
        }   
    });

    xhr.open("PUT", "http://localhost:8080");

    xhr.send(JSON.stringify(objUsuario));
}





function deleteUsuario(cod) {
    var data = new FormData();

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            getUsuarios();
        }
    });

    xhr.open("DELETE", "http://localhost:8080"+"?cod="+cod);

    xhr.send(data);
}


function reloadThePage() {
    window.location.reload();
}
    