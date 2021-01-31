/* Move analog hands according to the time */
const degrees = 6
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

setInterval(() => {
    let today = new Date()
    let hours = today.getHours() * 30
    let minutes = today.getMinutes() * degrees
    let seconds = today.getSeconds() * degrees

    hr.style.transform = `rotateZ(${(hours)+(minutes/12)}deg)`
    mn.style.transform = `rotateZ(${minutes}deg)`
    sc.style.transform = `rotateZ(${seconds}deg)`
});
