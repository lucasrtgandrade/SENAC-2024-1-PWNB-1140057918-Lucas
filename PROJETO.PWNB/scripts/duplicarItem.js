function duplicarItem() {
  var itemContainer = document.getElementById('itemsContainer');
  var duplicarItem = document.getElementById('duplicarItem');
  var clone = duplicarItem.cloneNode(true);

  // Clear the values in the cloned inputs
  var inputs = clone.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }

  // Append the cloned item to the container
  itemContainer.appendChild(clone);
}
