canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.rect(150, 143, 800, 400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 10;
ctx.arc(480, 275, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.arc(540, 275, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.arc(600, 275, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 10;
ctx.arc(510, 325, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.arc(570, 325, 40, 0, 2 * Math.PI);
ctx.stroke();