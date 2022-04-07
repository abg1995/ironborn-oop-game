class Game {
  constructor(create, draw) {
    this.player = null;
    this.create = create;
    this.draw = draw;
    this.objectArray = [];
    this.obstacleCounter = 0;

    //this.obstacleDelete = obstacleDelete;
  }

  start() {
    //  create and draw player
    this.player = new Player();
    this.player.domElement = this.create("player");
    this.draw(this.player);

    // move obstacle
    let intervalId = setInterval(() => {
      if (this.obstacleCounter === 30) {
        this.obstacle = new Obstacle();
        this.obstacle.domElement = this.create("obstacle");
        console.log(this.obstacle.domElement);
        this.draw(this.obstacle);

        this.objectArray.push(this.obstacle);
        this.obstacleCounter = Math.floor(Math.random() * 30);
      }
      this.objectArray.forEach((element) => {
        if (element.positionY === 0) {
            //removing elemen from array
          this.objectArray.shift();

          element.domElement.remove();
        }
        console.log(this.objectArray.length);


        element.moveDown();
        this.draw(element);
      });
      this.obstacleCounter++;
    }, 50);
  }

  movePlayer(direction) {
    if (direction === "left") {
      this.player.moveLeft();
    } else if (direction === "right") {
      this.player.moveRight();
    }
    this.draw(this.player);
  }
}

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.domElement = null;
  }

  moveLeft() {
      if(this.positionX > 0){
    this.positionX-= 5;
      }
  }

  moveRight() {
    if(this.positionX < 92){

    this.positionX+= 5;
  }
}
}

class Obstacle {
  constructor() {
    // this.eliminator = eliminator
    this.positionX = Math.floor(Math.random() * 80);
    this.positionY = 90;
    this.obstacleHeight = 20;
    this.obstacleWidth = Math.floor(10 + Math.random() * 90);
    this.domElement = null;
  }

  moveDown() {
    this.positionY--;
  }

  //   deleteObstacle(element){
  //     // if(element.positionY === 0){

  //     //     //delete object from array

  //     //     //
  //     // }

  //   }
}

//const myPlayer = new Player();
