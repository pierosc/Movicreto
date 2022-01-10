//HEADER NAV//
let begin = "inicio";

const inicio = document.getElementById("inicio");
const nosotros = document.getElementById("nosotros");
const servicios = document.getElementById("servicios");
const contactanos = document.getElementById("contactanos");

const homewhite = document.querySelector(".white-inicio");
const homeorg = document.querySelector(".orange-left");
const white_left = document.querySelector(".white-left");
const white_right = document.querySelector(".white-right");
const white_top = document.querySelector(".white-right-end");

const logo = document.querySelector(".cover-logo");
const logo_name = document.querySelector(".cover-logo-name");
const logoend = document.querySelector(".logo-end");

const pag_nos = document.querySelector(".nosotros");
const pag_ser = document.querySelector(".servicios");
const pag_cont = document.querySelector(".contactanos");

const nav = document.querySelector(".nav-container");

white_left.style.animation = "wl_left 0s normal both";
white_top.style.animation = "wr_right 0s normal both";
white_right.style.animation = "wr_right 0s normal both";
logoend.style.animation = "logo-end-out 0s normal both"


inicio.addEventListener("click", () =>{
    homewhite.style.animation = "homein 2s normal both";
    homeorg.style.animation = "homeino 2s normal both";
    white_left.style.animation = "wl_left 2s normal both";
    white_right.style.animation = "wr_right 2s normal both";
    white_top.style.animation = "wr_right 2s normal both";

    logo.style.animation = "logoin 1.8s normal both";
    logo_name.style.animation = "logo-namein 1.8s normal both";
    logoend.style.animation = "logo-end-out 1.5s normal both"

    pag_nos.style.animation = "desaparition 1s normal both";


    pag_ser.style.animation = "desaparition 1s normal both";


    pag_cont.style.animation = "desaparition 1s normal both";


    nav.style.animation = "navtop 2s normal both";
    begin == "inicio";
});
  
nosotros.addEventListener("click", () =>{
    
    homewhite.style.animation = "homeout 2s normal both";
    homeorg.style.animation = "homeouto 2s normal both";

    white_left.style.animation = "wl_left 2s normal both";

    white_top.style.animation = "wr_right 2s normal both";

    white_right.style.animation = "wr_left 2s normal both";

    logo.style.animation = "logoout 1.5s normal both";
    logo_name.style.animation = "logo-nameout 1.5s normal both";
    logoend.style.animation = "logo-end-out 1.5s normal both"

    pag_ser.style.animation = "desaparition 1s normal both";


    pag_cont.style.animation = "desaparition 1s normal both";


    pag_nos.style.display = "block";
    pag_nos.style.animation = "aparition 2s normal both";

    nav.style.animation = "navbot 2s normal both";
    begin == "nosotros";
});
  
servicios.addEventListener("click", () =>{
    
    homewhite.style.animation = "homeout 2s normal both";
    homeorg.style.animation = "homeouto 2s normal both";
    white_left.style.animation = "wl_right 2s normal both";
    white_right.style.animation = "wr_right 2s normal both";
    white_top.style.animation = "wr_right 2s normal both";

    logo.style.animation = "logoout 1.5s normal both";
    logo_name.style.animation = "logo-nameout 1.5s normal both";
    logoend.style.animation = "logo-end-out 1.5s normal both"

    pag_nos.style.animation = "desaparition 1s normal both";
    
    
    pag_cont.style.animation = "desaparition 1s normal both";
    

    pag_ser.style.display = "block";
    pag_ser.style.animation = "aparition 2s normal both";

    nav.style.animation = "navbot 2s normal both";
    begin == "servicios";
});  
  
contactanos.addEventListener("click", () =>{
    
    homewhite.style.animation = "homeout 2s normal both";
    homeorg.style.animation = "homeouto 2s normal both";
    white_left.style.animation = "wl_left 2s normal both";
    white_right.style.animation = "wr_right 2s normal both";
    white_top.style.animation = "wr_left 2s normal both";


    logo.style.animation = "logoout 1.5s normal both";
    logo_name.style.animation = "logo-nameout 1.5s normal both";
    logoend.style.animation = "logo-end-in 3s 0.5s normal both"

    pag_nos.style.animation = "desaparition 1s normal both";


    pag_ser.style.animation = "desaparition 1s normal both";


    pag_cont.style.animation = "aparition 2.5s normal both";
    pag_cont.style.display = "flex";

    nav.style.animation = "navbot 2s normal both";
    begin == "contactanos";
});