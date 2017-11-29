export class Zombie{

    health : number;
    x : number;
    y : number;
    size : number;
    velocity : number;
    
    constructor(health? : number,x? : number, y? : number, size? : number, velocity? : number){
        this.health = health;
        this.x = x;
        this.y = y;
        this.size = size;
        this.velocity = velocity;
    }

    static ZOMBIE_1(x : number, y : number){
        return new Zombie(40,x,y,25,0.2);
    }

    static ZOMBIE_2(x : number, y : number){
        return new Zombie(100,x,y,40,0.05);
    }

    static RANDOM_ZOMBIE(x : number, y : number){
        var random = Math.floor(Math.random()*2);
        if(random == 0){
            return this.ZOMBIE_1(x,y);
        }
        if(random == 1){
            return this.ZOMBIE_2(x,y);
        }
    }
}