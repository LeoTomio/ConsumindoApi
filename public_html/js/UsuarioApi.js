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

function editarUsuario(codigo, objUsuario) {
    // Update a user
     var xhr = new XMLHttpRequest();
   
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var usuario = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(usuario);
            alert("Usuario atualizado")
        } else {
            console.error(usuario);
        }
         reloadThePage();
    }
    xhr.open("PUT", url+'/codigo='+codigo, true);
    xhr.send(JSON.stringify(objUsuario));
}





function deletarUsuario(codigo) {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        var usuario = JSON.parse(this.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(usuario)
            alert("Usuario deletado");
        } else {
            console.error(usuario);
        }
        reloadThePage()
    });


    xhr.open("DELETE", url + '/codigo=' + codigo, true);
    xhr.send(null);



}


function reloadThePage() {
    window.location.reload();
}
    