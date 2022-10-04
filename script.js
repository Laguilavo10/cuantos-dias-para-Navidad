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
let navidad = new Date(año, 11, 25)

setInterval(() => {
    
    let hoy = new Date()
    
    if (hoy === navidad){
        año += 1
        navidad = new Date(año, 11, 25) 
    }

    mes.innerText = (navidad.getMonth() - hoy.getMonth())
    dia.innerText = (navidad.getDate() - hoy.getDate())
    hora.innerText = Math.abs((navidad.getHours() - hoy.getHours()))
    minuto.innerText = (60 - hoy.getMinutes())
    segundo.innerText = (60 - hoy.getSeconds())
}, 1000);







// setInterval(() => {
//     mesInicializador += 1
//     mes.innerText = mesInicializador
//     console.log(mes);
// }, 1);


// setInterval(() => {
//     let navidad = Date.parse("2022 12 24")
//     let tiempoActual = Date.now()
//     let tiempoParaNavidad = (navidad - tiempoActual)
//     console.log({
//         tiempoParaNavidad
//         });
    
// }, 1000);

