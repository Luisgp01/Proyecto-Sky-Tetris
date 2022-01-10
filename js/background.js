class Background {
    constructor(ctx) {




        this.ctx = ctx;

        this.x = 0;
        this.y = 0;

        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;


        this.img = new Image()
        this.img.src = "img/skies.png.png"
        this.img.isReady = false;

        this.img.onload = () => {
            this.img.isReady = true;


        }


    }



    draw() {
        this.ctx = document.getElementById('canvas').getContext('2d')
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.x,
                0,
                this.width,
                this.height
            )
            this.ctx.drawImage(
                this.img,
                this.x + this.width,
                0,
                this.width,
                this.height
            )
        }
    }
}