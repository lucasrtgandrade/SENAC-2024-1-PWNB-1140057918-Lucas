function cadastrarVenda() {
  var cpf = document.getElementById('cadastrar__cpf').value;
  var itemsContainer = document.getElementById('itemsContainer');
  var feedback = document.getElementById('feedbackVenda');

  var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (!cpf || !cpfRegex.test(cpf)) {
    feedback.innerHTML = 'CPF inválido ou não preenchido';
    feedback.classList.remove('sucesso');
    feedback.classList.add('erro');
    feedback.style.display = 'block';
    return;
  }

  var produtos = [];
  var valid = true;
  var total = 0;

  itemsContainer
    .querySelectorAll('.container__itemCompra')
    .forEach(function (item) {
      var produto = item.querySelector('.cadastrar__produto').value;
      var quantidade = parseFloat(
        item.querySelector('.cadastrar__quantidade').value
      );
      var preco = parseFloat(item.querySelector('.cadastrar__preco').value);

      if (!produto || !quantidade || !preco) {
        valid = false;
        return;
      }

      var subtotal = quantidade * preco;
      total += subtotal;

      produtos.push({
        produto: produto,
        quantidade: quantidade,
        preco: preco,
        subtotal: subtotal,
      });
    });

  if (!valid) {
    feedback.innerHTML = 'Por favor, preencha todos os campos obrigatórios';
    feedback.classList.remove('sucesso');
    feedback.classList.add('erro');
    feedback.style.display = 'block';
    return;
  }

  var venda = {
    cpf: cpf,
    produtos: produtos,
    total: total,
  };

  var vendas = JSON.parse(localStorage.getItem('vendas')) || [];
  vendas.push(venda);
  localStorage.setItem('vendas', JSON.stringify(vendas));

  // Update the campaign points
  var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  var cliente = clientes.find((cliente) => cliente.cpf === cpf);

  if (cliente) {
    cliente.pontosCampanha += total * 0.25;
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  feedback.innerHTML = 'Venda registrada com sucesso';
  feedback.classList.remove('erro');
  feedback.classList.add('sucesso');
  feedback.style.display = 'block';
}
