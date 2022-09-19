const ctx = document.getElementById("canvas").getContext("2d");
const scene = new Scene();
const keyboard = new Keyboard([0, 0, 0]);

/*
    Lectura de teclas presionadas (resultan de interés las teclas de cursor)
*/
document.onkeydown = (e) => {
    if (e.code == "ArrowLeft") keyboard.arrKeys[0] = -1;
    if (e.code == "ArrowRight") keyboard.arrKeys[0] = 1;
    if (e.code == "ArrowUp") keyboard.arrKeys[1] = -1;
    if (e.code == "ArrowDown") keyboard.arrKeys[1] = 1;
    if (e.code == "Space") keyboard.arrKeys[2] = 1;
}

/*
    Lectura de teclas que NO se encuentran presionadas (resultan de interés las teclas de cursor)
*/
document.onkeyup = (e) => {
    if (e.code == "ArrowLeft") keyboard.arrKeys[0] = 0;
    if (e.code == "ArrowRight") keyboard.arrKeys[0] = 0;
    if (e.code == "ArrowUp") keyboard.arrKeys[1] = 0;
    if (e.code == "ArrowDown") keyboard.arrKeys[1] = 0;
    if (e.code == "Space") keyboard.arrKeys[2] = 0;
}

setInterval(()=> {
    scene.Update(keyboard);
}, 10)