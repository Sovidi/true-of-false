let shopGrid = {
    서울 : [
        {
            위치 : "서울점",
            섬네일 : "./img/shop_0.jpg",
            페이지 : "0"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg",
            페이지 : "1"
        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg",
            페이지 : "2"
        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg",
            페이지 : "3"
        },
    ],
    이세계 : [
        {
            위치 : "저세상점",
            섬네일 : "./img/shop_4.jpg",
            페이지 : "0"
        },
        {
            위치 : "태평양점",
            섬네일 : "./img/shop_5.jpg",
            페이지 : "1"
        },
        {
            위치 : "후지산점",
            섬네일 : "./img/shop_6.jpg",
            페이지 : "3"
        },
        {
            위치 : "내집점",
            섬네일 : "./img/shop_7.jpg",
            페이지 : "4"
        },
    ],
    경기 : [
        {
            위치 : "경기점",
            섬네일 : "./img/shop_0.jpg",
            페이지 : "0"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg",
            페이지 : "1"
        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg",
            페이지 : "2"
        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg",
            페이지 : "3"
        },
    ],
    광주 : [
        {
            위치 : "광주점",
            섬네일 : "./img/shop_0.jpg",
            페이지 : "0"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg",
            페이지 : "1"
        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg",
            페이지 : "2"
        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg",
            페이지 : "3"
        },
    ],
    독일 : [
        {
            위치 : "독일점",
            섬네일 : "./img/shop_0.jpg",
            페이지 : "0"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg",
            페이지 : "1"
        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg",
            페이지 : "2"
        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg",
            페이지 : "3" 
        },
    ],
    프랑스 : [
        {
            위치 : "프랑스점",
            섬네일 : "./img/shop_0.jpg",
            페이지 : "0"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg",
            페이지 : "1"
        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg",
            페이지 : "2"
        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg",
            페이지 : "3"
        },
    ],
    독도 : [
        {
            위치 : "독도점",
            섬네일 : "./img/shop_0.jpg",
            페이지 : "0"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg",
            페이지 : "1"
        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg",
            페이지 : "2"
        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg",
            페이지 : "3"
        },
    ],
    부싼 : [
        {
            위치 : "부싼점",
            섬네일 : "./img/shop_0.jpg",
            페이지 : "0"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg",
            페이지 : "1"

        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg",
            페이지 : "2"

        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg",
            페이지 : "3"
        },
    ],
};

const grid = document.querySelector(".content-1-grid");
const inner = document.querySelector(".content-1-inner");
const selector = document.querySelector(".storeSel");

let options = "";
for(const shopGridKey in shopGrid) {
    console.log(shopGrid[shopGridKey]);
    options = document.createElement("option");
    options.innerText = `${shopGridKey}`;
    selector.appendChild(options);
};

optArr = document.querySelectorAll(".storeSel > option");

let gLi;
let gDiv;
let gH2;
let gFig;
let gFigCap;

selector.addEventListener('change', function() {
    let cityName = selector.value;
    grid.innerHTML = "";
    shopGrid[cityName].forEach(function(V, K) {
        gLi = document.createElement("li");
        gDiv = document.createElement("div");
        gH2 = document.createElement("h2");
        gFig = document.createElement("figure");
        gFigCap = document.createElement("figcaption");

        grid.appendChild(gLi);
        gLi.appendChild(gDiv);
        gDiv.appendChild(gH2);
        gDiv.appendChild(gFig);
        gDiv.appendChild(gFigCap);

        gLi.classList.add("shops");
        gH2.innerText = V.페이지;
        gFig.style = `background-image: url(${V.섬네일})`;
        gFigCap.innerText = V.위치;
    })
});

everyGH2 = document.querySelectorAll(".shops > div > h2");
everyGLi = document.querySelectorAll(".shops");

const pBttns = document.querySelectorAll(".pBttns > button");
pBttns.forEach(function(pBttnsV, pBttnsK) {
    pBttnsV.addEventListener("click", function(event) {
        console.log(everyGLi);
    })
})


//  optArr.forEach(function(optArrV, optArrK) {
    // optionsV.onchange = function() {
    //     grid.innerHTML = "";
    //     let opsText = options[optionsK].innerText;
    //     shopGrid[opsText].forEach(function(opsTextV, opsTextK) {
    //         grid.innerHTML += `
    //         <li>
    //             <div>
    //                 <figure style="background-image: url(${opsTextV.섬네일});"></figure>
    //                 <figcaption>${opsTextV.위치}</figcaption>
    //             </div>
    //         </li>
    //         `;
    //     })
    // }
// });