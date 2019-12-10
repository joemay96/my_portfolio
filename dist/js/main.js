//Select DOM(Document-Object-Model) Items
const menuBtn = document.querySelector(".menu-btn");//Man kann alles verwenden classes, ids was auch immer
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
//query selector würde in unserem Menü leider nur das erste Element nehmen, daher müssen wir Query selector all verwenden
const navItems = document.querySelectorAll(".nav-item");

//Set initial State Of the Menufeld
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if(!showMenu){
    //Wenn der Menubutton angeklickt wird wollen wir, dass sich das menu öffnet
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach(item => item.classList.add("show")); //Für jedes Item wird also die show Klasse hinzugefügt

    //Set Menu State
    showMenu = true;
  } else {
    //Wir wollen genau das gegenteil machen zu dem oben, da wenn das menu offen ist, wir es schließen wollen
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show")); //Für jedes Item wird also die show Klasse hinzugefügt

    //Set Menu State
    showMenu = false;
  }
}
