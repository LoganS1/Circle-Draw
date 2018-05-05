var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
//get size of usable space
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
var mouseX;
var mouseY;
var clearBtn = document.getElementById("clear")
var drawOn = false;
canvas.height = y;
canvas.width = x;

function loop(){
    clear();
    draw();
    requestAnimationFrame(loop);
}

function clear(){
    c.clearRect(0, 0, x, y);
}

function draw(){
    c.beginPath();
    c.fillStyle = "black";
    c.strokeStyle = "black";
    c.arc(mouseX, mouseY, 20, 0, 2*Math.PI);
    c.stroke();
}

canvas.addEventListener("click", function(click){
    drawOn = !drawOn;
})

document.addEventListener('mousemove', function(mouse){
    if(drawOn){
        mouseX = mouse.x;
        mouseY = mouse.y;    
        draw();
    }
})

clearBtn.addEventListener("click", function(click){
    clear();
    drawOn = false;
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

// loop();