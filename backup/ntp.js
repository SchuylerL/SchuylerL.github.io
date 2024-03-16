const addBtn = document.querySelector('.addBtn');
const clearBtn = document.querySelector('.clearBtn');
const inpt = document.querySelector('#myText');
const mySites = document.querySelector('.mySites');
const myTopSites = document.querySelector('.myTopSites');
const sitesContainer = document.querySelector('.sitesContainer');

const bgArray = [
  /*'https://lh4.googleusercontent.com/proxy/n0iQKlAJqoZJvPdXNxJTOMokgx33LN6KA8mo7sIWZDvezz2hBHkEQHX8DV4a2ucOojuoE0mTT8LmSNmMdIUMMPL273HBaiWYUt3kAA=w3840-h2160-p-k-no-nd-mv',
  'https://lh4.googleusercontent.com/proxy/hxSc80h6Htq3U-4ze-TX8Esb54ecWL6g_BbINw2tSAM4ZM7iA4XOSHrPfgCjki87-ZusKhCnd-NDKHAXf4j-zi1IxUD-ddsEY6G81w=w3840-h2160-p-k-no-nd-mv',
  'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
  'https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/23/17/46/desert-2435404_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936_960_720.jpg',
  'https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/06/16/16/17/road-3478977_960_720.jpg',
  'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg',*/
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document
  .querySelector('body')
  .setAttribute('background', bgArray[getRandomInt(bgArray.length)]);

const mySitesObj = [
  // { url: 'https://music.amazon.com', imgSrc: '../img/music.png' },
  {
    url: 'https://www.twitch.tv/directory/following/live/',
    imgSrc: '../img/twitch.png',
  },
  { url: 'https://watch.spectrum.net/guide', imgSrc: '../img/tv.jpeg' },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
    imgSrc: '../img/mdn.jpeg',
  },
  {
    url: 'https://www.w3schools.com',
    imgSrc: '../img/w3.png',
  },
  {
    url: 'https://css-tricks.com/',
    imgSrc: '../img/tricks.jpeg',
  },
  {
    url: 'https://github.com/schuylerl?tab=repositories',
    imgSrc: '../img/gh.png',
  },
  { url: 'http://localhost:3000', imgSrc: '../img/logo192.png' },
  {
    url: 'https://news.google.com',
    imgSrc: '../img/news.webp',
  },
  { url: 'https://gmail.com', imgSrc: '../img/gmail.png' },
  { url: 'https://calendar.google.com/', imgSrc: '../img/calendar.png' },
  {
    url: 'https://drive.google.com/drive/my-drive',
    imgSrc: '../img/drive.png',
  },
  // { url: 'https://hangouts.google.com', imgSrc: '../img/hangouts.png' },
  { url: 'https://www.youtube.com', imgSrc: '../img/youtube.png' },
  { url: 'https://maps.google.com', imgSrc: '../img/maps.png' },
  { url: 'https://www.google.com', imgSrc: '../img/google.jpeg' },
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

// chrome.storage.sync.set({ key: locStrgArr }, function () {
//   console.log('Value is set to ' + locStrgArr);
// });
// chrome.storage.sync.get(['key'], function (result) {
//   console.log('Value currently is ' + result.key);
// });

// topSites

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // console.log(locStrgArr);
  let word = inpt.value;
  // locStrgArr.forEach((url) => {
  //   if (url === inpt.value) {
  //     inpt.value = '*** Duplicate URL entered ***';
  //     setTimeout(function () {
  //       inpt.value = '';
  //     }, 3000);
  //   }
  // });
  if (inpt.value !== '' && inpt.value !== '*** Duplicate URL entered ***') {
    inpt.value = '';
    locStrgArr.push(word);
    myStorage.setItem('selectionsList', locStrgArr);
    let node = document.createElement('div');
    node.id = 'theDiv';
    // node.innerHTML = `<a href='${word}' rel = 'noopener noreferrer' id = 'aLink'> <img class='newLink' src='img/link.png' /> ${word}</a><button value=${word} id='itemBtn${locStrgArr.length}'>x</button>`;
    myAdded.appendChild(node);

    const a = document.createElement('a');
    if (!word.includes('http')) word = `https://${word}`;
    a.href = word;
    // const imgg = document.createElement('img');
    // imgg.classList = 'newLink';
    // imgg.src = 'img/link.png';
    // a.appendChild(imgg);
    a.rel = 'noopener noreferrer';
    a.id = 'aLink';
    a.innerHTML += ` ${word}`;
    const btn = document.createElement('button');
    btn.value = word;
    btn.id = `itemBtn${locStrgArr.length}`;
    btn.innerText = 'x';
    node.appendChild(a);
    node.appendChild(btn);

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

// function removeElement() {
//   myTopSites.style.display = 'none';
// }

// function resetElement() {
//   myTopSites.style.display = 'block';
// }

class Link {
  constructor(url, idx, removeFn) {
    this.url = url;
    this.index = idx;
    this.removeLink = removeFn;
  }

  getUrl() {
    if (!this.url.includes('http')) {
      this.url = `https://${this.url}`;
    }
    return this.url;
  }

  buildLink() {
    const a = document.createElement('a');
    const url = this.getUrl();
    a.href = url;

    // const imgg = document.createElement('img');
    // imgg.classList = 'newLink';
    // imgg.src = 'img/link.png';
    // a.appendChild(imgg);
    a.rel = 'noopener noreferrer';
    a.id = 'aLink';
    a.innerHTML += ` ${url}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', () => this.removeLink(this.index));

    const wrapper = document.createElement('div');
    wrapper.id = 'theDiv';
    wrapper.appendChild(a);
    wrapper.appendChild(removeButton);
    return wrapper;
  }
}

// const nodeBtn = document.createElement('button');
// nodeBtn.innerText = 'Top Sites';
// nodeBtn.classList = 'topSitesBtn';
// nodeBtn.onclick = function btnToggle() {
//   myTopSites.classList.toggle('btnToggle');
// };
// document.querySelector('.myForm').appendChild(nodeBtn);

// const reBtn = document.createElement('button');
// reBtn.classList = 'bgBtn';
// reBtn.onclick = function reBtn() {
//   document
//     .querySelector('body')
//     .setAttribute('background', bgArray[getRandomInt(bgArray.length)]);
// };
// const reImg = document.createElement('img');
// reImg.classList = 'newLink';
// reImg.src = '../img/reload.svg';
// reBtn.appendChild(reImg);
// document.querySelector('.myForm').appendChild(reBtn);

// const bgBtn = document.createElement('button');
// bgBtn.innerText = 'No BG';
// bgBtn.classList = 'blkBtn';
// bgBtn.onclick = function bgBtn() {
//   document.querySelector('body').setAttribute('background', '');
// };
// document.querySelector('.myForm').appendChild(bgBtn);

// myTopSites.style.display === 'none'
//   ? function resetElement() {
//       myTopSites.style.display = 'block';
//     }
//   : function removeElement() {
//       myTopSites.style.display = 'none';
//     };

class LinkController {
  constructor(urls) {
    this.el = document.createElement('div');
    this.el.id = 'myAdded';
    this.urls = urls;
    this.urls.sort();
    this.renderLinks();
    sitesContainer.appendChild(this.el);
  }

  renderLinks = () => {
    this.el.innerHTML = ''; // clear out to avoid duplicates
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
    this.renderLinks();
  };
}

new LinkController(locStrgArr);
