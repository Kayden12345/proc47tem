var personWalking;
var person;

function preload(){
    personWalking = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
    createCanvas(700,400)
   person = createSprite(80,100,20,20)
   person.addAnimation("moving", personWalking)
    
}

function draw(){
    
}   

