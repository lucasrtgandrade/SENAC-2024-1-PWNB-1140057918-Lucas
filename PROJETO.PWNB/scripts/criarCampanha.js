function displayClientes() {
  var clientes = JSON.parse(localStorage.getItem('clientes')) || [];

  var clientesContainer = document.getElementById('clientesContainer');
  clientesContainer.innerHTML = '';

  clientes.forEach(function (cliente, index) {
    var clienteDiv = document.createElement('div');
    clienteDiv.classList.add('cliente');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `cliente-${index}`;
    checkbox.value = cliente.email;

    var label = document.createElement('label');
    label.htmlFor = `cliente-${index}`;
    label.innerText = `${cliente.nome} - ${cliente.email}`;

    clienteDiv.appendChild(checkbox);
    clienteDiv.appendChild(label);
    clientesContainer.appendChild(clienteDiv);
  });
}

function sendCampaignEmails() {
  var feedback = document.getElementById('feedbackCampaign');
  var clientesContainer = document.getElementById('clientesContainer');
  var selectedEmails = [];

  clientesContainer
    .querySelectorAll('input[type="checkbox"]')
    .forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedEmails.push(checkbox.value);
      }
    });

  if (selectedEmails.length === 0) {
    feedback.innerHTML = 'Nenhum cliente selecionado';
    feedback.classList.remove('sucesso');
    feedback.classList.add('erro');
    feedback.style.display = 'block';
    return;
  }

  // Here you would implement the email sending logic
  // For this example, we'll just simulate it
  console.log('Enviar emails para:', selectedEmails);

  feedback.innerHTML =
    'Campanha enviada com sucesso para: ' + selectedEmails.join(', ');
  feedback.classList.remove('erro');
  feedback.classList.add('sucesso');
  feedback.style.display = 'block';
}

function displayImage(event) {
  var imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';

  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var img = document.createElement('img');
    img.src = e.target.result;
    img.style.maxWidth = '150px';
    img.style.maxHeight = '250px';
    imageContainer.appendChild(img);
  };

  reader.readAsDataURL(file);
}

function createCampaign(event) {
  event.preventDefault();

  var nomeCampanha = document.getElementById('nomeCampanha').value;
  var descricaoCampanha = document.getElementById('descricaoCampanha').value;
  var dataInicio = document.getElementById('dataInicio').value;
  var dataFim = document.getElementById('dataFim').value;
  var imagemCampanha = document.getElementById('imagemCampanha').files[0];
  var feedback = document.getElementById('feedbackCampaign');

  var reader = new FileReader();
  reader.onload = function (e) {
    var campaign = {
      name: nomeCampanha,
      descricaoCampanha: descricaoCampanha,
      dataInicio: dataInicio,
      dataFim: dataFim,
      image: e.target.result,
    };

    var campaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    campaigns.push(campaign);
    localStorage.setItem('campaigns', JSON.stringify(campaigns));

    feedback.innerHTML = 'Campanha criada com sucesso';
    feedback.classList.remove('erro');
    feedback.classList.add('sucesso');
    feedback.style.display = 'block';

    document.getElementById('campaignForm').reset();
    document.getElementById('imageContainer').innerHTML = '';
  };

  reader.readAsDataURL(imagemCampanha);
}

// Call the function to display clients when the page loads
window.onload = function () {
  displayClientes();
};
