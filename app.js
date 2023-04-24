const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

function launch() {
    const newFirework = Firework.generateRandomStart(myCanvas.width, myCanvas.height);
    setInterval(() => {
        newFirework.drawStart(ctx);
        newFirework.changePositionStart();
        if (newFirework.y <= newFirework.yOfExplosion) {
            newFirework.color = 'black';
            const particles = newFirework.particles;
            explosion(particles)
            if (newFirework.alpha <= 0) {
                newFirework.color = 'black'
                return;
            }
        }
    }, 10);


}

let darkenUnit = 0.06;

function darken() {
    ctx.fillStyle = `rgba(0, 0, 0, ${darkenUnit * 1.3})`;
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
    window.requestAnimationFrame(darken);
}

window.requestAnimationFrame(darken);

// launch()

function explosion(arr) {
        for (let i = 0; i < arr.length; i++) {
            const firework = arr[i];
            firework.drawParticle(ctx);
            firework.changePositionParticle();
            if (firework.alpha <= 0) {
                firework.color = 'black'
                return;
            }
            // console.log(firework.alpha)
            // ctx.globalAlpha = 1;
            darkenUnit = darkenUnit + 0.00002;
        }
    darkenUnit = 0.06;
}



