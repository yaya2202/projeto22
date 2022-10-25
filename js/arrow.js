class PlayerArcher{
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.playerArcher = loadImage("assets/playerArcher.png");
    }

    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.playerArcher,0,0, this.w, this.h);
        noFill();
        pop();
    }
}