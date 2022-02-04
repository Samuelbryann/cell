setTimeout(() => {
    const newstate = document.getElementById("newstate")        //animação float
    newstate.style.opacity = "1"

}, 2000);



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
    const bolcam = document.getElementById("bol-cam")


    if (menu.style.visibility == "visible") {
        menu.style.visibility = "hidden"
        bolcam.style.animationName = "ooo"
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

    const you = document.getElementById("you")
    const maps = document.getElementById("maps")
    const permission = document.getElementById("permission")
    const areacam = document.getElementById("area-camera")
    const bolcam = document.getElementById("bol-cam")

    mn.style.visibility = "hidden"
    cs.style.visibility = "hidden"
    botmenu.style.filter = "none"
    wi.style.display = "none"

    you.style.display = "none"
    maps.style.display = "none"
    permission.style.display = "none"
    areacam.style.display = "none"
    bolcam.style.animationName = "ooo"

}

function cam(){
    const permission = document.getElementById("permission")                    //aba de permissão para abrir camera
    permission.style.display = "flex"

}

function oncamera(){

    navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
        
        const areacam = document.getElementById("area-camera")
        areacam.style.display = "block"   
                                                                                    //abrir e mostrar camera
        const playcam = document.getElementById("displaycam")
        playcam.srcObject = stream                                        

    }).catch(error=>{console.log(error)})

    setTimeout(() => {

        const bolcam = document.getElementById("bol-cam")
        bolcam.style.animationName = "bolcam"

    }, 7000);

   
}

function negarcam(){
    const permission = document.getElementById("permission")
    permission.style.display = "none"                                               
}


function onmaps(){
    const maps = document.getElementById("maps")
    maps.style.display = "block"
}
function onyou(){
    const you = document.getElementById("you")
    you.style.display = "block"
}

function backcell(){
    const display = document.getElementById("display")
    display.style.backgroundImage = "url(assets/wall.jpg)"
}
function backcell2(){
    const display = document.getElementById("display")
    display.style.backgroundImage = "url(assets/fund2.jpg)"             //background do celular
}
function backcell3(){
    const display = document.getElementById("display")
    display.style.backgroundImage = "url(assets/wall2.jpg)"
}


function oncell(){
    const float = document.getElementById("float")
    const ondisplay = document.getElementById("ondisplay")
    const notify = document.getElementById("notify")                    //botao zuado de ligar cell

    
    if(float.style.right != "25%"){
        float.style.right = "25%"
        ondisplay.style.display = "none"
        notify.style.display = "flex"
    } else{
        float.style.right = "90%"
        ondisplay.style.display = "block"
        notify.style.display = "none"
    }
}



function backtale(){
    document.body.style.backgroundImage = "url(assets/tale/back1.jpg)"

    const post = document.getElementById("newstate")
    post.style.borderColor = "#ecf0f1"

    const secbackcell = document.getElementById("backgrounds-cell")
    secbackcell.style.borderColor = "#c9c9c9"

    const on = document.getElementById("on")
    on.style.borderColor = "#c9c9c9"
}
function backtale2(){
    document.body.style.backgroundImage = "url(assets/tale/back2.jpg)"

    const post = document.getElementById("newstate")
    post.style.borderColor = "#c9d6dc"

    const secbackcell = document.getElementById("backgrounds-cell")
    secbackcell.style.borderColor = "#000"

    const on = document.getElementById("on")
    on.style.borderColor = "#383838be"
}
function backtale3(){                                                                       //background da tela 
    document.body.style.backgroundImage = "url(assets/tale/back3.png)"

    const post = document.getElementById("newstate")
    post.style.borderColor = "#1ac7ff"

    const secbackcell = document.getElementById("backgrounds-cell")
    secbackcell.style.borderColor = "#1ac7ff"

    const on = document.getElementById("on")
    on.style.borderColor = "#1ac7ff"


}
function backtale4(){
    document.body.style.backgroundImage = "url(assets/fund3.jpg)"

    const post = document.getElementById("newstate")
    post.style.borderColor = "#fb9b2a"

    const secbackcell = document.getElementById("backgrounds-cell")
    secbackcell.style.borderColor = "#070707"

    const on = document.getElementById("on")
    on.style.borderColor = "#383838be"
}




