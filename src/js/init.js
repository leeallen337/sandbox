let btn = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let container = document.querySelector('.container');

btn.addEventListener('click', function(el) {
  let windowWidth = window.innerWidth;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert('enter a number for both rows and columns');
      return;
    }
  }

  removeChildrenElements(container);

  buildGrid(container, inputs[0].value, inputs[1].value);

  resetInputs(inputs);

});

container.addEventListener('mouseover', function(el) {
  if (el.target.classList.contains('grid-item')) {
    el.target.classList.add('color');
  }
});


// Functions
function removeChildrenElements(container) {
  if (container.children.length > 0) {
    let firstElementChild = container.firstElementChild;

    while (firstElementChild) {
      container.removeChild(firstElementChild);
      firstElementChild = container.firstElementChild;
    }
  }
}

function buildGrid(parentElement, rowNumber, columnNumber) {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < rowNumber; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < columnNumber; j++) {
      let item = document.createElement('div');
      item.classList.add('grid-item');
      row.appendChild(item);
    }

    fragment.appendChild(row);
  }

  parentElement.appendChild(fragment);
}

function resetInputs(inputsObj) {
  for (let i = 0; i < inputsObj.length; i++) {
    inputsObj[i].value = '';
  }
}
