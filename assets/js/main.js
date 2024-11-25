const displayDate = document.querySelector('.date')
const pDate = document.createElement('div')
pDate.classList.add('child-date')

const displayHour = document.querySelector('.hour')
const pHour = document.createElement('div')
pHour.classList.add('child-hour')

function getDate(){
    const date = new Date().toLocaleDateString()
    pDate.innerHTML = `${date}`
    displayDate.appendChild(pDate)
}

function getHour(){
    const hour = new Date().toLocaleTimeString()
    const splitHour = hour.split(':')
    pHour.innerHTML = `<div class="hour-1"><p id="hour1">${splitHour[0]}</p></div><div class="point">:</div><div class="hour-2"><p id="hour2">${splitHour[1]}</p></div><div class="point">:</div><div class="hour-3"><p id="hour3">${splitHour[2]}</p></div>`
    displayHour.appendChild(pHour)
}

let alarm
let audio
function getTime(inputAlarm){
    inputAlarm ? alarm = inputAlarm : false
    const hour = new Date().toLocaleTimeString()
    if(hour === alarm){        
        const modal = document.getElementById('dialog-box').showModal()
        open(alarm)
        const p = document.createElement('p')
        p.classList.add('p-alarm')
        const node = document.querySelector('.result')    
        audio = document.createElement('audio')
        audio.src = '../audio/bedside-clock-alarm-95792.mp3'
        node.appendChild(audio)
        audio.play()
        audio.loop = true
        p.innerHTML = (`Alarme das ${alarm} finalizado`)    
        node.appendChild(p)
        }
    return true
}

function stopAlarm(){
    document.getElementById('dialog-box').close()
    audio.pause()
}

function open(alarm){
    const modal = document.querySelector('.container-modal')
    modal.innerHTML = `<h1>Atenção! Já são ${alarm}</h1>`
}

function getAlarm(){
    const hour = new Date().toLocaleTimeString()
    const inputAlarm = document.querySelector('#input-alarm').value
    const response = getTime(inputAlarm)
    response ? console.log(`alarme definido às ${inputAlarm}`) : false
}

setInterval(getDate, 1000)
setInterval(getHour, 1000)
setInterval(getTime, 1000)