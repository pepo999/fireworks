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

let darkenUnit = 0.06;

for (let i = 0; i <100 + (Math.random()*700); i++) {
    const newFirework = Firework.generateRandom(myCanvas.width, myCanvas.height, originFirework.heightOfExplosion, originFirework.color);
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
        //    firework.speed -= (firework.speed / (2000 + (Math.random() * 1000)));
            if (ctx.globalAlpha < 0.05 * Math.random() || firework.alpha <= 0.1) {
            //     ctx.globalAlpha = 1;
            //     darkenUnit = darkenUnit + 0.00001;
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0,myCanvas.width, myCanvas.height)
                return;
            }
            
                ctx.globalAlpha = 1;
                darkenUnit = darkenUnit + 0.00008;
            
           
        }
    }, 10);
    darkenUnit = 0.06;
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