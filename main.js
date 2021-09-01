canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

car2_width = 90;
car2_height = 180;

background_image = "parkingLot.jpg";
car2_image = "car2.png";

car2_x = 100;
car2_y = 100;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

	car2_imgTag = new Image();
    car2_imgTag.onload = uploadgreencar;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
 ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(car2_y >=0)
    {
        car2_y -=10;
        console.log("When up arrow is pressed = " + car2_x + " - " +car2_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
    if(car2_y <=500)
    {
        car2_y +=10;
        console.log("When down arrow is pressed = " + car2_x + " - " +car2_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
    if(car2_x >=0)
    {
        car2_x -=10;
        console.log("When left arrow is pressed = " + car2_Y + " - " +car2_x)
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
    if(car2_x <=700)
    {
        car2_x +=10;
        console.log("When right arrow is pressed = " + car2_y + " - " +car2_x)
        uploadBackground();
        uploadgreencar();
    }
}