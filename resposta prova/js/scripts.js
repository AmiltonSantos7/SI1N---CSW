// Função para retornar à página index.html
document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Função para simular o investimento
document.getElementById('simular').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('valor').value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const plano = parseFloat(document.getElementById('plano').value);

    if (isNaN(valor) || isNaN(prazo) || isNaN(plano)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const retorno = valor * prazo * plano;
    document.getElementById('resultado').innerText = `Retorno do investimento: R$ ${retorno.toFixed(2)}`;
});
