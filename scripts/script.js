//HEADER NAV//
const inicio = document.getElementById("inicio");
const nosotros = document.getElementById("nosotros");
const servicios = document.getElementById("servicios");
const contactanos = document.getElementById("contactanos");

const white_left = document.querySelector(".white-left");
const white_right = document.querySelector(".white-right");

inicio.addEventListener("click", () =>{
    let scrollpos = document.documentElement.scrollTop;
    var inicioabout = scrollpos + aboutsection.getBoundingClientRect().top - 69;
    scroll(0,inicioabout);
});
  
nosotros.addEventListener("click", () =>{
    white_left.style.animation = "moveleftw 2s normal both";
    white_right.style.animation = "wr_left 2s normal both";
});
  
servicios.addEventListener("click", () =>{
    white_left.style.animation = "moverightw 2s normal both";
    white_right.style.animation = "wr_right 2s normal both";
});  
  
contactanos.addEventListener("click", () =>{
    let scrollpos = document.documentElement.scrollTop;
    var iniciosocial = scrollpos + socialsection.getBoundingClientRect().top - 69;
    scroll(0, iniciosocial);
});