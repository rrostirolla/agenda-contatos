const form = document.getElementById("form-contatos");
const contact = [];
const contactNumber = [];

let linhas = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (contact.includes(inputNomeContato.value)) {
        alert(`Contato ${inputNomeContato.value} já foi inserido`);
    } else {
        contact.push(inputNomeContato.value);
        contactNumber.push(inputNumeroContato.value);

        let linha = "<tr>";
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += "</tr>";

        linhas += linha;
    }

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
};

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
};