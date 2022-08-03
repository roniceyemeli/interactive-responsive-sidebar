const kebabMenu = document.querySelector(".p-right");
const menu = document.querySelector('.dropdown')

kebabMenu.addEventListener("click", ()=> {
    menu.classList.toggle('active')
})