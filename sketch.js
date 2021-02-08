var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    canvas = createCanvas(800,600);

    //create 4 different surfaces
    //x,y, width,height
    surface1 = createSprite(0, 600, 200, 40);
    surface1.shapeColor = "red";
    surface1.debug = true;
    surface2 = createSprite(200, 600, 200, 40);
    surface2.shapeColor = "blue";
    surface2.debug = true;
    surface3 = createSprite(400, 600, 200, 40);
    surface3.shapeColor = "green";
    surface3.debug = true;
    surface4 = createSprite(600, 600, 200, 40);
    surface4.shapeColor = "orange";
    surface4.debug = true;


    //create box sprite and give velocity
    box = createSprite(random(20, 750), 200, 60, 30);
    box.shapeColor = "white";
   // box.debug = true;
    box.velocityX = 4;
    box.velocityY = 5;

}

function draw() {

    background(rgb(169,169,169));
    
    edges = createEdgeSprites(); 

    //create edgeSprite
    
    if(box.isTouching(edges)) {
        box.y = box.y-100;
    }

    drawSprites();

    //add condition to check if box touching surface and make it box
    
}
