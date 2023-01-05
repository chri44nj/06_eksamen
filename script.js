const main_menu = document.querySelector(".main_menu");
const close_menu = document.querySelector(".close_menu");
const open_menu = document.querySelector(".open_menu");
const menu_items = document.querySelectorAll("nav .main_menu li a");

open_menu.addEventListener("click", show);
close_menu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  main_menu.style.display = "flex";
  main_menu.style.top = "0";
}
function close() {
  main_menu.style.top = "-100%";
}
