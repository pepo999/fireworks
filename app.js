const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

let grd;

function launch() {
    const newFirework = Firework.generateRandomStart(myCanvas.width, myCanvas.height);
    function step() {
 
    // setInterval(() => {
        newFirework.drawStart(ctx);
        newFirework.changePositionStart();
        if (newFirework.y <= newFirework.yOfExplosion) {
            // newFirework.color = 'rgba(8, 2, 22, 1)';
            newFirework.color = 'rgba(8,2,25,1)';
            const particles = newFirework.particles;
            explosion(particles)
            if (newFirework.alpha <= 0) {
                newFirework.color = 'rgba(4,2,20,1)'
                return;
            }
        }

    ctx.fillStyle = 'rgba(3, 0, 2, 1)';
    ctx.fillRect(0, myCanvas.height - 160, 20, 160);
    ctx.fillRect(50, myCanvas.height - 110, 40, 110);
    ctx.fillRect(20, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0, myCanvas.height - 100, 20, 100);
    ctx.fillRect(90, myCanvas.height -75, 70, 75);
    ctx.fillRect(110, myCanvas.height - 105, 90, 105);
    ctx.fillRect(0 +300, myCanvas.height - 100, 20, 100);
    ctx.fillRect(50 +300, myCanvas.height - 110, 40, 110);
    ctx.fillRect(20 +300, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0 +300, myCanvas.height - 100, 20, 100);
    ctx.fillRect(90 +300, myCanvas.height -75, 70, 75);
    ctx.fillRect(110 +300, myCanvas.height - 170, 90, 170);
    ctx.fillRect(0 +130, myCanvas.height - 100, 20, 100);
    ctx.fillRect(50 +130, myCanvas.height - 130, 40, 130);
    ctx.fillRect(20 +130, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0 +130, myCanvas.height - 100, 20, 100);
    ctx.fillRect(90 +130, myCanvas.height -75, 70, 75);
    ctx.fillRect(110 +130, myCanvas.height - 105, 90, 105);
    ctx.fillRect(50 +500, myCanvas.height - 130, 40, 130);
    ctx.fillRect(20 +500, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0 +500, myCanvas.height - 140, 60, 140);
    ctx.fillRect(90 +130, myCanvas.height -75, 70, 75);
    ctx.fillRect(myCanvas.width / 3, myCanvas.height -160, 45, 160);
    ctx.fillRect(myCanvas.width / 3 - 5, myCanvas.height -160, 55, 8)
    ctx.fillRect(myCanvas.width / 3 + 3, myCanvas.height -260, 39, 10);
    ctx.fillRect(myCanvas.width / 3 + 9, myCanvas.height -280, 27.5, 5);
    ctx.fillRect(myCanvas.width / 3 + 7.5, myCanvas.height -260, 30, 260);
    ctx.fillRect(myCanvas.width / 3 + 21, myCanvas.height -295, 3, 275);
    ctx.fillRect(myCanvas.width / 3 + 29.5, myCanvas.height -275, 3, 275);
    ctx.fillRect(myCanvas.width / 3 + 12.5, myCanvas.height -275, 3, 275);
    ctx.beginPath();
    ctx.arc(222.5, 320, 10, Math.PI, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(6, 5, 7, 1)';
    ctx.fillRect(510, myCanvas.height -170, 5, 150)
    ctx.fillRect(519, myCanvas.height -175, 5, 150)
    ctx.fillRect(70, myCanvas.height -50, 50, 50);
    ctx.fillRect(myCanvas.width - 200, myCanvas.height -90, 50, 90);
    ctx.fillRect(150, myCanvas.height -30, 80, 50);
    ctx.fillRect(myCanvas.width - 300, myCanvas.width -60, 60, 60);
    ctx.fillRect(0, myCanvas.width -80, 55, 80);
    ctx.fillRect(myCanvas.width -80, myCanvas.height -70, 90, 70);
    ctx.fillRect(200, myCanvas.width -80, 100, 80);
    ctx.fillRect(100, myCanvas.width -120, 55, 120);
    ctx.fillRect(myCanvas.width -140, myCanvas.width -150, 90, 150);
    ctx.fillRect(myCanvas.width / 2, myCanvas.width -15, myCanvas.width/2, 15);
    ctx.fillRect(0, myCanvas.width -10, myCanvas.width/2, 10);

        window.requestAnimationFrame(step)
    // }, 10);
      }
      window.requestAnimationFrame(step)
}

let darkenUnit = 0.06;

function darken() {
    ctx.fillStyle = `rgba(8,2,40,${darkenUnit * 4})`  
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fillStyle = "rgba(251, 246, 155, 0.05)"
    ctx.beginPath()
    ctx.arc(480, 135, 20, 0, Math.PI *2)
    ctx.fill()
    ctx.fillStyle = 'rgba(6, 5, 7, 1)';
    ctx.fillRect(0, myCanvas.height - 160, 20, 160);
    ctx.fillRect(50, myCanvas.height - 110, 40, 110);
    ctx.fillRect(20, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0, myCanvas.height - 100, 20, 100);
    ctx.fillRect(90, myCanvas.height -75, 70, 75);
    ctx.fillRect(110, myCanvas.height - 105, 90, 105);
    ctx.fillRect(0 +300, myCanvas.height - 100, 20, 100);
    ctx.fillRect(50 +300, myCanvas.height - 110, 40, 110);
    ctx.fillRect(20 +300, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0 +300, myCanvas.height - 100, 20, 100);
    ctx.fillRect(90 +300, myCanvas.height -75, 70, 75);
    ctx.fillRect(110 +300, myCanvas.height - 170, 90, 170);
    ctx.fillRect(0 +130, myCanvas.height - 100, 20, 100);
    ctx.fillRect(50 +130, myCanvas.height - 130, 40, 130);
    ctx.fillRect(20 +130, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0 +130, myCanvas.height - 100, 20, 100);
    ctx.fillRect(90 +130, myCanvas.height -75, 70, 75);
    ctx.fillRect(110 +130, myCanvas.height - 105, 90, 105);
    ctx.fillRect(50 +500, myCanvas.height - 130, 40, 130);
    ctx.fillRect(20 +500, myCanvas.height - 90, 50, 90);
    ctx.fillRect(0 +500, myCanvas.height - 140, 60, 140);
    ctx.fillRect(90 +130, myCanvas.height -75, 70, 75);
    ctx.fillRect(myCanvas.width / 3, myCanvas.height -160, 45, 160);
    ctx.fillRect(myCanvas.width / 3 - 5, myCanvas.height -160, 55, 8)
    ctx.fillRect(myCanvas.width / 3 + 3, myCanvas.height -260, 39, 10);
    ctx.fillRect(myCanvas.width / 3 + 9, myCanvas.height -280, 27.5, 5);
    ctx.fillRect(myCanvas.width / 3 + 7.5, myCanvas.height -260, 30, 260);
    ctx.fillRect(myCanvas.width / 3 + 21, myCanvas.height -295, 3, 275);
    ctx.fillRect(myCanvas.width / 3 + 29.5, myCanvas.height -275, 3, 275);
    ctx.fillRect(myCanvas.width / 3 + 12.5, myCanvas.height -275, 3, 275);
    ctx.beginPath();
    ctx.arc(222.5, 320, 10, Math.PI, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(3, 0, 2, 1)';
    ctx.fillRect(510, myCanvas.height -170, 5, 150)
    ctx.fillRect(519, myCanvas.height -175, 5, 150)
    ctx.fillRect(70, myCanvas.height -50, 50, 50);
    ctx.fillRect(myCanvas.width - 200, myCanvas.height -90, 50, 90);
    ctx.fillRect(150, myCanvas.height -30, 80, 50);
    ctx.fillRect(myCanvas.width - 300, myCanvas.width -60, 60, 60);
    ctx.fillRect(0, myCanvas.width -80, 55, 80);
    ctx.fillRect(myCanvas.width -80, myCanvas.height -70, 90, 70);
    ctx.fillRect(200, myCanvas.width -80, 100, 80);
    ctx.fillRect(100, myCanvas.width -120, 55, 120);
    ctx.fillRect(myCanvas.width -140, myCanvas.width -150, 90, 150);
    ctx.fillRect(myCanvas.width / 2, myCanvas.width -15, myCanvas.width/2, 15);
    ctx.fillRect(0, myCanvas.width -10, myCanvas.width/2, 10);

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



