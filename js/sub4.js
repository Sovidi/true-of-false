const grid = document.querySelector(".content-1-grid");
const inner = document.querySelector(".content-1-inner");
const selector = document.querySelector(".storeSel");

fetch("./data/data.json")
.then(res => res.json())
.then(data => {
let options = "";
for(const shopGridKey in data.shopGrid) {
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
    data.shopGrid[cityName].forEach(function(V, K) {
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
})





// everyGH2 = document.querySelectorAll(".shops > div > h2");
// everyGLi = document.querySelectorAll(".shops");

// const pBttns = document.querySelectorAll(".pBttns > button");
// pBttns.forEach(function(pBttnsV, pBttnsK) {
//     pBttnsV.addEventListener("click", function(event) {
//         console.log(everyGLi);
//     })
// })


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