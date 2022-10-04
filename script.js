let $ = (etiqueta) =>document.querySelector(etiqueta)

let mes = $('.mes-numero')
// let semana = $('.semana-numero')
let dia = $('.dia-numero')
let hora = $('.hora-numero')
let minuto = $('.minuto-numero')
let segundo = $('.segundo-numero')



let año = 2022

setInterval(() => {
    
    let navidad = new Date(año, 11, 25)
    let hoy = new Date()
    
    if (hoy.getFullYear() == año && hoy.getMonth() == 11 && hoy.getDate() >= 25) {
        año += 1
    }

    let navidadMilisegundos = navidad.getTime()
    let hoyMilisegundos = hoy.getTime()
    
    
    
    let tiempoRestante = Math.floor((navidadMilisegundos - hoyMilisegundos) / ((1000 * 60 * 60 * 24) + 1))
    
    if (hoy.getMonth % 2) {
        mes.innerText = Math.floor((tiempoRestante / 31))
        dia.innerText = ( tiempoRestante - (31 * mes.innerText))

    }else{
        mes.innerText = Math.floor((tiempoRestante / 30))
        dia.innerText = ( tiempoRestante - (30 * mes.innerText))
    }
    hora.innerText = (24 - hoy.getHours())
    minuto.innerText = (60 - hoy.getMinutes())
    segundo.innerText = (60 - hoy.getSeconds())
     
}, 1000);




