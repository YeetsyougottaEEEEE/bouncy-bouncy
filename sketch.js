
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

   var ground_options={
       isStatic: true
     }
   
     ground = Bodies.rectangle(200,400,400,20,ground_options);
     World.add(world,ground);

    var object_options={
       restitution: 0.5
   }

    object = Bodies.circle(200,200,50,object_options);
    World.add(world,object);

    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);

    console.log(ground);
    console.log(ground.position.x);
    console.log(ground.position.y);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
    ellipseMode(RADIUS);
    ellipse(object.position.x,object.position.y,50,50);
    

    
}