function cadastrarCliente() {
  var nome = document.getElementById('cadastrar__nome').value;
  var email = document.getElementById('cadastrar__email').value;
  var cpf = document.getElementById('cadastrar__cpf').value;
  var endereco = document.getElementById('cadastrar__endereco').value;
  var cep = document.getElementById('cadastrar__cep').value;
  var numero = document.getElementById('cadastrar__numero').value;
  var telefone = document.getElementById('cadastrar__telefone').value;

  var feedback = document.getElementById('feedbackCadastro');

  var nomeRegex = /^[A-Za-z\s´`~^]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var enderecoRegex = /^[A-Za-z0-9\s,\.´`~^]+$/;
  var cepRegex = /^\d{5}-\d{3}$/;
  var numeroRegex = /^\d{1,4}$/;
  var telefoneRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;
  var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (nome && email && cpf && endereco && cep && numero && telefone) {
    if (
      nomeRegex.test(nome) &&
      emailRegex.test(email) &&
      cpfRegex.test(cpf) &&
      enderecoRegex.test(endereco) &&
      cepRegex.test(cep) &&
      numeroRegex.test(numero) &&
      telefoneRegex.test(telefone)
    ) {
      var cliente = {
        nome: nome,
        email: email,
        cpf: cpf,
        endereco: endereco,
        cep: cep,
        numero: numero,
        telefone: telefone,
        pontosCampanha: 0,
      };
      var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
      clientes.push(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
      feedback.innerHTML = 'Cliente salvo com sucesso';
      feedback.classList.remove('erro');
      feedback.classList.add('sucesso');
    } else {
      feedback.innerHTML = 'Informações inválidas';
      feedback.classList.remove('sucesso');
      feedback.classList.add('erro');
    }
    feedback.style.display = 'block';
  }
}
