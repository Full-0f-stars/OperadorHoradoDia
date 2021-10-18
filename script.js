
function carregar(){
var msg = window.document.getElementById('msg')
var fotos = window.document.getElementById('imagem')
var data = new Date();
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

if (hora >= 0 && hora < 12 ) {
    //bom dia
    fotos.src = "fotomanha.png"
    document.body.style.background = '#BC8F8F'
} else if (hora >= 12 && hora <= 18 ) {
    //boa tarde
    fotos.src = "fototade.png"
    document.body.style.background = '#D2691E'
} else { 
    //boa noite
    fotos.src = "fotonoite.png.png"
    document.body.style.background = '#000080'
} 
}