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
  node.id = 'aLink';
  // node.innerText = locStrgArr[i];
  node.innerHTML = `<img class = 'newLink' src="https://static.thenounproject.com/png/49479-200.png" /> ${locStrgArr[i]} `;
  if (i % 3 === 0) {
    let br = document.createElement('br');
    content.appendChild(br);
  }
  content.appendChild(node);
}

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let word = inpt.value;
  if (word !== '') {
    if (!word.includes('https://')) word = 'https://' + word;
    //   ? (word = 'https://' + word))
    // word.slice(5) !== 'https'
    //   ? (word = 'https://' + word)
    //   : (word = 'https://' + word);
    locStrgArr.push(word);
    myStorage.setItem('selectionsList', locStrgArr);
    let node = document.createElement('a');
    node.href = word;
    node.rel = 'noopener noreferrer';
    node.id = 'aLink';
    node.innerHTML = `<img class = 'newLink' src="https://static.thenounproject.com/png/49479-200.png" /> ${word} `;
    //   node.innerText = inpt.value;
    // if (i % 3 === 0) {
    //   let br = document.createElement('br');
    //   content.appendChild(br);
    // }
    content.appendChild(node);
    // let br = document.createElement('br');
    // content.appendChild(br);
  }
});

rmvBtn.addEventListener('click', (event) => {
  // event.preventDefault();
  locStrgArr.pop();
  myStorage.setItem('selectionsList', locStrgArr);
});

clearBtn.addEventListener('click', (event) => {
  // event.preventDefault();
  locStrgArr = [];
  myStorage.clear();
  // myStorage.removeItem('selectionsList');
});

/* const addBtn = (event) => {
  console.log(event);
  locStrgArr.push(event);
  console.log('hello');
};*/
