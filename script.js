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

const btn_port1 = document.querySelector(".btn_port1");
const btn_port2 = document.querySelector(".btn_port2");
const btn_port3 = document.querySelector(".btn_port3");
const btn_port4 = document.querySelector(".btn_port4");
const btn_port5 = document.querySelector(".btn_port5");
const btn_port6 = document.querySelector(".btn_port6");
const btn_port7 = document.querySelector(".btn_port7");

const indhold1 = document.querySelector(".opg_beskrivelse1");
const indhold2 = document.querySelector(".opg_beskrivelse2");
const indhold3 = document.querySelector(".opg_beskrivelse3");
const indhold4 = document.querySelector(".opg_beskrivelse4");
const indhold5 = document.querySelector(".opg_beskrivelse5");
const indhold6 = document.querySelector(".opg_beskrivelse6");
const indhold7 = document.querySelector(".opg_beskrivelse7");

//functions
function toggleOpg1() {
  console.log("toggleOpg1");
  //   // Her har jeg lavet en en toggle med class fold_ud som er stylingen af tekstboks når man trykker på knappen
  indhold1.classList.toggle("fold_ud");
  btn_port1.classList.toggle("btn_pushed");
  //   // Dette er til hvis jeg vælger at have et lille plus eller hvis jeg ønsker at overskrive tekst når den er foldet ud
  //   let opgShown = indhold.classList.contains("fold_ud");
  //   // if/ else til overskrivning hvis ønsket
  //   //   if (opgShown) {
  //   //     // hvis class opg.beskrivelse(const indhold) har class fold_ud, sker if
  //   //     btn_port.textContent = "Luk";
  //   //   } else {
  //   //     // hvis IKKE class opg.beskrivelse(const indhold) har class fold_ud, sker else
  //   //     btn_port.textContent = "Åben";
  //   //   }
}

function toggleOpg2() {
  console.log("toggleOpg2");
  indhold2.classList.toggle("fold_ud");
  btn_port2.classList.toggle("btn_pushed");
}
function toggleOpg3() {
  console.log("toggleOpg3");
  indhold3.classList.toggle("fold_ud");
  btn_port3.classList.toggle("btn_pushed");
}
function toggleOpg4() {
  console.log("toggleOpg4");
  indhold4.classList.toggle("fold_ud");
  btn_port4.classList.toggle("btn_pushed");
}
function toggleOpg5() {
  console.log("toggleOpg5");
  indhold5.classList.toggle("fold_ud");
  btn_port5.classList.toggle("btn_pushed");
}
function toggleOpg6() {
  console.log("toggleOpg6");
  indhold6.classList.toggle("fold_ud");
  btn_port6.classList.toggle("btn_pushed");
}
function toggleOpg7() {
  console.log("toggleOpg7");
  indhold7.classList.toggle("fold_ud");
  btn_port7.classList.toggle("btn_pushed");
}

/* click event som sætter function i gang  */
btn_port1.addEventListener("click", toggleOpg1);
btn_port2.addEventListener("click", toggleOpg2);
btn_port3.addEventListener("click", toggleOpg3);
btn_port4.addEventListener("click", toggleOpg4);
btn_port5.addEventListener("click", toggleOpg5);
btn_port6.addEventListener("click", toggleOpg6);
btn_port7.addEventListener("click", toggleOpg7);
