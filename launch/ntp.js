const addBtn = document.querySelector('.addBtn');
const addBtnCom = document.querySelector('.addBtnCom');
const searchBtn = document.querySelector('.searchBtn');
const mySites = document.querySelector('.mySites');
const myTopSites = document.querySelector('.myTopSites');
const sitesContainer = document.querySelector('.sitesContainer');
const container = document.querySelector('.container');
const inpt = document.querySelector('#myText');

const bgArray = [
  './img/sea.jpeg',
  './img/tropical.jpeg',
  './img/beach-2089936_1920.jpg',
  './img/iceland-2111811_1920.jpg',
  './img/nature-2384_1920.jpg',
  './img/milky-way-1030765_1920.jpg',
  './img/beach-4161593_1920.jpg',
  './img/sea-21649_1920.jpg',
  './img/drop-3698073_1920.jpg',
  './img/earth-1756274_1920.jpg',
  './img/annual-rings-3212803_1920.jpg',
  './img/hd-wallpaper-gec3d0af63_1920.jpg',
  './img/white.png',
  './img/black.png',
  './img/river-g7f4068bd9_1920.jpg',
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let locStrgArr = [];

function save_options() {
  chrome.storage.sync.set(
    { key: locStrgArr, bg: myStorage.getItem('background') },
    function () {}
  );
}
function restore_options() {
  chrome.storage.sync.get(['key'], function (result) {
    if (result.key !== undefined)
      myStorage.setItem('selectionsList', result.key);
  });
  chrome.storage.sync.get(['bg'], function (result) {
    if (result.bg !== undefined) myStorage.setItem('background', result.bg);
  });
}
document.addEventListener('DOMContentLoaded', restore_options);

// localstorage
const myStorage = window.localStorage;
const select = myStorage.getItem('selectionsList');
if (select !== null) locStrgArr = select.split(',');
let userBg = myStorage.getItem('background');
// console.log(myStorage.getItem('transparent'));

// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);

if (userBg === 'null') {
  // if (window.matchMedia('(prefers-color-scheme: dark)').matches === false) {
  //   document
  //     .querySelector('body')
  //     .setAttribute('style', 'background-color:white');
  // } else {
  //   document
  //     .querySelector('body')
  //     .setAttribute('style', 'background-color:black');
  // }
  document
    .querySelector('body')
    .setAttribute('style', 'background-color:black');
} else if (userBg === 'black') {
  // if (window.matchMedia('(prefers-color-scheme: dark)').matches === false) {
  //   document
  //     .querySelector('body')
  //     .setAttribute('style', 'background-color:white');
  // } else {
  //   document
  //     .querySelector('body')
  //     .setAttribute('style', 'background-color:black');
  // }
  document
    .querySelector('body')
    .setAttribute('style', 'background-color:black');
} else if (userBg) {
  document.querySelector('body').setAttribute('background', userBg);
} else {
  document
    .querySelector('body')
    .setAttribute('background', bgArray[getRandomInt(bgArray.length)]);
}

container.setAttribute('style', 'backdrop-filter:none;box-shadow:none');

document.querySelector('.container').style = 'display:none';
const rldBtn = document.createElement('button');
// rldBtn.title = 'Click to show';
rldBtn.classList = 'rldBtn';
// rldBtn.textContent = 'x';
rldBtn.onclick = function rldBtn(e) {
  container.setAttribute('style', 'display:flex');
  container.setAttribute('style', 'backdrop-filter:none;box-shadow:none');
  document.querySelector('.rldBtn').remove();
};
document.querySelector('body').appendChild(rldBtn);

// if (myStorage.getItem('transparent') === 'true') {
//   container.setAttribute('style', 'backdrop-filter:none;box-shadow:none');
// } else {
//   container.setAttribute(
//     'style',
//     'backdrop-filter: blur(10px);box-shadow: 4px 4px 8px 2px inset rgb(0 0 0 / 30 %)'
//   );
// }

// if (myStorage.getItem('blank') === 'true') {
//   container.setAttribute('style', 'display:none');
// }

const mySitesObj = [
  // { url: 'http://localhost:3000', imgSrc: 'img/logo192.png' },
  // {
  //   url: 'https://codepen.io/your-work',
  //   imgSrc: 'img/codepen.jpeg',
  // },
  // {
  //   url: 'https://css-tricks.com/',
  //   imgSrc: 'img/tricks.jpeg',
  // },
  // { url: 'https://dev.to/', imgSrc: 'img/devto.png' },
  // { url: 'https://maps.google.com', imgSrc: 'img/maps.png' },
  // { url: 'https://calendar.google.com/', imgSrc: 'img/calendar.png' },
  // {
  //   url: 'https://www.twitch.tv/directory/following/live/',
  //   imgSrc: 'img/twitch.png',
  // },
  { url: 'https://www.google.com', imgSrc: 'img/google.jpeg' },
  // { url: 'https://www.youtube.com', imgSrc: 'img/youtube.png' },
  {
    url: 'https://news.google.com',
    imgSrc: 'img/news.webp',
  },
  { url: 'https://watch.spectrum.net/guide', imgSrc: 'img/tv.jpeg' },
  { url: 'https://www.gmail.com', imgSrc: 'img/gmail.jpeg' },
  { url: 'https://drive.google.com/drive/my-drive', imgSrc: 'img/drive.png' },
  {
    url: 'https://github.com/SchuylerL?tab=repositories',
    imgSrc: 'img/gh.png',
  },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
    imgSrc: 'img/mdn.jpeg',
  },
];

// mySites
for (const [key, value] of Object.entries(mySitesObj)) {
  let node = document.createElement('a');
  node.href = value.url;
  node.rel = 'noopener noreferrer';
  node.classList = 'mySitesLink';
  node.innerHTML = `<img src="${value.imgSrc}" />`;
  node.onclick = function addLoader() {
    document.querySelector('.rmvBtnBody').classList.toggle('rmvBtnBodyTog');
  };

  mySites.appendChild(node);
}

chrome.topSites.get((data) => {
  for (let i = 0; i < data.length; i++) {
    let node = document.createElement('a');
    node.href = data[i].url;
    node.rel = 'noopener noreferrer';
    node.classList = 'topSiteLink';
    node.title = data[i].url;
    // node.innerHTML =
    //   data[i].title.length > 20
    //     ? data[i].title.substring(0, 20) + '...'
    //     : data[i].title;
    node.onclick = function addLoader() {
      document.querySelector('.rmvBtnBody').classList.toggle('rmvBtnBodyTog');
    };
    const favImg = document.createElement('img');
    favImg.src =
      'https://s2.googleusercontent.com/s2/favicons?domain=' + data[i].url;
    favImg.classList = 'favImg';
    node.prepend(favImg);
    myTopSites.appendChild(node);
  }
});

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let word = inpt.value;
  if (inpt.value !== '') {
    inpt.value = '';
    chrome.tabs.create({ url: 'https://www.google.com/search?q=' + word });
  }
});
inpt.addEventListener('keydown', (e) => {
  if (e.key === 'Alt') {
    let word = inpt.value;
    if (inpt.value !== '') {
      inpt.value = '';
      chrome.tabs.create({ url: 'https://www.google.com/search?q=' + word });
    }
  }
});

// document.querySelector('body').addEventListener('keydown', (e) => {
//   if (e.key === 'b' && inpt.value === '') {
//     const randomBg = bgArray[getRandomInt(bgArray.length)];
//     document.querySelector('body').setAttribute('background', randomBg);
//     document.querySelector('.newLink').classList.toggle('imgBtnTog');
//     myStorage.setItem('background', randomBg);
//   }
//   if (e.key === 't' && inpt.value === '') {
//     if (myStorage.getItem('topSitesBtnBool') === 'true') {
//       myTopSites.classList.toggle('btnToggle');
//     }
//     nodeBtn.onclick = function btnToggle() {
//       myTopSites.classList.toggle('btnToggle');
//       if (myStorage.getItem('topSitesBtnBool') === 'true') {
//         myStorage.setItem('topSitesBtnBool', false);
//       } else {
//         myStorage.setItem('topSitesBtnBool', true);
//       }
//     };
//   }
//   if (e.key === 'h' && inpt.value === '') {
//     document.querySelector('body').classList.toggle('bgToggle');

//     if (myStorage.getItem('background') === 'black') {
//       myStorage.setItem(
//         'background',
//         document.querySelector('body').getAttribute('background')
//       );
//       container.setAttribute(
//         'style',
//         'box-shadow: 4px 4px 8px 2px inset rgb(0 0 0 /30%)'
//       );
//     } else {
//       myStorage.setItem('background', 'black');
//       container.setAttribute('style', 'box-shadow: 4px 4px 8px 2px inset gray');
//     }
//   }
// });

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let word = inpt.value;

  if (inpt.value !== '') {
    inpt.value = '';
    if (word.endsWith('/')) word = word.substring(0, word.length - 1);
    if (!word.includes('http')) {
      word = `https://${word}`;
    }
    locStrgArr.push(word);
    myStorage.setItem('selectionsList', locStrgArr);
    if (document.querySelector('.myAdded'))
      document.querySelector('.myAdded').remove();

    save_options();

    new LinkController(locStrgArr);
  }
});
addBtnCom.addEventListener('click', (event) => {
  event.preventDefault();
  let word = inpt.value;

  if (inpt.value !== '') {
    inpt.value = '';
    if (word.endsWith('/')) word = word.substring(0, word.length - 1);
    word = word + '.com';
    if (!word.includes('http')) {
      word = `https://${word}`;
    }
    locStrgArr.push(word);
    myStorage.setItem('selectionsList', locStrgArr);
    if (document.querySelector('.myAdded'))
      document.querySelector('.myAdded').remove();

    save_options();

    new LinkController(locStrgArr);
  }
});

const nodeBtn = document.createElement('button');
nodeBtn.innerText = 'Top Sites';
nodeBtn.classList = 'topSitesBtn';
nodeBtn.title = 'Show/Hide';
if (myStorage.getItem('topSitesBtnBool') === 'true') {
  myTopSites.classList.toggle('btnToggle');
}
nodeBtn.onclick = function btnToggle() {
  myTopSites.classList.toggle('btnToggle');
  if (myStorage.getItem('topSitesBtnBool') === 'true') {
    myStorage.setItem('topSitesBtnBool', false);
  } else {
    myStorage.setItem('topSitesBtnBool', true);
  }
};

const reBtn = document.createElement('button');
reBtn.classList = 'bgBtn';
document.querySelector('body').classList = '';
reBtn.title = 'New Background';
reBtn.onclick = function reBtn() {
  const randomBg = bgArray[getRandomInt(bgArray.length)];
  document.querySelector('body').classList.remove('bgToggle');
  document.querySelector('body').setAttribute('background', randomBg);
  myStorage.setItem('background', randomBg);
  save_options();
};
document.querySelector('.blockBtns').appendChild(reBtn);
document.querySelector('.blockBtns').appendChild(nodeBtn);

const reImg = document.createElement('img');
reImg.classList = 'newLink';
reImg.src = 'img/reload.svg';
reBtn.appendChild(reImg);

reBtn.addEventListener('click', () =>
  document.querySelector('.newLink').classList.toggle('imgBtnTog')
);
document.querySelector('.newLink').onanimationend = () => {
  document.querySelector('.newLink').classList.remove('imgBtnTog');
};

const bgBtn = document.createElement('button');
bgBtn.classList = 'blkBtn';
bgBtn.title = 'Dark Background';
bgBtn.onclick = function bgBtn() {
  document.querySelector('body').classList.toggle('bgToggle');

  if (document.querySelector('body').classList.value === 'bgToggle') {
    myStorage.setItem('background', 'black');
    // document.querySelector('.clearViewBtn').setAttribute('disabled', true);
  } else {
    myStorage.setItem(
      'background',
      document.querySelector('body').getAttribute('background')
    );
    // document.querySelector('.clearViewBtn').removeAttribute('disabled');
  }

  save_options();
};
document.querySelector('.blockBtns').appendChild(bgBtn);

// const hideBtn = document.createElement('button');
// hideBtn.classList = 'clearViewBtn';
// hideBtn.title = 'Hide Border';

// hideBtn.onclick = function hideBtn(e) {
//   console.dir(e.target);
//   if (
//     container.getAttribute('style', 'backdrop-filter') ===
//       'backdrop-filter:none;box-shadow:none' &&
//     e.target.className === 'clearViewBtn'
//   ) {
//     container.setAttribute(
//       'style',
//       'backdrop-filter: blur(10px);box-shadow: 4px 4px 8px 2px inset rgb(0 0 0 / 30 %)'
//     );
//     myStorage.setItem('transparent', false);
//   } else {
//     if (e.target.className === 'clearViewBtn') {
//       container.setAttribute('style', 'backdrop-filter:none;box-shadow:none');
//       myStorage.setItem('transparent', true);
//     }
//   }
// };
// document.querySelector('.myForm').appendChild(hideBtn);

// const hideBtn = document.createElement('button');
// hideBtn.classList = 'clearViewBtn';
// hideBtn.title = 'Hide Border';

// hideBtn.onclick = function hideBtn(e) {
// if (window.matchMedia('(prefers-color-scheme: dark)').matches === false) {
//   document
//     .querySelector('body')
//     .setAttribute('style', 'background-color:white');
// } else {
// document
//   .querySelector('body')
//   .setAttribute('style', 'background-color:black');
// }
//   userBg = 'null';
// };
// document.querySelector('.myForm').appendChild(hideBtn);

const clearViewBtn = document.createElement('button');
clearViewBtn.title = 'Hide All';
clearViewBtn.classList = 'clearViewBtn';
clearViewBtn.onclick = function clearViewBtn(e) {
  // console.log(e);
  // document.querySelector('.container').style = 'display:none';
  // document.title = '-';
  // document
  //   .querySelector('body')
  //   .setAttribute('style', 'background-color:white');

  if (container.getAttribute('style', 'display') === 'none') {
    container.setAttribute('style', 'display:flex');
    // myStorage.setItem('blank', false);
  } else {
    document.querySelector('.container').style = 'display:none';
    // document.title = '- Tab';
    // document.appendChild(clearViewBtn);

    const rldBtn = document.createElement('button');
    // rldBtn.title = 'Click to show';
    rldBtn.classList = 'rldBtn';
    // rldBtn.textContent = 'x';
    rldBtn.onclick = function rldBtn(e) {
      container.setAttribute('style', 'display:flex');
      container.setAttribute('style', 'backdrop-filter:none;box-shadow:none');
      document.querySelector('.rldBtn').remove();
    };
    document.querySelector('body').appendChild(rldBtn);

    // container.setAttribute('style', 'backdrop-filter:none;box-shadow:none');
    // myStorage.setItem('blank', true);
  }
};
document.querySelector('.blockBtns').appendChild(clearViewBtn);

class Link {
  constructor(url, idx, removeFn) {
    this.url = url;
    this.index = idx;
    this.removeLink = removeFn;
  }

  buildLink() {
    const a = document.createElement('a');
    const url = this.url;

    const favImg = document.createElement('img');
    favImg.src = 'https://s2.googleusercontent.com/s2/favicons?domain=' + url;
    favImg.classList = 'favImg';

    // const removeButton = document.createElement('button');
    // removeButton.classList = 'rmvBtn';
    // removeButton.textContent = 'x';
    // removeButton.title = 'Remove';

    // url.startsWith('https://www')
    //   ? (removeButton.textContent = url.substring(12, 13))
    //   : (removeButton.textContent = url.substring(8, 9));

    // removeButton.addEventListener('click', () => this.removeLink(this.index));

    // removeButton.addEventListener(
    //   'mouseover',
    //   () => (removeButton.textContent = 'x')
    // );

    a.href = url;
    a.title = url;
    a.rel = 'noopener noreferrer';
    a.classList = 'aLink';
    // a.innerHTML = url.length > 35 ? url.substring(0, 35) : url;
    a.innerHTML = url.substring(8, 35);
    a.prepend(favImg);
    a.addEventListener('dragend', () => this.removeLink(this.index));

    const wrapper = document.createElement('div');
    wrapper.classList = 'theDiv';
    // wrapper.appendChild(favImg);
    // wrapper.appendChild(removeButton);
    wrapper.appendChild(a);

    // <img class="rmvBtnBody" src="/img/link.png" />;
    // const balloonImg = document.createElement('img');
    // balloonImg.src = '/img/link.png';
    // balloonImg.classList = 'rmvBtnBody';
    // wrapper.appendChild(balloonImg);

    a.addEventListener('click', () =>
      document.querySelector('.rmvBtnBody').classList.toggle('rmvBtnBodyTog')
    );
    return wrapper;
  }
}

class LinkController {
  constructor(urls) {
    this.el = document.createElement('div');
    this.el.classList = 'myAdded';
    this.urls = urls;
    this.renderLinks();
    sitesContainer.appendChild(this.el);
  }

  renderLinks = () => {
    this.el.innerHTML = ''; // clear out to avoid duplicates
    // console.log(this.urls);
    this.urls.sort();
    this.links = this.urls.map((url, idx) => {
      const link = new Link(url, idx, this.removeLink);
      this.el.appendChild(link.buildLink());
      return link;
    });
  };

  removeLink = (index) => {
    this.urls = this.urls.filter((_, i) => i !== index); // remove index passed
    this.urls.length === 0
      ? myStorage.clear()
      : myStorage.setItem('selectionsList', this.urls);
    locStrgArr = this.urls;
    save_options();
    this.renderLinks();
  };
}

new LinkController(locStrgArr);
