import $ from "jquery";
import "slick-carousel";
// Toggle Navbar Mobile
// Slick
$(document).ready(() => {
  $("#slickTab1").slick(
    {
      dots: true,
      slidesToShow: 3,
      infinite: true,
      centerMode: true,
      // autoplay:true
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            centerMode: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,

          }
        },
        {
          breakpoint: 480,

          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }
  );
  $("#slickBlog").slick(
    {
      dots: true,
      slidesToShow: 3,
      // autoplay:true
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        },
        {
          breakpoint: 480,

          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    }
  );
})

$("#toggleNavMobile").on("click", function () {
  $("#nav-mobile").toggleClass("hidden");
})

// SCROLL TO TOP
$("#scrollToTop").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
})

//Get the button
var mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log(document.documentElement)
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// TABS
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {

      tabTogglers[i].parentElement.classList.remove("border-blue-500", "text-blue-500", "border-b", "-mb-px", "opacity-100"); tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");

    }
    e.target.parentElement.classList.add("border-blue-500", "border-b-4", "text-blue-500", "-mb-px", "opacity-100");
  });
});

document.getElementById("default-tab").click();

