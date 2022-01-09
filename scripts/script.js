//HEADER NAV//
const inicio = document.getElementById("inicio");
const nosotros = document.getElementById("nosotros");
const servicios = document.getElementById("servicios");
const contactanos = document.getElementById("contactanos");

const homewhite = document.querySelector(".white-inicio");
const homeorg = document.querySelector(".orange-left");
const white_left = document.querySelector(".white-left");
const white_right = document.querySelector(".white-right");
const white_top = document.querySelector(".white-top");

const pag_nos = document.querySelector(".nosotros");
const pag_ser = document.querySelector(".servicios");

const nav = document.querySelector(".nav-container");

inicio.addEventListener("click", () =>{
    homewhite.style.animation = "homein 2s normal both";
    homeorg.style.animation = "homeino 2s normal both";
    white_left.style.animation = "wl_left 2s normal both";
    white_right.style.animation = "wr_right 2s normal both";
    white_top.style.animation = "w_top 1.5s normal both";
    nav.style.animation = "navtop 2s normal both";
});
  
nosotros.addEventListener("click", () =>{
    homewhite.style.animation = "homeout 2s normal both";
    homeorg.style.animation = "homeouto 2s normal both";
    white_left.style.animation = "wl_left 2s normal both";
    white_right.style.animation = "wr_left 2s normal both";
    white_top.style.animation = "w_top 1.5s normal both";

    pag_ser.style.animation = "desaparition 1s normal both";
    pag_ser.style.display = "none";

    pag_nos.style.display = "block";
    pag_nos.style.animation = "aparition 2s normal both";

    nav.style.animation = "navbot 2s normal both";
});
  
servicios.addEventListener("click", () =>{
    homewhite.style.animation = "homeout 2s normal both";
    homeorg.style.animation = "homeouto 2s normal both";
    white_left.style.animation = "wl_right 2s normal both";
    white_right.style.animation = "wr_right 2s normal both";
    white_top.style.animation = "w_top 1.5s normal both";

    pag_nos.style.animation = "desaparition 1s normal both";
    pag_nos.style.display = "none";
    
    pag_ser.style.display = "block";
    pag_ser.style.animation = "aparition 2s normal both";

    nav.style.animation = "navbot 2s normal both";
});  
  
contactanos.addEventListener("click", () =>{
    homewhite.style.animation = "homeout 2s normal both";
    homeorg.style.animation = "homeouto 2s normal both";
    white_left.style.animation = "wl_left 2s normal both";
    white_right.style.animation = "wr_right 2s normal both";
    white_top.style.animation = "w_bot 2.5s normal both";

    pag_nos.style.display = "none";

    nav.style.animation = "navbot 2s normal both";
});