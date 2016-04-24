let btn = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let container = document.querySelector('.container');

btn.addEventListener('click', function(el) {

  needAllInputs(inputs);

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
function needAllInputs(inputsObj) {
  for (let i = 0; i < inputsObj.length; i++) {
    if (!inputsObj[i].value) {
      alert('Enter all inputs');
      return;
    }
  }
}

function removeChildrenElements(container) {
  if (container.children.length > 0) {
    let firstElementChild = container.firstElementChild;

    while (firstElementChild) {
      container.removeChild(firstElementChild);
      firstElementChild = container.firstElementChild;
    }
  }
}

function buildGrid(parentElement, rowNumber, columnNumber, winWidth, winHeight) {
  let fragment = document.createDocumentFragment();
  let parentElementWidth = parentElement.clientWidth;
  let itemWidth = Math.floor(parentElementWidth / columnNumber);
  let itemPadding = Math.floor(itemWidth / 2) - 1;

  for (let i = 0; i < rowNumber; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < columnNumber; j++) {
      let item = document.createElement('div');
      item.classList.add('grid-item');
      item.style.width = `${itemWidth}px`;
      item.style.padding = `${itemPadding}px`;
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
