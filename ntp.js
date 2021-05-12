const addBtn = document.querySelector('.addBtn');
const clearBtn = document.querySelector('.clearBtn');
const inpt = document.querySelector('#myText');
const mySites = document.querySelector('.mySites');
const myAdded = document.querySelector('.myAdded');

const mySitesObj = [
  {
    url: 'https://www.twitch.tv/directory/following/live/',
    imgSrc: 'img/twitch.png',
  },
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
  { url: 'https://www.google.com', imgSrc: 'img/google.jpeg' },
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

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let word = inpt.value;
  if (word !== '') {
    if (!word.includes('https://')) word = 'https://' + word;
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

    const imgg = document.createElement('img');
    imgg.classList = 'newLink';
    imgg.src = 'img/link.png';
    a.appendChild(imgg);
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

class LinkController {
  constructor(urls) {
    this.el = document.createElement('div');
    // this.el.id = 'theDiv';
    this.urls = urls;
    this.renderLinks();
    myAdded.appendChild(this.el);
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
    locStrgArr.length === 0
      ? myStorage.clear()
      : myStorage.setItem('selectionsList', this.urls);
    this.renderLinks();
  };
}

new LinkController(locStrgArr);
