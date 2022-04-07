


class Game {

    constructor(create, draw){
        this.player = null;
        this.create = create;
        this.draw = draw;
    }

    start(){
        this.player = new Player();
        this.player.domElement = this.create("player");
        this.draw(this.player);
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


//const myPlayer = new Player();
