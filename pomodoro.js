var myTime = 25 * 60 
var interval 
var time = document.getElementById("time")

function start() {
   interval = setInterval(countDown, 1000)
} 

function stop() {
    clearInterval(interval)
}

function restart() {
    myTime = 25 * 60
    var minute = Math.floor(myTime / 60) //dakika
    var seconds = myTime - minute * 60  //saniye
    time.innerHTML = `${minute}:${seconds}`
    clearInterval(interval)
}

function mola() {
    myTime = 5 * 60
    var minute = Math.floor(myTime / 60) //dakika
    var seconds = myTime - minute * 60  //saniye
    time.innerHTML = `${minute}:${seconds}`
    clearInterval(interval)
}

function countDown() {
    myTime -= 1
    var minute = Math.floor(myTime / 60) //dakika
    var seconds = myTime - minute * 60  //saniye
    time.innerHTML = `${minute}:${seconds}`
}