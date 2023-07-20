$("header").load("./header.html", headerOpening);
$("footer").load("./footer.html");
$("body").append(`<div class="popup"><div>`);
$(".popup").load("./popup.html", pop);
$("body").append(`<div class="icons"></div>`);
$(".icons").load(`./icons.html`, direction)

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

function direction() {
    const arrow = document.querySelector(".direction");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const snsIcn = document.querySelector(".snsicons")

    arrow.addEventListener("click", function() {
        if(arrow.classList.contains("active")) {
            footer.scrollIntoView({behavior: "smooth"})
        } else {
            header.scrollIntoView({behavior: "smooth"})
        };
    });


    let arrowOb = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entriesV, entriesK) {
            if(entriesV.isIntersecting) {
                arrow.classList.remove("active");
            } else {
                arrow.classList.add("active");
            }
        });
    });


    arrowOb.observe(footer);

    let snsOb = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entriesV, entriesK) {
            if(entriesV.isIntersecting) {
                snsIcn.classList.add("active");
            } else {
                snsIcn.classList.remove("active");
            }
        })
    })

    snsOb.observe(footer);
};