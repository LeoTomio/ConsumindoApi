function exibirUsuarios(usuarios) {

    popularTabela(usuarios);


}

function popularTabela(usuarios) {

    for (var i = 0; i < usuarios.length; i++) {
        inserirLinhaTabela(usuarios[i]);
    }

}


function inserirLinhaTabela(usuario) {
    var idEditar = usuario.codigo;


    var tabela = document.getElementById('tabelaDeUsuarios');
    var numLinhas = tabela.rows.lenght;
    var novaLinha = tabela.insertRow(numLinhas);

    var celCodigo = novaLinha.insertCell(0);
    celCodigo.innerHTML = usuario.codigo;

    var celNome = novaLinha.insertCell(1);
    celNome.innerHTML = usuario.nome;

    var celEmail = novaLinha.insertCell(2);
    celEmail.innerHTML = usuario.email;

    var celLogin = novaLinha.insertCell(3);
    celLogin.innerHTML = usuario.login;

    var celOpcao = novaLinha.insertCell(4)
    var buttonEditar = document.createElement("BUTTON");
    buttonEditar.setAttribute('editar-id', idEditar);
    buttonEditar.setAttribute('onclick', 'preencherFormulario(\'' + usuario.nome + '\', \'' + usuario.email + '\',  \'' + usuario.login + '\');');
    buttonEditar.classList.add("editar");
    buttonEditar.innerHTML = "Editar";

    var buttonDeletar = document.createElement("BUTTON");
    buttonDeletar.setAttribute('excluir-id', idEditar);
    buttonDeletar.classList.add("excluir");
    buttonDeletar.innerHTML = "Deletar";

    celOpcao.append(buttonEditar);
    celOpcao.append(buttonDeletar);
}


function preencherFormulario(nomeParam, emailParam, loginParam, codigoParam) {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var login = document.getElementById('login');
    var codigo = document.getElementById('codigo');

    nome.value = nomeParam;
    email.value = emailParam;
    login.value = loginParam;
    codigo.value = codigoParam;    

}


function validarUsuario(acao) {
    var nome = document.getElementById('nome')
    var email = document.getElementById('email')
    var login = document.getElementById('login')
    var senha = document.getElementById('senha')
    var codigo = document.getElementById('codigo');
    var senhaValidar = document.getElementById('senhaValidar')

    if (acao == "add") {
        var dadosValidos = true;
    }
    if (nome.value == "") {
        dadosValidos = false;
        alert("preenha o campo nome");
    } else if (email.value == "") {
        dadosValidos = false;
        alert("preenha o campo email");

    } else if (login.value == "") {
        dadosValidos = false;
        alert("preenha o campo login");

    } else {
        if (senha.value != "") {
            if (senha.value == senhaValidar.value) {
                var senhaTxt = senha.value;
                if (senhaTxt.length < 6) {
                    dadosValidos = false;
                    alert("A senha preisa ter pelo menos 6 digitos");
                }
            } else {
                dadosValidos = false
                alert("As senhas informadas não são iguais");
            }
        } else {
            dadosValidos = false;
            alert("Informe a senha")
        }

    }
    if (dadosValidos) {
        //Envia os dados para a API
        var objUsuario = {
            "codigo": codigo.value,
            "nome": nome.value,
            "email": email.value,
            "login": login.value,
            "senha": senha.value,
        };

        
            adicionarUsuarios(objUsuario);
        
    }


    return false;
}



window.onload = function () {
    getUsuarios();
}
