const addBtn = document.querySelector('.addBtn');
const rmvBtn = document.querySelector('.rmvBtn');
const clearBtn = document.querySelector('.clearBtn');

const inpt = document.querySelector('#myText');
const content = document.querySelector('.content');

const myStorage = window.localStorage;
const select = myStorage.getItem('selectionsList');
let locStrgArr = [];
if (select !== null) locStrgArr = select.split(',');

for (let i = 0; i < locStrgArr.length; i++) {
  let node = document.createElement('a');
  node.href = locStrgArr[i];
  node.rel = 'noopener noreferrer';
  //   node.class = 'newLink';
  // node.innerText = locStrgArr[i];
  node.innerHTML = `<img class = 'newLink' src="https://img-authors.flaticon.com/google.jpg" /> ${locStrgArr[i]} `;
  content.appendChild(node);
  let br = document.createElement('br');
  content.appendChild(br);
}

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  locStrgArr.push(inpt.value);
  myStorage.setItem('selectionsList', locStrgArr);
  let node = document.createElement('a');
  node.href = inpt.value;
  node.rel = 'noopener noreferrer';
  //   node.class = 'newLink';
  node.innerHTML = `<img class = 'newLink' src="https://img-authors.flaticon.com/google.jpg" /> ${inpt.value} `;
  //   node.innerText = inpt.value;
  content.appendChild(node);
  let br = document.createElement('br');
  content.appendChild(br);
});
rmvBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  locStrgArr.pop();
  myStorage.setItem('selectionsList', locStrgArr);
});
clearBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  locStrgArr = [];
  myStorage.removeItem('selectionsList');
});

/* const addBtn = (event) => {
  console.log(event);
  locStrgArr.push(event);
  console.log('hello');
};*/
