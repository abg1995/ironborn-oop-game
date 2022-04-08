class Game {
  constructor(create, draw) {
    this.player = null;
    this.create = create;
    this.draw = draw;
    this.objectArray = [];
    this.obstacleCounter = 0;
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
        //  console.log(this.obstacle.domElement);
        this.draw(this.obstacle);

        this.objectArray.push(this.obstacle);
        this.obstacleCounter = Math.floor(Math.random() * 30);
      }
      this.objectArray.forEach((element) => {
        // if (element.positionY === 0) {
        //   //removing element from array
        //   this.objectArray.shift();
        //   element.domElement.remove();
        // }
        // console.log(this.objectArray.length);
        element.moveDown();
        this.draw(element);
        this.detectCollision(element);
        this.deleteObstacle(element);

      });
      this.obstacleCounter++;
    }, 50);
  }

  movePlayer(direction) {
    if (direction === "left" && this.player.positionX > 0) {
      this.player.moveLeft();
    } else if (direction === "right" && this.player.positionX < 90) {
      this.player.moveRight();
    } 
    this.draw(this.player);
  }

  detectCollision(obstacle) {
    if (
      this.player.positionX < obstacle.positionX + obstacle.width &&
      this.player.positionX + this.player.width > obstacle.positionX &&
      this.player.positionY < obstacle.positionY + obstacle.height &&
      this.player.height + this.player.positionY > obstacle.positionY
    ) {
      this.objectArray.splice(this.objectArray.indexOf(obstacle), 1);
      obstacle.domElement.remove();
      this.gameOver();
    }
  }

  deleteObstacle(obstacle) {
    if (obstacle.positionY === 0) {
      this.objectArray.splice(this.objectArray.indexOf(obstacle), 1);
      obstacle.domElement.remove();
    }
  }

  gameOver() {
    alert("game over :(");
    location.reload();
  }
}

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.domElement = null;
    this.height = 5;
    this.width = 10;
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= 5;
    }
  }

  moveRight() {
    if (this.positionX < 92) {
      this.positionX += 5;
    }
  }
}

class Obstacle {
  constructor() {
    // this.eliminator = eliminator
    this.positionX = Math.floor(Math.random() * 80);
    this.positionY = 95;
    this.height = 5;
    this.width = Math.floor(5 + Math.random() * 10);
    this.domElement = null;
  }

  moveDown() {
    this.positionY--;
  }
}
