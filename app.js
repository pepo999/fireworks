const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

let fireworksArr = [];
let fireworksArr2 = [];

const originFirework = Firework.generateRandomStart(myCanvas.width, myCanvas.height);
// console.log(originFirework)

function start() {
    setInterval(() => {
        originFirework.draw(ctx)
        originFirework.changePositionStart();
        // console.log(originFirework.changePositionStart(), xplosionX)
        if (originFirework.y <= originFirework.heightOfExplosion) {
            explosion(fireworksArr);

            explosion(fireworksArr2);

            originFirework.color = 'black';

        }
    }, 10);
}

start()

let darkenUnit = 0.06;

for (let i = 0; i < (Math.random() * 5000); i++) {
    const newFirework = Firework.generateRandom(myCanvas.width, myCanvas.height, originFirework.heightOfExplosion, originFirework.color);
    fireworksArr.push(newFirework);
}

for (let i = 0; i < (Math.random() * 1000); i++) {
    const newFirework = Firework.generateRandom(myCanvas.width, myCanvas.height, originFirework.heightOfExplosion, originFirework.color);
    fireworksArr2.push(newFirework);
}


function explosion(arr) {

    setInterval(() => {
        for (let i = 0; i < arr.length; i++) {
            const firework = arr[i];
            firework.drawXplosion(ctx);
            firework.changePosition();
            // firework.speed -= (Math.random() - Math.random())/5000;
            // firework.direction -= (Math.random() - Math.random()) / 5000;
            //    firework.speed -= (firework.speed / (2000 + (Math.random() * 1000)));
            if (ctx.globalAlpha < 0.05 * Math.random() || firework.alpha <= 0.55) {
                ctx.fillStyle = "rgba(0, 0, 0, 1)";
                ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)

            }
            ctx.globalAlpha = 1;
            darkenUnit = darkenUnit + 0.00002;
        }
    }, 10);
    darkenUnit = 0.06;
}

// function darken1() {
//     setInterval(() => {
//         ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
//         ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
//     }, 10);
// }

function darken() {
    ctx.fillStyle = `rgba(0, 0, 0, ${darkenUnit * 1.3})`;
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
    window.requestAnimationFrame(darken);
}

window.requestAnimationFrame(darken);