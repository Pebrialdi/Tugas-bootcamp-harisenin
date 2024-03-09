const menuIcon = document.getElementById("menu-toggle")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () =>{
    menuList.classList.toggle("hidden");
});