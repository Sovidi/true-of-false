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



// const bttns = document.querySelectorAll(".content-4-buttons > a");
// const bgs = document.querySelector(".content-4-slide-content")

// bttns.forEach(function(bttnsV, bttnsK) {
//     bttnsV.onclick = function() {
//         bgs.style = `transform:translateX(-${bttnsK * 100}%)`;
//     }
// });

// let num = 0;
// setInterval(function() {
//     bgs.style = `transform:translateX(-${num * 100}%)`;
//     num++
//     if(num >= 8) {
//         num = 0;
//     };
// }, 5000);


const firstTag = document.querySelector(".bgImage");
const secondTag = document.querySelector(".second-content");
const thirdTag = document.querySelector(".third-content");
const tag4 = document.querySelector(".content-4");


const ob = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entriesV, entriesK) {
        if(entriesV.isIntersecting) {
            entriesV.target.classList.add("active");
            observer.unobserve(entriesV.target)
            console.log(entriesV.target);
        }
    });
});

ob.observe(firstTag);
ob.observe(secondTag);
ob.observe(thirdTag);
ob.observe(tag4);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  
  let buttonsName = ["GOLA", "COMONINOZ", "W.STANDARD", "DELICCENT", "OUTDOOR PRODUCTS", "OCEAN PACIFIC", "ORNIDARY HOLIDAY", "FIELD WORKER"];
  const swBullets = document.querySelectorAll(".swiper-pagination-bullet");
  swBullets.forEach(function(swBulletsV, swBulletsK) {
    swBulletsV.innerText = buttonsName[swBulletsK];
  });
  

// let allTagsY = allTag.getBoundingClientRect().y
// let windowY = window.pageYOffset;

// function init() {
//     console.log(allTag.getBoundingClientRect().y)


//     function scrollFun() {
//         allTagsY = allTag.getBoundingClientRect().y
//         console.log(window.pageYOffset);
//         if(window.pageYOffset >= 40){
//             allTag.classList.add("active");
//         }
//     }



//     window.addEventListener("scroll", scrollFun);
// }

// window.addEventListener("load", init);



