const grid = document.querySelector(".content-1-grid");
const inner = document.querySelector(".content-1-inner");

let shopGrid = {
    서울 : [
        {
            위치 : "서울점",
            섬네일 : "./img/shop_0.jpg"
        },
        {
            위치 : "광주점",
            섬네일 : "./img/shop_1.jpg"
        },
        {
            위치 : "동탄점",
            섬네일 : "./img/shop_2.jpg"
        },
        {
            위치 : "부산점",
            섬네일 : "./img/shop_3.jpg"
        },
    ],
    이세계 : [
        {
            위치 : "저세상점",
            섬네일 : "./img/shop_4.jpg"
        },
        {
            위치 : "태평양점",
            섬네일 : "./img/shop_5.jpg"
        },
        {
            위치 : "후지산점",
            섬네일 : "./img/shop_6.jpg"
        },
        {
            위치 : "내집점",
            섬네일 : "./img/shop_7.jpg"
        },
    ],
}

for(const shopGridKey in shopGrid) {
    inner.innerHTML += `<button>${shopGridKey}</button>`;
};

const innerBttns = document.querySelectorAll(".content-1-inner button");

innerBttns.forEach(function(innerBttnsV, k) {
    innerBttnsV.onclick = function() {
        grid.innerHTML = "";
        let bttnsText = innerBttns[k].innerText;
        shopGrid[bttnsText].forEach(function(bttnsTextV, k) {
            grid.innerHTML += `
            <li>
                <div>
                    <figure style="background-image: url(${bttnsTextV.섬네일});"></figure>
                    <figcaption>${bttnsTextV.위치}</figcaption>
                </div>
            </li>
            `;
        })
    }
});