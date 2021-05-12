const addBtn = document.querySelector('.addBtn');
const clearBtn = document.querySelector('.clearBtn');
const inpt = document.querySelector('#myText');
const mySites = document.querySelector('.mySites');
const myAdded = document.querySelector('.myAdded');

const mySitesObj = [
  // {
  //   url: 'https://www.twitch.tv/directory/following/live/',
  //   imgSrc: 'img/twitch.png',
  // },
  { url: 'https://music.amazon.com', imgSrc: 'img/music.png' },
  { url: 'https://watch.spectrum.net/guide', imgSrc: 'img/tv.jpeg' },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
    imgSrc: 'img/mdn.jpeg',
  },
  {
    url: 'https://github.com/skythrilla?tab=repositories',
    imgSrc: 'img/gh.png',
  },
  { url: 'http://localhost:3000', imgSrc: 'img/logo192.png' },
  {
    url: 'https://news.google.com',
    imgSrc: 'img/news.webp',
  },
  { url: 'https://gmail.com', imgSrc: 'img/gmail.png' },
  { url: 'https://calendar.google.com/', imgSrc: 'img/calendar.png' },
  { url: 'https://drive.google.com/drive/my-drive', imgSrc: 'img/drive.png' },
  { url: 'https://hangouts.google.com', imgSrc: 'img/hangouts.png' },
  { url: 'https://www.youtube.com', imgSrc: 'img/youtube.png' },
  { url: 'https://maps.google.com', imgSrc: 'img/maps.png' },
  // { url: 'https://www.google.com', imgSrc: 'img/google.jpeg' },
];
// mySites
for (const [key, value] of Object.entries(mySitesObj)) {
  let node = document.createElement('a');
  node.href = value.url;
  node.rel = 'noopener noreferrer';
  node.id = 'mySitesLink';
  node.innerHTML = `<img src="${value.imgSrc}" />`;
  mySites.appendChild(node);
}
// localstorage
const myStorage = window.localStorage;
const select = myStorage.getItem('selectionsList');
let locStrgArr = [];
if (select !== null) locStrgArr = select.split(',');

locStrgArr.sort();

// myAdded
for (let i = 0; i < locStrgArr.length; i++) {
  let node = document.createElement('div');
  node.id = 'theDiv';
  let word =
    locStrgArr[i].endsWith('.com') ||
    locStrgArr[i].endsWith('.net') ||
    locStrgArr[i].endsWith('.edu') ||
    locStrgArr[i].endsWith('.org') ||
    locStrgArr[i].endsWith('.gov') ||
    locStrgArr[i].endsWith('.info')
      ? locStrgArr[i]
      : locStrgArr[i] + '.com';
  node.innerHTML = `<a href='${word}' rel = 'noopener noreferrer' id = 'aLink'> <img class='newLink' src='img/link.png' /> ${word}</a><button value=${word} id='itemBtn${i}'>x</button>`;
  myAdded.appendChild(node);
  document.querySelector('#itemBtn' + i).addEventListener('click', (e) => {
    e.preventDefault();
    let found = locStrgArr.findIndex((a) => a === e.target.value);
    locStrgArr.splice(found, 1);
    locStrgArr.length === 0
      ? myStorage.clear()
      : myStorage.setItem('selectionsList', locStrgArr);
    node.remove();
  });
}
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let word = inpt.value;
  if (word !== '') {
    if (!word.includes('https://')) word = 'https://' + word;
    word =
      word.endsWith('.com') ||
      word.endsWith('.net') ||
      word.endsWith('.edu') ||
      word.endsWith('.org') ||
      word.endsWith('.gov') ||
      word.endsWith('.info')
        ? word
        : word + '.com';
    locStrgArr.push(word);
    myStorage.setItem('selectionsList', locStrgArr);
    inpt.value = '';
    let node = document.createElement('div');
    node.id = 'theDiv';
    node.innerHTML = `<a href='${word}' rel = 'noopener noreferrer' id = 'aLink'> <img class='newLink' src='img/link.png' /> ${word}</a><button value=${word} id='itemBtn${locStrgArr.length}'>x</button>`;
    myAdded.appendChild(node);
    document
      .querySelector('#itemBtn' + locStrgArr.length)
      .addEventListener('click', (e) => {
        e.preventDefault();
        let found = locStrgArr.findIndex((a) => a === e.target.value);
        locStrgArr.splice(found, 1);
        locStrgArr.length === 0
          ? myStorage.clear()
          : myStorage.setItem('selectionsList', locStrgArr);
        node.remove();
      });
  }
});
clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelectorAll('#theDiv').forEach((elem) => {
    elem.remove();
  });
  locStrgArr = [];
  myStorage.clear();
  inpt.value = '';
});
