let submitVar = document.getElementById("button-submit")

submitVar.addEventListener("click", function () {
    //Criando definições pré-definidas   
    const user = "admin"
    const password = "1234"
    const code = "tplink2025"

    //Capturando informações dos campos e armazenando em variáveis
    let usuarioVar = document.getElementById("usuario").value
    let senhaVar = document.getElementById("senha").value
    let codigoVar = document.getElementById("codigo").value

    //Verificanse se os campos não estão vazios
    if (usuarioVar.trim() === "") {
        alert("Preencha o campo: Usuário");
        return
    }
    if (senhaVar.trim() === "") {
        alert("Preencha o campo: Senha");
        return
    }
    if (codigoVar.trim() === "") {
        alert("Preencha o campo: Código de Instalação");
        return
    }

    //Verificando se os dados inseridos estão corretos    
    if (usuarioVar == user && senhaVar == password && codigoVar == code) {
        //Caso dados estiverem certos direciona para o painel        
        window.location.href = ("painel.html")
    }
    //Se os dados não estiverem errados mostra aviso
    else {
        alert('Erro!');
    }
});
