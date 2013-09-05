/* 
  Using canvas to create a bouncing ball
*/
	  
// Variables store information
var boxWidth  = 300;  // Canvas Box Size - Width
var boxHeight = 150;  // Canvas Box Size - Height
	  
var ballRad = 7;     // Ball radius
var ballX = 50;      // Ball Pos - X 
var ballY = 10;      // Ball Pos - Y
var ballVelX = 11;   // Ball Velocity X
var ballVelY = 11;   // Ball Velocity Y
	  
var ctx;	         // Canvas 2D Context (not initialized)
	  
// Initialize
function init(){
  // Get the canvas handler and store it.
  ctx = document.getElementById('canvas').getContext('2d');
  // Set ball color
  ctx.fillStyle = "rgb(255,0,0)"; 
  // Render the canvas
  render();                        
  // Set a interval timer 
  // this calls render function 
  // every 50ms
  setInterval(render, 50);
}
	  
// Render function
//  render function has two parts
//    - Move the ball 
//    - Draw/render the canvas
function render(){
  // Update the ball position
  //
  // Add to the ball position the velocity
  // for both X and Y
  ballX = ballX + ballVelX;  
  ballY = ballY + ballVelY;  
		  
  // Check if the ball is out of bounds (Right side)
  if(ballX  > boxWidth - ballRad){
    ballX = boxWidth - ballRad;  // Make sure the ball does not go out of bounds
    ballVelX *= -1;              // Invert the directtion
  }
  // Check if the ball is out of bounds (Left side)
  if(ballX < ballRad){  
    ballX = ballRad;             // Make sure the ball does not go out of bounds
    ballVelX *= -1;              // Invert the directtion
  }
  // Check if the ball is out of bounds (Bottom side)
  if(ballY > boxHeight - ballRad){
    ballY = boxHeight - ballRad; // Make sure the ball does not go out of bounds
    ballVelY *= -1;              // Invert the directtion
  }
  // Check if the ball is out of bounds (Top side)
  if(ballY < ballRad){
    ballY = ballRad;             // Make sure the ball does not go out of bounds
    ballVelY *= -1;              // Invert the directtion
  }
 
  // Render
  //
  // Clear the canvas 
  ctx.clearRect(0, 0, boxWidth, boxHeight);
  // Begin Drawing
  ctx.beginPath();
  // Draw the border
  ctx.strokeRect(0,0, boxWidth, boxHeight);  
  // Draw the ball
  ctx.arc(ballX, ballY, ballRad, 0, Math.PI*2,true);
  // Fill the ball
  ctx.fill();
}
