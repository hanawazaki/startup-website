import { addClass, removeClass } from "./utility.js";

// toggler
const toggler = document.getElementById("menu-toggler")

toggler.addEventListener("click", function () {
  const menu = document.getElementById("menu")

  if (menu.className.indexOf("opacity-0") > -1) {
    addClass(toggler, "fixed top-0 right-0")
    removeClass(toggler, "relative")
    addClass(menu, "opacity-100 z-30")
    removeClass(menu, "opacity-0 invisible")
  } else {
    removeClass(toggler, "fixed top-0 right-0")
    addClass(toggler, "relative")
    removeClass(menu, "opacity-100 z-30")
    addClass(menu, "opacity-0 invisible")
  }
})