setInterval(() => {
    SetClock()
}, 1000)


function SetClock() {
    let SecondsDegree = 180 + (new Date().getSeconds() / 60) * 360
    let MinutesDegree = 180 + (new Date().getMinutes() / 60) * 360
    let HoursDegree = (180 + (new Date().getHours() / 12) * 360) + MinutesDegree /60

    document.querySelector(".second").style.setProperty("--second-deg",SecondsDegree + "deg")
    document.querySelector(".minute").style.setProperty("--minute-deg",MinutesDegree + "deg")
    document.querySelector(".hour").style.setProperty("--hour-deg", HoursDegree + "deg")
    document.querySelector(".clock").style.setProperty("--bg-color", ConvertAngleToColor(SecondsDegree+HoursDegree+MinutesDegree))
}



function ConvertAngleToColor(angle) {
    return `hsl(${angle}, 50%, 50%)`
}