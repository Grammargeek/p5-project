//essential vars
var imgBox;
var imageSprite;
var collectibles;
var score = 0;
var scoreTwo = 0;


//setup
function setup() {
  //creates canvas
  createCanvas(1310, 704);
  //creates obstacle sprite
  var imgBox = loadImage("pusheensibling.png");
  box = createSprite(300, 400);
  box.addImage(imgBox);
  //creates pusheen on scooter
  var img = loadImage("gato_skooter.png");
  imageSprite = createSprite(300, 300);
  imageSprite.addImage(img);
  //makes new group for collectibles
  collectibles = new Group();
  //makes collectibles
  for (var i = 0; i <100; i++) {
    var dot = createSprite(random(0, width), random(0, height));
    dot.addAnimation("normal","donut.png");
    collectibles.add(dot);
    document.body.style.backgroundImage="url('http://data.whicdn.com/images/80800224/original.jpg')";
     
     wallTop = createSprite(width/2, -30/2, width, 30);
     wallBottom = createSprite(width/2, height+30/2, width, 30);
     
  }
}




function draw() {

  function collect(collector, collected) {
    collected.remove();
    score++;
  }
    imageSprite.overlap(collectibles, collect);
    
     function collecting(collector, collected) {
    collected.remove();
    scoreTwo++;
  }
  box.overlap(collectibles, collecting);
   
  
//Pusheen controls

  if (keyDown(37)) {
    imageSprite.position.x -= 7;
  }
  if (keyDown(38)) {
    imageSprite.position.y -= 7;
  }
  if (keyDown(39)) {
    imageSprite.position.x += 7;
  }
  if (keyDown(40)) {
    imageSprite.position.y += 7;
  }
  //Pusheen sibling co

  if (keyDown(65)) {
    box.position.x -= 5;
  }
  if (keyDown(87)) {
    box.position.y -= 5;
  }
  if (keyDown(68)) {
    box.position.x += 5;
  }
  if (keyDown(83)) {
    box.position.y += 5;
  }


  background(255, 255, 255);
  drawSprites();
  fill(color(65));
  //For yellow text: 255, 204, 100
  textSize(32);
  text("Player 1: Donuts Eaten: " + score, 10, 30);
  
  
  fill(color(65));
  //For yellow text: 255, 204, 100
  textSize(32);
  text("Player 2: Donuts Eaten: " + scoreTwo, 800, 30);
  
  
 
  
  
  
  imageSprite.collide(box);
  imageSprite.bounce(wallTop);
  imageSprite.bounce(wallBottom);
  
  
  box.bounce(wallTop);
  box.bounce(wallBottom);
}




function mousePressed() {
  var dots = createSprite(mouseX, mouseY, 30, 30);
  dots.velocity.x = random(-5, 5);
  dots.velocity.y = random(-5, 5);




}