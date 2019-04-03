//const fetch = require("node-fetch");
fetch(
  "https://api.bestbuy.com/v1/products(offers.type=deal_of_the_day)?apiKey=gO92rmSFU1CQOz9KzxHi7LQm&format=json&pageSize=15&show=name,image,salePrice,url&sort=bestSellingRank"
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
    let urlArr = [];

    //fill arrays with API data
    for (let i = 0; i < objectArray.length; i++) {
      arr.push(objectArray[i]);
      imageArr.push(arr[i].image);
      priceArr.push(arr[i].salePrice);
      descriptionArr.push(arr[i].name);
      urlArr.push(arr[i].url);
    }

    //blueButton.addEventListener("mouseover", makeBlue);
    //let blueButton = document.getElementById("blueButton");
    // let image01 = document.getElementById("img01");

    let basicH1 = document.getElementById("basicH1");
    let basicH2 = document.getElementById("basicH2");
    let basicH3 = document.getElementById("basicH3");
    let image01 = document.getElementById("img01");
    let button01 = document.getElementById("button01");
    let yes = 0,
      no = 0;

    button01.addEventListener("click", changeH1());
    // button02.addEventListener("click", changeH1());

    //$("priceEntry").keydown(false);

    // // Get the input field
    // var input = document.getElementById("priceEntry");

    // // Execute a function when the user releases a key on the keyboard
    // input.addEventListener("keyup", function(event) {
    //   // Number 13 is the "Enter" key on the keyboard
    //   if (event.keyCode === 13) {
    //     // Cancel the default action, if needed
    //     event.preventDefault();
    //     // Trigger the button element with a click
    //     //document.getElementById("button02").click();
    //   }
    // });

    document.getElementById("button01").onclick = function() {
      changeH1();
    };

    function changeH1() {
      //let button02 = document.getElementById("button02");
      let storelink = "Store Link";
      let count = Math.floor(Math.random() * imageArr.length);

      image01.src = imageArr[count];
      basicH1.innerHTML =
        descriptionArr[count] + " (" + storelink.link(urlArr[count]) + ")";
      basicH2.innerHTML = "";
      basicH3.innerHTML = "";
      // button01.innerHTML = "";
      document.getElementById("priceEntry").value = "";

      document.getElementById("button02").onclick = function() {
        basicH2.innerHTML = "";
        basicH3.innerHTML = "";

        if (
          Number(document.getElementById("priceEntry").value) <=
            priceArr[count] &&
          Number(document.getElementById("priceEntry").value) >=
            priceArr[count] - 20 &&
          Number(document.getElementById("priceEntry").value) !== 0
        ) {
          yes++;
          basicH2.innerHTML =
            yes +
            " Correct: $" +
            Number(document.getElementById("priceEntry").value).toFixed(2) +
            "  -  Actual: $" +
            priceArr[count].toFixed(2);
        } else {
          if (Number(document.getElementById("priceEntry").value) !== 0) no++;
          basicH3.innerHTML =
            no +
            " Incorrect: $" +
            Number(document.getElementById("priceEntry").value).toFixed(2) +
            "  -  Actual: $" +
            priceArr[count].toFixed(2);
        }
        document.getElementById("priceEntry").value = "";
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
