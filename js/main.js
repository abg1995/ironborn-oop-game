



function creatDomElement(className){
    const board = document.getElementById("board");
    const newElm = document.createElement("div");
    newElm.className = className;

    board.appendChild(newElm);

    return newElm;
}

function drawDomElement(instance){
    console.log("the element to pain is...",instance.positionX)
    console.log("new horizontal position will be... ", instance.positionX);

    instance.domElement.style.left = instance.positionX + "%";
    instance.domElement.style.bottom = instance.positionY + "%";
};

const game = new Game(creatDomElement, drawDomElement);
game.start();


document.addEventListener("keydown", function(event){

    switch(event.key){
        case "ArrowRight":
            game.movePlayer("right")
        break;
        case "ArrowLeft":
            game.movePlayer("left");
        break;
    }
});




//otra forma
//from https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript#:~:text=To%20detect%20the%20arrow%20key,39%20and%20down%20has%2040
// document.onkeydown = function (event){
//     switch(event.keyCode) {
//         case 37:
//             console.log("Left key is pressed.");
//             break;
//          case 38:
//             console.log("Up key is pressed.");
//             break;
//          case 39:
//             console.log("Right key is pressed.");
//             break;
//          case 40:
//             console.log("Down key is pressed.");
//             break;
//     }
// }