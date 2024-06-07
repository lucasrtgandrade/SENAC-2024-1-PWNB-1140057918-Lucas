function displayVendas(cpf) {
  var vendas = JSON.parse(localStorage.getItem('vendas')) || [];
  var filteredVendas = vendas.filter(function (venda) {
    return venda.cpf === cpf;
  });

  var vendasContainer = document.getElementById('vendasContainer');
  vendasContainer.innerHTML = '';

  if (filteredVendas.length > 0) {
    filteredVendas.forEach(function (venda) {
      var vendaDiv = document.createElement('div');
      vendaDiv.className = 'venda';

      var cpfDiv = document.createElement('div');
      cpfDiv.className = 'venda__cpf';
      cpfDiv.innerHTML = `<strong>CPF:</strong> ${venda.cpf}`;
      vendaDiv.appendChild(cpfDiv);

      venda.produtos.forEach(function (produto) {
        var produtoDiv = document.createElement('div');
        produtoDiv.className = 'venda__produto';

        var produtoNomeDiv = document.createElement('div');
        produtoNomeDiv.className = 'venda__produto-nome';
        produtoNomeDiv.innerHTML = `<strong>Produto:</strong> ${produto.produto}`;
        produtoDiv.appendChild(produtoNomeDiv);

        var produtoQuantidadeDiv = document.createElement('div');
        produtoQuantidadeDiv.className = 'venda__produto-quantidade';
        produtoQuantidadeDiv.innerHTML = `<strong>Quantidade:</strong> ${produto.quantidade}`;
        produtoDiv.appendChild(produtoQuantidadeDiv);

        var produtoPrecoDiv = document.createElement('div');
        produtoPrecoDiv.className = 'venda__produto-preco';
        produtoPrecoDiv.innerHTML = `<strong>Preço:</strong> ${produto.preco}`;
        produtoDiv.appendChild(produtoPrecoDiv);

        vendaDiv.appendChild(produtoDiv);
      });

      vendasContainer.appendChild(vendaDiv);
    });
  } else {
    vendasContainer.innerHTML = 'Nenhuma venda encontrada para este CPF.';
    vendasContainer.className = 'inexistente';
  }
}
