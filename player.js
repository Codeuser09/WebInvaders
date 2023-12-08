posx = 400;
let animPosition = 800;
loop = true;
enemPosx = Math.random() * 1000;

drawSquare(posx, 865, 100, 100);

//Player
function left(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    posx = posx - 50;
    drawSquare(posx, 865, 100, 100);
    enemLeft();
}

function right(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    posx = posx + 50;
    drawSquare(posx, 865, 100, 100);
    enemRight();
}

function shoot(){
    sposx = posx;
    animate();
    enemShoot();
}

function animate(){
    animPosition --;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSquare(posx, 865, 100, 100);
    drawSquare(sposx, animPosition, 50, 50);
    requestAnimationFrame(animate);
    enemShoot();

    //Win check
    if(sposx > enemPosx - 100 && sposx < enemPosx + 100 && animPosition < 100 && loop == true){
        document.write("You Win!");
        loop = false;
        
    }
}

//enemy:
loop = true;

drawSquare(enemPosx, 0, 100, 100);

function enemRight(){
    drawSquare(enemPosx, 0, 100, 100);
}

function enemLeft(){
    drawSquare(enemPosx, 0, 100, 100);
}


function enemShoot(){
    drawSquare(enemPosx, 0, 100, 100);
}