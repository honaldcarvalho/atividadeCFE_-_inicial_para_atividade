//efeito do botão voltar ao Topo
$('#voltar-topo').click(function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

//Validação de Login
$('#btn-login').click(function (e) {
    e.preventDefault();
    var usuario = $('#usuario').val().toLowerCase();
    var senha = $('#senha').val().toLowerCase();

    if (usuario.length == 0 || senha.length == 0) {
        alert("O usuario e a senha não podem ficar em branco!");
    } else if (usuario == "admin" && senha == "123456") {
        window.location = "index.html";
    } else {
        alert("Acesso Negado. Dados incorretos");
    }
});

//Validação de cadastro
$('#btn-cadastrar').click(function (e) {
    e.preventDefault();
    var usuario = $('#cadastro-usuario').val().toLowerCase();
    var senha = $('#cadastro-senha').val().toLowerCase();
    var email = $('#email').val().toLowerCase();

    if (usuario.length == 0 || senha.length == 0 || email.length == 0) {
        alert("Preencha todos os campos!");
    }else{
        alert("Usuario casdatrado com sucesso!");
        $('#form-cadastro').trigger("reset");
        $("#form-cadastro").slideToggle("slow");
        $("#form-login").slideToggle("slow");
    }
});


//troca os formularios
$('.show-fomulario').click(function (e) {
    $("#form-cadastro").slideToggle("slow");
    $("#form-login").slideToggle("slow");
});
