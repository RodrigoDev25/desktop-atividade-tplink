let submitVar = document.getElementById("button-submit")
    
submitVar.addEventListener("click", function () {
    const user = "admin"
    const password = "1234"
    const code = "tplink2025"

    let usuarioVar = document.getElementById("usuario").value
    let senhaVar = document.getElementById("senha").value
    let codigoVar = document.getElementById("codigo").value

    if (usuarioVar == user && senhaVar == password && codigoVar == code) {
        window.location.href = ("painel.html")
    }

    else {
        alert("Ops! Você errou e-mail e senha")
    }

})