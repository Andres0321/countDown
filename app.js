const container = document.querySelector('.container')
const btnIniciar = document.querySelector('.iniciar')
const btnPausar = document.querySelector('.pausar')
const btnDetener= document.querySelector('.detener')
const nHoras = document.querySelector('#horas-p')
const nMinutos = document.querySelector('#minutos-p')    
const nSegundos = document.querySelector('#segundos-p')
const inputsCantidad = document.querySelectorAll('.cantidad')
let horas = 0;
let minutos = 0;
let segundos = 0;
var cuenta
var on = false

tiempoInicial()

inputsCantidad.forEach((cantidad)=>{
  cantidad.addEventListener('input', (e) =>{
   
   let valor = e.target.value
   
    if(e.target.id == 'cant-horas'){
      horas = valor
      actualizarHoras(horas)
    }else if(e.target.id == 'cant-minutos'){
      minutos = valor
      actualizarMinutos(minutos)
    }else  if(e.target.id == 'cant-segundos'){
      segundos = valor
      actualizarSegundos(segundos)
    }
  })
})


function tiempoInicial(){
  nHoras.textContent = formatear(horas)
  nMinutos.textContent = formatear(minutos)
  nSegundos.textContent = formatear(segundos)
}

btnIniciar.addEventListener('click', ()=>{

  if(on == false){
    if(horas > 0 || minutos > 0 || segundos > 0){
      timer()
      on = true
    }else{
      alert('Debe establecer el tiempo antes de iniciar')
    }
    

  }
 
})

btnPausar.addEventListener('click', ()=>{
  clearInterval(cuenta)
  on = false
})

btnDetener.addEventListener('click', ()=>{
  clearInterval(cuenta)
  on = false
  horas = 0
  minutos = 0
  segundos = 0
  window.location.href ='file:///Users/andresmansilla/Documents/PRACTICAS/DOM/CUENTA%20REGRESIVA/index.html'
})
    

function timer(){

        cuenta = setInterval(() => {
        segundos--
        actualizarSegundos(segundos)
       
        if(segundos == -1){
          minutos--
          actualizarMinutos(minutos)

          segundos = 59
          actualizarSegundos(segundos)

          if(minutos == -1){
            horas--
            actualizarHoras(horas)

            minutos = 59
            actualizarMinutos(minutos)
          }
       
        }

        if(horas == 0 && minutos == 0 && segundos == 0){
          clearInterval(cuenta)
          container.classList.add('fin')
          on = false
          window.location.href= 'file:///Users/andresmansilla/Documents/PRACTICAS/DOM/CUENTA%20REGRESIVA/index.html'
        }
       
      }, 1000);
    }

  

function actualizarSegundos(segundos){
    nSegundos.textContent = formatear(segundos)   
}

function actualizarMinutos(minutos){
  nMinutos.textContent = formatear(minutos)   
}

function actualizarHoras(horas){
  nHoras.textContent = formatear(horas)   
}



function formatear(tiempo){
  if (tiempo < 10){
     return tiempo = `0${tiempo}`
  }else{
    return tiempo
  }
}