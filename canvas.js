// The Rectangle
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#3aa66c";
ctx.fillRect(29,0,372,450);


// the triangle
let canvasElement = document.getElementById("myCanvas");
let context = canvasElement.getContext("2d");
context.beginPath();
// Decides roght side of triangle Base
context.moveTo(285, 450);
// Decides left side of triangle Base
context.lineTo(30, 450);
// Decides height of Triangle
context.lineTo(150, 390);

context.closePath();
 
// the outline for triangle
context.lineWidth = 1;
context.strokeStyle = 'white';
context.stroke();

// the fill color
context.fillStyle = "white";
context.fill();


// Writing Text on Canvas
ctx.font = "900 Italic 40px Playfair";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Fresh Mart", canvas.width/2, canvas.height/10); 

ctx.font = "20px Playfair";
ctx.fillText('Lorem Ipsum Dolor Sit Amet', 155 ,90);
ctx.fillText('Lorem Ipsum Dolor Sit Amet', 155 ,105);
ctx.fillText('Lorem Ipsum Dolor Sit Amet', 155 ,120);
ctx.fillText('Lorem Ipsum Dolor Sit Amet', 155 ,135);
ctx.fillText('Lorem Ipsum Dolor Sit Amet', 155 ,150);
ctx.font = "Italic 20px Playfair";
ctx.fillText('Lorem Ipsum Dolor Sit Amet', 155 ,170);
ctx.fillText('Lorem Ipsum Dolor Sit Amet', 155 ,189);

// For width and Height of Canvas

