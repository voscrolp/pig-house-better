const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var Background;

function preload(){
    Background = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70,3);
    box2 = new Box(920,320,70,70,3);
    box5 = new Box(625,345,70,70,2);
    box4 = new Box(995,345,70,70,2);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(625,275,70,70,2);
    box6 = new Box(995,275,70,70,2);

    box7 = new Box(700,220,70,70,3);
    box8 = new Box(920,220,70,70,3);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,50,600, PI/2);

    log6 = new Log(810,210,300, PI/2);

    log4 = new Log(625,120,150, PI);
    log5 = new Log(995,120,150, PI);

    pig4 = new Pig(625,0);
    pig5 = new Pig(995,0);

    
    

    bird = new Bird(100,100);

}

function draw(){
    background(Background);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box6.display();
    pig4.display();
    pig5.display();
    box7.display();
    box8.display();
    log6.display();

    bird.display();
}