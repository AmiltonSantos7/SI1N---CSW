function verifLogin() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === "Administrador" && senha === "adm123") {
        window.location.href = "./index/index_cadastro.html";
    } else if (login === "Donatario01" && senha === "dona123") {
        window.location.href = "./index/index_solicitacao.html";
    } else {
        alert("Login ou senha incorretos!");
    }
}
