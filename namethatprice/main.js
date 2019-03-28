//const fetch = require("node-fetch");
fetch(
  "https://api.bestbuy.com/v1/products(offers.type=deal_of_the_day)?apiKey=gO92rmSFU1CQOz9KzxHi7LQm&format=json&pageSize=15&show=name,image,salePrice&sort=bestSellingRank"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //variables
    let arr = [];
    let objectArray = myJson.products;
    let imageArr = [];
    let priceArr = [];
    let descriptionArr = [];

    //fill arrays with API data
    for (let i = 0; i < objectArray.length; i++) {
      arr.push(objectArray[i]);
      imageArr.push(arr[i].image);
      priceArr.push(arr[i].salePrice);
      descriptionArr.push(arr[i].name);
    }
    //return priceArr;
    //console.log(imageArr, priceArr, descriptionArr);

    //---------------------------------------------

    // let count = Math.floor(Math.random());
    // let count = 0;
    //blueButton.addEventListener("mouseover", makeBlue);
    // let image01 = document.getElementById("img01");
    //let blueButton = document.getElementById("blueButton");

    let basicH1 = document.getElementById("basicH1");
    let basicH2 = document.getElementById("basicH2");
    let image01 = document.getElementById("img01");
    let button01 = document.getElementById("button01");
    //let entered = document.getElementById("priceEntry");
    // let right,
    //   wrong = 0;

    button01.addEventListener("click", changeH1());
    // button02.addEventListener("click", changeH1());

    document.getElementById("button01").onclick = function() {
      changeH1();
    };

    function changeH1() {
      // let num = Math.floor(Math.random() * imageArr.length);

      let button02 = document.getElementById("button02");

      let count = Math.floor(Math.random() * imageArr.length);
      image01.src = imageArr[count];
      basicH1.innerHTML = descriptionArr[count];
      basicH2.innerHTML = "";

      document.getElementById("button02").onclick = function() {
        if (
          Number(document.getElementById("priceEntry").value) <=
            priceArr[count] &&
          Number(document.getElementById("priceEntry").value) >=
            priceArr[count] - 40
        ) {
          basicH2.innerHTML =
            "Correct! Entered: $" +
            document.getElementById("priceEntry").value +
            "  Actual Price: $" +
            priceArr[count];
          // right++;
        } else
          basicH2.innerHTML =
            "Try Again: $" +
            document.getElementById("priceEntry").value +
            "  Actual Price: $" +
            priceArr[count];
        // wrong++;
      };
    }
    // console.log(right);
    // console.log(wrong);

    // console.log(typeof priceArr[count]);
    // let value = Number(document.getElementById("priceEntry").value);

    // console.log("Correct! Price = $" + priceArr[count]);
    // console.log(Number(document.getElementById("priceEntry").value));
    // console.log(typeof priceArr[count]);

    //let image01 = document.getElementById("img01");
    //let image02 = document.getElementById("img02");

    // function makeBlue() {
    //   if (basicH1.classList.contains("blue")) {
    //     basicH1.classList.remove("blue");
    //   } else {
    //     basicH1.classList.add("blue");
    //   }
    // }
  });
