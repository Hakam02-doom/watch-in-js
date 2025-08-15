function time(){
    const timer = document.getElementById('root');
let now = new Date();
timer.innerHTML=now;
let indiantime = now.toLocaleTimeString()
timer.innerHTML = indiantime
}
setInterval(time,1000)


const timer = document.getElementById('root');
let now = new Date();
timer.innerHTML=now;
let indiantime = now.toLocaleTimeString()
timer.innerHTML = indiantime

timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.alignItems = "center";
timer.style.justifyContent = "center";
timer.style.height = "100vh"