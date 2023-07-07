const titleBg = document.querySelector(".title-figure");
const titleBttn = document.querySelectorAll(".slide-1 > label");
const slideBttn2 = document.querySelectorAll(".slide-2 > label");

let num2 = 0;

titleBttn.forEach(function(titleBttnV, titleBttnK) {
    titleBttnV.onclick = function() {
        num2 = titleBttnK;
        titleBg.style = `transform:translateX(${-100 * num2}%)`
    };
});


slideBttn2.forEach(function(slideBttn2V, slideBttn2K) {
    slideBttn2V.onclick = function() {
        let slideBttn2VDataName = slideBttn2V.dataset.name;
        if(slideBttn2VDataName == "next") {
            if(num2 < 2) {
                num2++;
            } else {
                num2 = 0;
                console.log("hehe")
            };
        } else {
            if(num2 > 0) {
                num2--;
            } else {
                num2 = 2;
                console.log("hehe")
            };
        };
    titleBg.style = `transform:translateX(${-100 * num2}%)`
}
});

setInterval(function() {
    titleBg.style = `transform:translateX(${-100 * num2}%)`
    num2++;
    if(num2 >= 3) {
        num2 = 0;
    }
}, 5000);



const bttns = document.querySelectorAll(".content-4-buttons > a");
const bgs = document.querySelector(".content-4-slide-content")

bttns.forEach(function(bttnsV, bttnsK) {
    bttnsV.onclick = function() {
        bgs.style = `transform:translateX(-${bttnsK * 100}%)`;
    }
});

let num = 0;
setInterval(function() {
    bgs.style = `transform:translateX(-${num * 100}%)`;
    num++
    if(num >= 8) {
        num = 0;
    };
}, 5000);
