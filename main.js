var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    canvas.addEventListener("mousedown", myMouseDown);
    
    function myMouseDown()
    {
     
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
       

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp()
    {
        mouseEvent = "mouseUp";
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave()
    {
        mouseEvent = "mouseleave";
    }

  
    

        canvas.addEventListener("touchStart", mytouchStart);
        function myTouchStart(){
            lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
            lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();
    
    lastPositionOfTouchX = currentPositionOfTouchX;
    lastPositionOfTouchY = currentPositionOfTouchY;}

        


        mouseEvent = "mouseMove";
        function myMouseMove(e) {
            
        }


        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo (lastPositionOfX, lastPositionOfY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();

lastPositionOfX = currentPositionOfMouseX;
lastPositionOfY = currentPositionOfMouseY;
        }
    
        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
        

     
     canvas.addEventListener("touchMove", mytouchMove);
    function mytouchMove(){
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthOfLine;
ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
ctx.stroke();

lastPositionOfTouchX = currentPositionOfTouchX;
lastPositionOfTouchY = currentPositionOfTouchY;

    }