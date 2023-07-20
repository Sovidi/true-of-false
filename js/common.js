$("header").load("./header.html", headerOpening);
$("footer").load("./footer.html");
$("body").append(`<div class="popup"><div>`);
$(".popup").load("./popup.html", pop);
$("body").append(`<ul class="snsicons"></ul>`);
$(".snsicons").load("./icons.html");

function headerOpening() {
    const header = document.querySelector("header");
    const docMain = document.querySelector("main");
    const menus = document.querySelector(".menus");
    const fullBttn = document.querySelector(".burger > a");
    
    fullBttn.addEventListener("click", addBodyCl);
    function addBodyCl(){
        header.classList.toggle("open");
        docMain.classList.toggle("ds-not");
    };
};

function pop() {
    const popup = document.querySelector(".popup");
    const popupBttn = document.querySelector(".popup > button");
    const popupBox = document.querySelector(".popup > input")
    console.log(popup);

    popupBttn.addEventListener("click", function() {
    console.log(popupBox.checked);
    setTime("tenSec");
    popup.style = "display: none";
    });

    function setTime(str) {
    if(popupBox.checked) {
        const popday = new Date();
        popday.setHours(popday.getHours() + 1);
        document.cookie = `event=${str}; expires=${popday.toUTCString()}`
    }
    };

    function getTime(str) {
    if(document.cookie.match(str)) {
        popup.style = "display: none";
    } else {
        popup.stye = "display: block";
    }
    };

    getTime("tenSec");
};