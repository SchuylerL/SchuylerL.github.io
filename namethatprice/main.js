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

    //blueButton.addEventListener("mouseover", makeBlue);
    //let blueButton = document.getElementById("blueButton");
    // let image01 = document.getElementById("img01");

    let basicH1 = document.getElementById("basicH1");
    let basicH2 = document.getElementById("basicH2");
    let image01 = document.getElementById("img01");
    let button01 = document.getElementById("button01");

    button01.addEventListener("click", changeH1());
    // button02.addEventListener("click", changeH1());

    document.getElementById("button01").onclick = function() {
      changeH1();
    };

    function changeH1() {
      //let button02 = document.getElementById("button02");

      let count = Math.floor(Math.random() * imageArr.length);

      image01.src = imageArr[count];
      basicH1.innerHTML = descriptionArr[count];
      basicH2.innerHTML = "";

      document.getElementById("button02").onclick = function() {
        if (
          Number(document.getElementById("priceEntry").value) <=
            priceArr[count] &&
          Number(document.getElementById("priceEntry").value) >=
            priceArr[count] - 20
        ) {
          basicH2.innerHTML =
            "Correct: $" +
            Number(document.getElementById("priceEntry").value).toFixed(2) +
            "  -  Actual: $" +
            priceArr[count].toFixed(2);
        } else {
          let wrong =
            "Incorrect: $" +
            Number(document.getElementById("priceEntry").value).toFixed(2) +
            "  -  Actual: $" +
            priceArr[count].toFixed(2);
          // console.log(document.getElementById("priceEntry").value);

          basicH2.innerHTML = wrong;
        }
      };
    }

    // function makeBlue() {
    //   if (basicH1.classList.contains("blue")) {
    //     basicH1.classList.remove("blue");
    //   } else {
    //     basicH1.classList.add("blue");
    //   }
    // }
  });
