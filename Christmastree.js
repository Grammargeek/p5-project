//Buttons and other vars:
//button 1/input 1 is used for the color of the text
var button1 = document.getElementById("button1");
var input1 = document.getElementById("input1");
//"theParagraph" is the text that can change color if button 1 is used.
var theParagraph = document.getElementById("theParagraph");
//button2/input2 is used to change the color of the middle section of the tree. 
var input2 = document.getElementById("input2");
var button2 = document.getElementById("button2");
//button3/input3 is used to change the color of the stump. 
var input3 = document.getElementById("input3");
var button3 = document.getElementById("button3");
//button4/input4 are used to change the color of the top section.
var button4 = document.getElementById("button4");
var input4 = document.getElementById("input4");
//button5/input5 are used to change the color of the bottom section of the tree. 
var button5 = document.getElementById("button5");
var input5 = document.getElementById("input5");
//button6/input6 are used to change the color of the topper.
var button6 = document.getElementById("button6");
var input6 = document.getElementById("input6");
// var dropdown = document.getElementById("dropdown");
//this is used for the topper images
var hasStar = false;

var button7 = document.getElementById("button7");

function setup() {
    createCanvas(1300, 700);

    //sets brown for stump
    var colors = color('brown');
    fill(colors);
    var stump = rect(615, 360, 70, 70);

    //changes color of stump
    button3.addEventListener("click", function() {
        var cc = color(input3.value);
        fill(cc);
        var stump = rect(615, 369, 70, 70);
    });

    //sets color for tree

    var c = color('green');
    fill(c);
      var tri3 = triangle(460, 370, 650, 200, 830, 370);
          var tri2 = triangle(460, 310, 650, 190, 820, 310);
    var tri = triangle(478, 250, 650, 130, 800, 250);

  

    //Changes color for first segment
    button4.addEventListener("click", function() {
        var firstColor = color(input4.value);
        fill(firstColor);
        var tri = triangle(478, 250, 650, 130, 800, 250);
    });

   

    //changes color and draws middle section of the tree. 
    button2.addEventListener("click", function() {
        var c = color(input2.value);
        fill(c);
        // var tri3 = triangle(460, 370, 650, 200, 830, 370);
        var tri2 = triangle(460, 310, 650, 190, 820, 310);
        // var tri= triangle(478, 250, 650, 130, 800, 250);
    });
   // Used to draw and change color of the stump. 
    button5.addEventListener("click", function() {
        var thirdColor = color(input5.value);
        fill(thirdColor);
        var tri3 = triangle(460, 370, 650, 200, 830, 370);
    });
    //sets topper color
    var topperColor = color("silver");
    fill(topperColor);
    // //creates topper
    var topper = ellipse(650, 120, 50, 50);
    button6.addEventListener("click", function() {
        var diffColor = color(input6.value);
        fill(diffColor);
        var topper = ellipse(650, 120, 50, 50);
    });

//changes color of the paragraph text.
button1.addEventListener("click", function() {
    var newColor = input1.value;
    theParagraph.style.color = newColor;
    
    
});
//function for star image
    button7.addEventListener("click", function(){
        var hasStar = true;
        if(hasStar === true){
            var starTopper = loadImage("startopper.png");
            topper = createSprite(300, 400);
            toppper.addImage(starTopper);
            
        }
        
    });
    
//don't put anything below this line, it won't work. 
}
//end of "function setup", you're on your own. 
//Turn back mortal.
//Are you sure you want to be down here?
//You're in the boondocks. 
//Really? You're still here? 
