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

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// const allTag = document.querySelector(".titleImage");

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
