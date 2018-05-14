var clearBtn = document.getElementById("clear")
var canvas = document.getElementById("canvas");
var slider = document.getElementById("slider");
var on = document.getElementById("on");
var off = document.getElementById("off");
var clickToToggle = document.getElementById("clickToToggle");
var c = canvas.getContext("2d");
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
var mouseX;
var mouseY;
var mobile = false;
var drawOn = false;
var wasOn = false;
var radius = 16;

canvas.height = y;
canvas.width = x;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    toggleDraw();
    mobile = true;
    clickToToggle.classList.toggle("invisible");
}

function toggleDraw(){
    drawOn = !drawOn;
    on.classList.toggle("bold");
    off.classList.toggle("bold");
}

function clear(){
    c.clearRect(0, 0, x, y);
}

function draw(){
    c.beginPath();
    c.strokeStyle = "black";
    c.arc(mouseX, mouseY, radius, 0, 2*Math.PI);
    c.stroke();
}

canvas.addEventListener("click", function(){
    if(!mobile){
        toggleDraw();
    }
})

canvas.addEventListener("ontouchmove", function(e){
    e.preventDefault();
})

document.addEventListener('mousemove', function(mouse){
    if(drawOn){
        mouseX = mouse.x;
        mouseY = mouse.y;    
        draw();
    }
})

document.addEventListener("touchmove", function(touch){
    touch.preventDefault();
    if(drawOn){
        mouseX = touch.touches[0].clientX;
        mouseY = touch.touches[0].clientY;
        draw();
    }
})

clearBtn.addEventListener("click", function(){
    clear();
})

slider.addEventListener("touchstart", function(){
    if(drawOn){
        toggleDraw();
        wasOn = true;
    }
})

slider.addEventListener("touchend", function(){
    if(wasOn){
        wasOn = false;
        toggleDraw();
    }
    radius = slider.value;
})

slider.addEventListener("mouseup", function(){
    radius = slider.value;
})

window.onresize = resize;
function resize(){
    w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    canvas.height = y;
    canvas.width = x;
}