import $ from "jquery";
import "slick-carousel";
// Toggle Navbar Mobile
// Slick
$(document).ready(()=>{
    $("#slickTab1").slick(
        {
            dots: true,
            slidesToShow:3,
            // autoplay:true

        }
    );
    $("#slickBlog").slick(
        {
            dots: true,
            slidesToShow:3,
            // autoplay:true

        }
    );
})

$("#toggleNavMobile").on("click",function(){
    $("#nav-mobile").toggleClass("hidden");
})

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

            tabTogglers[i].parentElement.classList.remove("border-blue-500","text-blue-500", "border-b", "-mb-px", "opacity-100"); tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");

        }
        e.target.parentElement.classList.add("border-blue-500", "border-b-4","text-blue-500", "-mb-px", "opacity-100");
    });
});

document.getElementById("default-tab").click();

