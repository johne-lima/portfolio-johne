const header = document.querySelector("header")

addEventListener("scroll", function() {
    header.classList.toggle ("sticky", scrollY > 120)
})

let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("active")
}

onscroll = () => {
    menu.classList.remove("bx-x")
    navlist.classList.remove("active")
}