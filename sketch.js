var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
function setup() {
  createCanvas(400, 400);
b1=new Building()
  b2=new Building()
  b3=new Building()
  b4=new Building()
  b5=new Building()
  b6=new Building()
  b7=new Building()
  b8=new Building()
  b9=new Building()
  b10=new Building()
}

function draw() {
  background(150,mouseX,mouseY);
  text(mouseX+","+mouseY,mouseX,mouseY)
  fill("yellow")
  circle(200,50,50)
 b1.floors=10
  b1.position=0.2
  fill("red")
  b1.display()
  b2.floors=12
  b2.position=1
  fill("green")
  b2.display()
  b3.floors=15
  b3.position=1.8
  fill("grey")
  b3.display()
  b4.floors=14
  b4.position=2.8
  fill("brown")
  b4.display()
  b5.floors=13
  b5.position=3.8
  fill("black")
  b5.display()
  b6.floors=18
  b6.position=4.8
  fill("pink")
  b6.display()
  b7.floors=15
  b7.position=5.8
  fill("ash")
  b7.display()
  b8.floors=19
  b8.position=6.8
  fill("orange")
  b8.display()
  b9.floors=24
  b9.position=7.8
  fill("blue")
  b9.display()
  b10.floors=38
  b10.position=8.8
  fill("green")
  b10.display()
  
}
