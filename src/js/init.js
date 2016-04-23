let btn = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let container = document.querySelector('.container');

btn.addEventListener('click', function(el) {
  let c = document.createDocumentFragment();

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert('enter a number for both rows and columns');
      return;
    }
  }

  if (container.children.length > 0) {
    let fec = container.firstElementChild;

    while (fec) {
      container.removeChild(fec);
      fec = container.firstElementChild;
    }
  }

  for (let i = 0; i < inputs[0].value; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < inputs[1].value; j++) {
      let box = document.createElement('div');
      box.classList.add('grid-item');
      row.appendChild(box);
    }

    c.appendChild(row);
  }

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }

  document.querySelector('.container').appendChild(c);

});

container.addEventListener('mouseover', function(el) {
  if (el.target.classList.contains('grid-item')) {
    el.target.classList.add('color');
  }
});
