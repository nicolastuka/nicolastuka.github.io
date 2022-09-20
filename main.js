const ctx = document.getElementById("canvas").getContext("2d");
const scene = new Scene();
let keyboard = [0, 0];

/*
    Lectura de teclas presionadas (resultan de interés las teclas de cursor)
*/
document.onkeydown = (e) => {
    if (e.code == "ArrowLeft") keyboard[0] = -1;
    if (e.code == "ArrowRight") keyboard[0] = 1;
    if (e.code == "ArrowUp") keyboard[1] = -1;
    if (e.code == "ArrowDown") keyboard[1] = 1;
}

/*
    Lectura de teclas que NO se encuentran presionadas (resultan de interés las teclas de cursor)
*/
document.onkeyup = (e) => {
    if (e.code == "ArrowLeft") keyboard[0] = 0;
    if (e.code == "ArrowRight") keyboard[0] = 0;
    if (e.code == "ArrowUp") keyboard[1] = 0;
    if (e.code == "ArrowDown") keyboard[1] = 0;
}

setInterval(()=> {
    scene.Update(keyboard);
}, 10)