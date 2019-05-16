const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const center = document.querySelector("#center");

const handler = evt => {
  // if (evt.target.tagName === 'BUTTON') {
  // data[evt.target.innerHTML] = data[evt.target.innerHTML] === 'LEFT' ? 'RIGHT' : 'LEFT';
  render();
  // }
};

// left.addEventListener('click', handler);
// right.addEventListener('click', handler);
center.addEventListener("click", handler);

const renderSection = (side, div) => {
  // const html = `
  //         ${
  //     Object.entries(data.prizes).map(key => `<center>
  //             <h3>${key.join(': ')}</h3>
  //         </center>`).join(' ')
  //     }
  //     `;

  // const html = `
  //     ${
  //     Object.entries(data.prizes).map(key => `<center><h3>${key.join(': ')}</h3>
  //         </center>`).join('')
  //     }
  //     `;

  const amount = data.prizes[side];
  const isZero = amount == 0;
  const html = `<center><h3 class = '${isZero &&
    "zero"}'>${side}: ${amount}</h3></center>`;
  div.innerHTML = html;

  // div.innerHTML = data.prizes.Foo;
};

const render = () => {
  renderSection("Foo", left);
  renderSection("Bar", center);
  renderSection("Bazz", right);
};
render();

//-----inc and dec---------------------------------------------
const template = data => `
            <center>
            <div id='person'>
                <h2 id='personbox'>Moe</h2>
                <button data-action='dec'>-</button>               
                 Foo: ${data.customers.Moe.Foo}
                <button data-action='inc'>+</button>
            </div>
            <div id='persontop'>
                <br />
                <button data-action2='dec'>-</button>                
                Bar: ${data.customers.Moe.Bar}
                <button data-action2='inc'>+</button>
            </div>
            <div id='personbtm'>
                <br />
                <button data-action3='dec'>-</button>                
                Bazz: ${data.customers.Moe.Bazz}
                <button data-action3='inc'>+</button>
            <br /><br />
            </div>
            </center>
            `;
const template2 = data => `
            <center>
            <div id='person'>
                <h2 id='personbox'>Larry</h2>
                <button data-action='dec'>-</button>               
                Foo: ${data.customers.Larry.Foo}
                <button data-action='inc'>+</button>
            </div>
            <div id='persontop'>
                <br />
                <button data-action2='dec'>-</button>                
                Bar: ${data.customers.Larry.Bar}
                <button data-action2='inc'>+</button>
            </div>
            <div id='personbtm'>
                <br />
                <button data-action3='dec'>-</button>                
                Bazz: ${data.customers.Larry.Bazz}
                <button data-action3='inc'>+</button>
            <br /><br />
            </div>               
            </center>
            `;
const template3 = data => `
            <center>
            <div id='person'>
                <h2 id='personbox'>Curly</h2>
                <button data-action='dec'>-</button>                
                Foo: ${data.customers.Curly.Foo}
                <button data-action='inc'>+</button>
            </div>
            <div id='persontop'>
                <br />
                <button data-action2='dec'>-</button>                
                Bar: ${data.customers.Curly.Bar}
                <button data-action2='inc'>+</button>
            </div>
            <div id='personbtm'>
                <br />
                <button data-action3='dec'>-</button>                
                Bazz: ${data.customers.Curly.Bazz}
                <button data-action3='inc'>+</button>
                <br /><br />
            </div>
            </center>
            `;
const div = document.querySelector("#square");
const div2 = document.querySelector("#square2");
const div3 = document.querySelector("#square3");

const renderSq = () => {
  div.innerHTML = template(data);
};
const renderSq2 = () => {
  div2.innerHTML = template2(data);
};
const renderSq3 = () => {
  div3.innerHTML = template3(data);
};
render();

const renderSquares = () => {
  renderSq();
  renderSq2();
  renderSq3();
};
renderSquares();

div.addEventListener("click", ev => {
  const action = ev.target.getAttribute("data-action");
  const action2 = ev.target.getAttribute("data-action2");
  const action3 = ev.target.getAttribute("data-action3");
  //Moe, Foo
  if (action === "dec" && data.customers.Moe.Foo > 0) {
    data.customers.Moe.Foo--;
    data.prizes.Foo++;
  }
  if (action === "inc" && data.prizes.Foo > 0) {
    data.prizes.Foo--;
    data.customers.Moe.Foo++;
  }
  //bar
  if (action2 === "dec" && data.customers.Moe.Bar > 0) {
    data.customers.Moe.Bar--;
    data.prizes.Bar++;
  }
  if (action2 === "inc" && data.prizes.Bar > 0) {
    data.prizes.Bar--;
    data.customers.Moe.Bar++;
  }
  //bazz
  if (action3 === "dec" && data.customers.Moe.Bazz > 0) {
    data.customers.Moe.Bazz--;
    data.prizes.Bazz++;
  }
  if (action3 === "inc" && data.prizes.Bazz > 0) {
    data.prizes.Bazz--;
    data.customers.Moe.Bazz++;
  }
  render();
  renderSquares();
});
div2.addEventListener("click", ev => {
  const action = ev.target.getAttribute("data-action");
  const action2 = ev.target.getAttribute("data-action2");
  const action3 = ev.target.getAttribute("data-action3");
  if (action === "dec" && data.customers.Larry.Foo > 0) {
    data.customers.Larry.Foo--;
    data.prizes.Foo++;
  }
  if (action === "inc" && data.prizes.Foo > 0) {
    data.prizes.Foo--;
    data.customers.Larry.Foo++;
  }
  //bar
  if (action2 === "dec" && data.customers.Larry.Bar > 0) {
    data.customers.Larry.Bar--;
    data.prizes.Bar++;
  }
  if (action2 === "inc" && data.prizes.Bar > 0) {
    data.prizes.Bar--;
    data.customers.Larry.Bar++;
  }
  //bazz
  if (action3 === "dec" && data.customers.Larry.Bazz > 0) {
    data.customers.Larry.Bazz--;
    data.prizes.Bazz++;
  }
  if (action3 === "inc" && data.prizes.Bazz > 0) {
    data.prizes.Bazz--;
    data.customers.Larry.Bazz++;
  }
  render();
  renderSquares();
});
div3.addEventListener("click", ev => {
  const action = ev.target.getAttribute("data-action");
  const action2 = ev.target.getAttribute("data-action2");
  const action3 = ev.target.getAttribute("data-action3");
  if (action === "dec" && data.customers.Curly.Foo > 0) {
    data.customers.Curly.Foo--;
    data.prizes.Foo++;
  }
  if (action === "inc" && data.prizes.Foo > 0) {
    data.prizes.Foo--;
    data.customers.Curly.Foo++;
  }
  //bar
  if (action2 === "dec" && data.customers.Curly.Bar > 0) {
    data.customers.Curly.Bar--;
    data.prizes.Bar++;
  }
  if (action2 === "inc" && data.prizes.Bar > 0) {
    data.prizes.Bar--;
    data.customers.Curly.Bar++;
  }
  //bazz
  if (action3 === "dec" && data.customers.Curly.Bazz > 0) {
    data.customers.Curly.Bazz--;
    data.prizes.Bazz++;
  }
  if (action3 === "inc" && data.prizes.Bazz > 0) {
    data.prizes.Bazz--;
    data.customers.Curly.Bazz++;
  }
  render();
  renderSquares();
});
