class Firework {

    constructor(x, y, heightOfExplosion, color, alpha = 1, speed, direction, life) {
        this.x = x;
        this.y = y;
        this.heightOfExplosion = heightOfExplosion;
        this.color = color;
        this.alpha = alpha;
        this.speed = speed;
        this.direction = direction;
        this.life = life;
    }

    static generateRandom(canvasWidth, canvasHeight, height, colorTaken) {

        // const x = canvasWidth / 2 + ((Math.random() - Math.random()) * canvasWidth / 3);
        // const y = canvasHeight;


        const heightOfExplosion = (canvasHeight / 1.618) - 100 - ((Math.random() - Math.random()) * 200);
        
        const x = originFirework.x;
        const y = height;


        // const randomColor = Math.floor(Math.random() * 230);

        // let randomColorRgba = `rgba(${randomColor}, ${randomColor}, ${randomColor}, ${0.9})`

        // const red = Math.floor(Math.random() * 256);
        // const green = Math.floor(Math.random() * 50);
        // const blue = Math.floor(Math.random() * 256);

        const alpha = 1;

        const color = colorTaken;

        const speed = ((Math.random() * 0.1) - 0.05);

        const direction = (Math.random() * 0.1) - 0.05;

        const life = 100 * (Math.random() * 2);

        const newFirework = new Firework(x, y, heightOfExplosion, color, alpha, speed, direction, life);

        return newFirework;

    }


    drawXplosion(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 1, 1);
    }

    changePosition() {
        ctx.globalAlpha -= (Math.random() * 10) /1000000;
        this.alpha -= 0.0005;
        this.x += this.speed + this.direction - ((Math.random() - Math.random())/10);
        this.y += this.speed - this.direction - ((Math.random() - Math.random())/10);
    }

    static generateRandomStart(canvasWidth, canvasHeight) {

        // const x = canvasWidth / 2 + ((Math.random() - Math.random()) * canvasWidth / 3);
        // const y = canvasHeight;

        const x = (Math.random() * canvasWidth );
        const y = canvasHeight;

        const heightOfExplosion = (canvasHeight / 1.618) - 100 - ((Math.random() - Math.random()) * 200);

        const red = Math.ceil(Math.random() * 255);
        const green = Math.ceil(Math.random() * 190);
        const blue = Math.ceil(Math.random() * 255);



        const alpha = 1;

        const color = `rgba(${red},${green},${blue},${alpha})`;

        const speed = ((Math.random() * 0.1) + 0.02);

        const direction = (Math.random() * 0.1) - 0.05;

        const life = 100 * (Math.random() * 2);

        const newFirework = new Firework(x, y, heightOfExplosion, color, alpha, speed, direction, life);

        return newFirework;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 1, 1);
        // ctx.shadowOffsetX = 2;
        // ctx.shadowOffsetY = 2;
        // ctx.shadowBlur += 0.5;
    }

    changePositionStart() {
        ctx.globalAlpha -= (Math.random() * 10) /1000000;
        this.alpha -= 0.0005;
        this.x += (Math.random() - Math.random())/2;
        this.y -= this.speed * 20;
        return xplosionX, xplosionY;
    }


}