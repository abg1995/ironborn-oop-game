


class Game {

    constructor(create, draw){
        this.player = null;
        this.create = create;
        this.draw = draw;
        this.objectArray = [];

    }

    start(){
        //  create and draw player
        this.player = new Player();
        this.player.domElement = this.create("player");
        this.draw(this.player);
           
          // move obstacle
        setInterval(code, delay)




          let objectInterval = setInterval(() => {
            let objectNumber = 0;
            this.obstacle = new Obstacle();
            this.obstacle.domElement = this.create("obstacle");
            this.draw(this.obstacle);
            //we add every obstacle to obstacle array
             this.objectArray.push(this.obstacle);
         },3000)

        let intervalId = setInterval(() => {
            this.objectArray.forEach(element => {
            element.moveDown();
            this.draw(element);
            })
        },100)
    }

    movePlayer(direction){
            if(direction === "left"){
                this.player.moveLeft();
            }else if (direction === "right"){
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
        this.positionX--;
        console.log(`moving left ...${this.positionX}`)
    }

    moveRight() {
        this.positionX++;
        console.log(`moving right ...${this.positionX}`)

    }
    
}

class Obstacle {
    constructor(){
       // this.eliminator = eliminator
        this.positionX = 50;
        this.positionY = 90;
        this.domElement = null;
    }

    moveDown(){
        this.positionY--;

    }

    

}

//const myPlayer = new Player();
