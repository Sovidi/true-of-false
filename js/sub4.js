const grid = document.querySelector(".content-1-grid");
const inner = document.querySelector(".content-1-inner");

let shopGrid = {
    pg1 : [
        {
            위치 : "서울점"
        },
        {
            위치 : "광주점"
        },
        {
            위치 : "동탄점"
        },
        {
            위치 : "부산점"
        },
    ],
    pg2 : [
        {
            위치 : "저세상점"
        },
        {
            위치 : "태평양점"
        },
        {
            위치 : "후지산점"
        },
        {
            위치 : "내집점"
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
                <figure>
                    <img src="" alt="">
                    <figcaption>${bttnsTextV.위치}</figcaption>
                </figure>
            </li>
            `;
        })
    }
});