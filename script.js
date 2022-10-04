let $ = (etiqueta) =>document.querySelector(etiqueta)

let mes = $('.mes-numero')
// let semana = $('.semana-numero')
let dia = $('.dia-numero')
let hora = $('.hora-numero')
let minuto = $('.minuto-numero')
let segundo = $('.segundo-numero')


mesInicializador = 0
diaInicializador = 0
horaInicializador = 0
minutoInicializador = 0
segundoInicializador = 0

let año = 2022



let navidad = new Date(2022, 11, 25)

setInterval(() => {

    let hoy = new Date()
    
    
    let navidadMilisegundos = navidad.getTime()
    let hoyMilisegundos = hoy.getTime()
    
    
    
    let tiempoRestante = Math.floor((navidadMilisegundos - hoyMilisegundos) / ((1000 * 60 * 60 * 24) + 1))
    
    
    mes.innerText = Math.floor((tiempoRestante / 30))
    dia.innerText = ( tiempoRestante - (30 * mes.innerText))
    hora.innerText = (24 - hoy.getHours())
    minuto.innerText = (60 - hoy.getMinutes())
    segundo.innerText = (60 - hoy.getSeconds())
     
}, 1000);




