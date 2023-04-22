const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

let fireworksArr = []
let xplosionX = 0;
let xplosionY = 0;
const originFirework = Firework.generateRandomStart(myCanvas.width, myCanvas.height);
console.log(originFirework)

function start() {
    setInterval(() => {
        originFirework.draw(ctx)
        originFirework.changePositionStart();
    
        let xplosionX = originFirework.x;
        let xplosionY = originFirework.y;
        // console.log(originFirework.changePositionStart(), xplosionX)
        if (originFirework.y <= originFirework.heightOfExplosion) {
            explosion();
            originFirework.color = 'black';
        }
        
    }, 10);

}

start()

let darkenUnit = 0.03;

for (let i = 0; i < 200; i++) {
    const newFirework = Firework.generateRandom(myCanvas.width, myCanvas.height);
    fireworksArr.push(newFirework);
    const heightOfExplosion = newFirework.heightOfExplosion;
    console.log(heightOfExplosion)
}

function explosion() {
    setInterval(() => {
        for (let i = 0; i < fireworksArr.length; i++) {
            const firework = fireworksArr[i];
            firework.drawXplosion(ctx);
            firework.changePosition();
        //    firework.speed -= (firework.speed / 6000);
            if (ctx.globalAlpha < 0.05 * Math.random() || firework.alpha <= 0) {
                ctx.globalAlpha = 1;
                darkenUnit = darkenUnit + 0.00005;
                return;
            }
            // console.log(firework.alpha)
            // console.log(ctx.globalAlpha)
        }
    }, 10);
    darkenUnit = 0.03;
}

function darken1() {
    setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
    }, 10);
}

// explosion()


function darken() {
    ctx.fillStyle = `rgba(0, 0, 0, ${darkenUnit})`;
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
    window.requestAnimationFrame(darken);
}

window.requestAnimationFrame(darken);