const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade').value;
    const inputNumeroAtividade = document.getElementById('numero-atividade').value;

    const tabelaContatos = document.querySelector('table');
    const linha = tabelaContatos.insertRow(-1);
    const colunaNome = linha.insertCell(0);
    const colunaNumero = linha.insertCell(1);

    colunaNome.textContent = inputNomeAtividade;
    colunaNumero.textContent = inputNumeroAtividade;

    inputNomeAtividade.value = '';
    inputNumeroAtividade.value = '';
    form.reset();
});