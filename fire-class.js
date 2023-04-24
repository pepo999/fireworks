class Firework {

    constructor(x, y, color, yOfExplosion, speed, direction, particles = [], alpha) {
        this.x = x;
        this.y = y;
        this.yOfExplosion = yOfExplosion;
        this.color = color;
        this.speed = speed;
        this.direction = direction;
        this.particles = particles;
        this.alpha = alpha;
    }

    static generateRandomStart(canvasWidth, canvasHeight) {

        const x = (Math.random() * canvasWidth);
        const y = canvasHeight;

        const red = Math.floor(Math.random() * 255) + 100;
        const green = Math.floor(Math.random() * 255) + 100;
        const blue = Math.floor(Math.random() * 255) + 100;

        let alpha = 1;

        const color = `rgba(${red},${green},${blue},${alpha})`;

        const yOfExplosion = (canvasWidth / 1.618) - 100 - ((Math.random() - Math.random()) * 200);

        const speed = ((Math.random() * 0.1) + 0.02);

        const direction = (Math.random() * 0.1) - 0.05;

        const particles = [];

        for (let i = 0; i < 10 + (Math.random() * 3000); i++) {
  
            const newSpeed = ((Math.random() * 0.1) - 0.05);

            const newDirection = (Math.random() * 0.1) - 0.05;

            const particle = new Firework(x, yOfExplosion, color, yOfExplosion, newSpeed, newDirection, alpha)

           particles.push(particle)
        }

        const newFirework = new Firework(x, y, color, yOfExplosion, speed, direction, particles, alpha);

        console.log(alpha)

        return newFirework;
        }

        drawStart(ctx) { 
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, 1, 1);
        }
    
        changePositionStart() {
            this.x += (Math.random() - Math.random()) / 2;
            this.y -= this.speed * 20;
        }

        drawParticle(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, 1, 1);  
        }
    
        changePositionParticle() {
            this.x += this.speed + this.direction - ((Math.random() - Math.random()) * 0.3);
            this.y += this.speed - this.direction - ((Math.random() - Math.random()) * 0.3);
            // this.alpha -=  0.001;
            // console.log(this.alpha)    
        }

}