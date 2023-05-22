// SELECT START ELEMENT
const options = document.querySelector(".options");

// SELECT BUTTONS
const computerBtn = document.querySelector(".computer");
const friendBtn = document.querySelector(".friend");
const xBtn = document.querySelector(".x");
const oBtn = document.querySelector(".o");
const playBtn = document.querySelector(".play");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const fondo= document.querySelector(".cv");


// GAME OVER ELEMENT
const gameOverElement = document.querySelector(".gameover");

const player = new Object;
let OPPONENT;


oBtn.addEventListener("click", function(){
    player.man = "O";
    player.computer = "X";
    player.friend = "X";

    switchActive(xBtn, oBtn);
});

xBtn.addEventListener("click", function(){
    player.man = "X";
    player.computer = "O";
    player.friend = "O";

    switchActive(oBtn, xBtn);
});
 
computerBtn.addEventListener("click", function(){
    OPPONENT = "computer";
    switchActive(friendBtn, computerBtn);
    
});

friendBtn.addEventListener("click", function(){
    OPPONENT = "friend";
    switchActive(computerBtn, friendBtn);
});

playBtn.addEventListener("click", function(){
   
    if( !OPPONENT){
        computerBtn.style.backgroundColor = "red";
        computerBtn.style.color = "white";
        friendBtn.style.backgroundColor = "red";
        friendBtn.style.color = "white";
        return;
    }

    if( !player.man ){
        oBtn.style.backgroundColor = "red";
        oBtn.style.color = "white";
        xBtn.style.backgroundColor = "red";
        xBtn.style.color = "white";
        return;
    }
    
    init(player, OPPONENT);

    options.classList.add("hide");
    //window.location.href = "PantallaTablero.html";
});

function switchActive(off, on){
    off.classList.remove("active");
    on.classList.add("active");

    off.style.backgroundColor = "";
    off.style.color = "";
    on.style.backgroundColor = "#A6ACFC";
    on.style.color = "#FFFFFF";

}
t1.addEventListener("click", function(){
    fondo.style.backgroundImage = "url('../Tableros/imagenes/t1.png')";
    //alert("Este es un mensaje emergente.");
});

t2.addEventListener("click", function(){
    fondo.style.backgroundImage = "url('../Tableros/imagenes/t2.png')";
    //alert("Este es un mensaje emergente.");
});

t3.addEventListener("click", function(){
    fondo.style.backgroundImage = "url('../Tableros/imagenes/t3.png')";
    //alert("Este es un mensaje emergente.");
});
