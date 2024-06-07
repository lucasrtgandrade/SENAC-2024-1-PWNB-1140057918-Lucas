function displayClientes() {
  var clientes = JSON.parse(localStorage.getItem('clientes')) || [];

  var clientesContainer = document.getElementById('clientesContainer');
  clientesContainer.innerHTML = '';

  clientes.forEach(function (cliente, index) {
    var clienteDiv = document.createElement('div');
    clienteDiv.classList.add('cliente');

    var cpfP = document.createElement('p');
    cpfP.textContent = cliente.cpf;
    cpfP.classList.add('cpf');
    clienteDiv.appendChild(cpfP);

    var nomeP = document.createElement('p');
    nomeP.textContent = cliente.nome;
    nomeP.classList.add('nome');
    clienteDiv.appendChild(nomeP);

    var emailP = document.createElement('p');
    emailP.textContent = cliente.email;
    emailP.classList.add('email');
    clienteDiv.appendChild(emailP);

    var enderecoP = document.createElement('p');
    enderecoP.textContent = cliente.endereco;
    enderecoP.classList.add('endereco');
    clienteDiv.appendChild(enderecoP);

    var cepP = document.createElement('p');
    cepP.textContent = cliente.cep;
    cepP.classList.add('cep');
    clienteDiv.appendChild(cepP);

    var numeroP = document.createElement('p');
    numeroP.textContent = cliente.numero;
    numeroP.classList.add('numero');
    clienteDiv.appendChild(numeroP);

    var telefoneP = document.createElement('p');
    telefoneP.textContent = cliente.telefone;
    telefoneP.classList.add('telefone');
    clienteDiv.appendChild(telefoneP);

    var pontosCampanhaP = document.createElement('p');
    pontosCampanhaP.textContent = cliente.pontosCampanha;
    pontosCampanhaP.classList.add('pontos');
    clienteDiv.appendChild(pontosCampanhaP);

    clientesContainer.appendChild(clienteDiv);
  });
}

// Call the function to display clients when the page loads
window.onload = function () {
  displayClientes();
};
