// const btn = document.querySelector(".burger_knap");
// const nav = document.querySelector("nav");

// // Lav en function, der hedder toggleMenu()
// function toggleMenu() {
//   console.log("toggleMenu");
//   // 1. Toggle en klasse på nav vha. classList.toggle
//   // 2. Toggle en klasse, der hedder "shown"
//   nav.classList.toggle("shown");
//   // 1. Lav en variabel, der hedder menuShown
//   // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
//   let menuShown = nav.classList.contains("shown");
//   // 1. Lav en if/else sætning => if (...) {...} else {...}
//   // 2. Spørg om menu i if-sætningen => if (menu)
//   if (menuShown) {
//     // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
//     btn.textContent = "Luk";
//   } else {
//     // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
//     btn.textContent = "Menu";
//   }
// }

// /* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
// btn.addEventListener("click", toggleMenu);

// ---------------------Ny burgermenu---------------------------
function MenuClick() {
  document.getElementById("menu_streger").classList.toggle("click");
  document.getElementById("nav").classList.toggle("click");
  document.getElementById("menu-bg").classList.toggle("click-bg");
}

// ----------------------portfolio------------------------

const btn_port = document.querySelector(".btn_port");
const indhold = document.querySelector(".opg_beskrivelse");

//function
function toggleOpg() {
  console.log("toggleOpg");
  // Her har jeg lavet en en toggle med class fold_ud som er stylingen af tekstboks når man trykker på knappen
  indhold.classList.toggle("fold_ud");
  btn_port.classList.toggle("btn_pushed");
  // Dette er til hvis jeg vælger at have et lille plus eller hvis jeg ønsker at overskrive tekst når den er foldet ud
  let opgShown = indhold.classList.contains("fold_ud");
  // if/ else til overskrivning hvis ønsket
  //   if (opgShown) {
  //     // hvis class opg.beskrivelse(const indhold) har class fold_ud, sker if
  //     btn_port.textContent = "Luk";
  //   } else {
  //     // hvis IKKE class opg.beskrivelse(const indhold) har class fold_ud, sker else
  //     btn_port.textContent = "Menu";
  //   }
}

/* click event som sætter function i gang  */
btn_port.addEventListener("click", toggleOpg);
