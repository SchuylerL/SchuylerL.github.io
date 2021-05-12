const addBtn = document.querySelector('.addBtn');
// const rmvBtn = document.querySelector('.rmvBtn');
const rmvFirstBtn = document.querySelector('.rmvFirstBtn');
const clearBtn = document.querySelector('.clearBtn');
const inpt = document.querySelector('#myText');
// const content = document.querySelector('.content');
const mySites = document.querySelector('.mySites');
// const myForm = document.querySelector('.myForm');
const myAdded = document.querySelector('.myAdded');
// const aBtn = document.querySelector('#aBtn');

const mySitesObj = {
  'https://www.twitch.tv/directory/following/live/':
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzr4kAZmJJTheDWJ9IRfK53U4ICE4IfPiobT8rI-ctUwUB9Lw',
  'https://watch.spectrum.net/guide':
    'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/3c/1d/09/3c1d0999-9e73-1e91-3152-065a5758039d/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference':
    'https://avatars.githubusercontent.com/u/7565578?s=280&v=4',
  'https://github.com/skythrilla?tab=repositories':
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  'http://localhost:3000': 'img/logo192.png',
  'https://news.google.com':
    'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=w300-rw',
  'https://gmail.com':
    'https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png',
  'https://calendar.google.com/':
    'https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_27_2x.png',
  'https://maps.google.com':
    'https://www.onlinemarketingwhiz.com.au/wp-content/uploads/2018/07/google-maps-ios-icon-top.png',
  'https://drive.google.com/drive/my-drive':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png',
  'https://music.amazon.com':
    'https://cdn.mos.cms.futurecdn.net/XdopBvzSoL9M9bfUueqJDJ-1200-80.png',
  'https://hangouts.google.com':
    'https://i.pinimg.com/originals/a2/3b/e4/a23be4c9e908347dea1fa8b4a8e7c04a.png',
  'https://www.youtube.com':
    'https://w7.pngwing.com/pngs/523/896/png-transparent-youtube-logo-youtube-red-logo-sunny-leone-angle-rectangle-brand.png',
  'https://www.google.com': 'https://img-authors.flaticon.com/google.jpg',
};

// mySites
for (const [key, value] of Object.entries(mySitesObj)) {
  let node = document.createElement('a');
  node.href = key;
  node.rel = 'noopener noreferrer';
  node.innerHTML = `<img src="${value}" />`;
  mySites.appendChild(node);
}

// localstorage
const myStorage = window.localStorage;
const select = myStorage.getItem('selectionsList');
let locStrgArr = [];
if (select !== null) locStrgArr = select.split(',');

// myAdded
for (let i = 0; i < locStrgArr.length; i++) {
  let node = document.createElement('a');
  node.href = locStrgArr[i];
  node.rel = 'noopener noreferrer';
  node.id = 'aLink';
  // node.key = i;
  // node.innerText = locStrgArr[i];
  node.innerHTML = `<img class = 'newLink' src="https://static.thenounproject.com/png/49479-200.png" /> ${
    i + 1
  }: ${locStrgArr[i]}`;
  myAdded.appendChild(node);
  // let btn = document.createElement('button');
  // btn.id = 'aBtn';
  // btn.innerText = 'x';
  // myAdded.appendChild(btn);
}

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let word = inpt.value;
  if (word !== '') {
    if (!word.includes('https://')) word = 'https://' + word;
    locStrgArr.push(word);
    myStorage.setItem('selectionsList', locStrgArr);
    let node = document.createElement('a');
    node.href = word;
    node.rel = 'noopener noreferrer';
    node.id = 'aLink';
    node.innerHTML = `<img class = 'newLink' src="https://static.thenounproject.com/png/49479-200.png" /> ${locStrgArr.length}: ${word}`;
    //   node.innerText = inpt.value;
    myAdded.appendChild(node);
  }
});
/* rmvBtn.addEventListener('click', (event) => {
  // event.preventDefault();
  locStrgArr.pop();
  // console.log(locStrgArr.length);
  locStrgArr.length === 0
    ? myStorage.clear()
    : myStorage.setItem('selectionsList', locStrgArr);
}); */
rmvFirstBtn.addEventListener('click', () => {
  // event.preventDefault();
  // console.log(typeof inpt.value);
  // if (typeof inpt.value === Number)
  locStrgArr.splice(Number(inpt.value) - 1, 1);
  // locStrgArr.shift();
  // console.log(locStrgArr.length);
  locStrgArr.length === 0
    ? myStorage.clear()
    : myStorage.setItem('selectionsList', locStrgArr);
});
/* aBtn.addEventListener('click', (event) => {
  // event.preventDefault();
  console.log('fire');
  locStrgArr.splice(3, 1);
  myStorage.setItem('selectionsList', locStrgArr);
}); */
clearBtn.addEventListener('click', () => {
  // event.preventDefault();
  locStrgArr = [];
  myStorage.clear();
  // myStorage.removeItem('selectionsList');
});
