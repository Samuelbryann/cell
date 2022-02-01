var h = new Date()
var hora = h.getHours()
var j = new Date()
var r = j.getMinutes()

var atual = document.getElementById("horario")      //mostrar a fuckyng hora
atual.innerHTML = `<p> ${hora}: ${r} </p>`



function notify() {
    const cst = document.getElementById("cell-stats")
    const botmenu = document.getElementById("butt-menu")    //abrir barra de notificação

    if (cst.style.visibility != "visible") {
        cst.style.visibility = "visible"
        botmenu.style.filter = "blur(2px)"
    }
}

function showmenu() {

    const menu = document.getElementById("menu")    //abrir menu
    menu.style.visibility = "hidden"

    if (menu.style.visibility == "hidden") {
        menu.style.visibility = "visible"
    }

}

function back() {

    const menu = document.getElementById("menu")    //voltar do menu para tela inicial
    menu.style.visibility = "visible"

    if (menu.style.visibility == "visible") {
        menu.style.visibility = "hidden"
    }
}

function opemm() {

    const w = document.getElementById("wifi")  //abrir sisten wifi

    if (w.style.display != "flex") {
        w.style.display = "flex"
    }
}

function act(){
    const s1 = document.getElementById("s1")
    const s11 = document.getElementById("s11")      //ativar funcoes da barra de notificação

    if(s1.style.display == "block" ){
        s1.style.display = "none"
        s11.style.display = "block"
    }

}

function home(){
    const mn = document.getElementById("menu")
    const cs = document.getElementById("cell-stats")
    const botmenu = document.getElementById("butt-menu")
    const wi = document.getElementById("wifi")


    mn.style.visibility = "hidden"
    cs.style.visibility = "hidden"
    botmenu.style.filter = "none"
    wi.style.display = "none"



}



setTimeout(() => {

    const newstate = document.getElementById("newstate")
    newstate.style.opacity = "1"

}, 2000);

