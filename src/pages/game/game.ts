import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Zombie } from '../../models/zombie';


@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage{

    @ViewChild('canvasGame')
    private canvas: ElementRef;

    private context: CanvasRenderingContext2D;

    private canvasWidth : number;
    private canvasHeight : number;

    private person = {
        damage : 10 //daño que hace el personaje
    }

    private zombies : Zombie[] = [];

    private score : number = 0;

    private showCanvas = false;



    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        //this.init();
    }

    private onClickStart(){
        this.showCanvas = true;
        this.init();
    }

    private init(){
        this.setCanvasSize();
        this.setContext();
        let zombie = Zombie.ZOMBIE_1(this.canvasWidth,this.canvasHeight);
        let secondZombie = Zombie.ZOMBIE_2(0,0);

        this.zombies.push(zombie);
        this.zombies.push(secondZombie);

        setInterval(()=>{
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.setScoreText();
            this.setMainPerson();
            this.setZombies();
        },60/1000);

        this.createZombies();
    }

    createZombies(){
        setTimeout(()=>{
            this.zombies.push(Zombie.RANDOM_ZOMBIE(this.randomZombieX(),this.randomZombieY()));
            this.createZombies();
        },this.randomZombieTime());
    }

    randomZombieX() : number{
        var random = Math.random()*2;
        if(random >=1){
            return 0;
        }else{
            return this.canvasWidth;
        }
    }

    randomZombieY(){
        var random = Math.random()*this.canvasHeight;
        return this.canvasHeight-random;
    }

    randomZombieTime(){
        let random = Math.random();
        return random*1000*10 + 2000; //At least 2 seconds
    }

    private setCanvasSize(){
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight - 60;
        this.canvas.nativeElement.width = this.canvasWidth;
        this.canvas.nativeElement.height = this.canvasHeight;
    }

    private setContext(){
        this.context = this.canvas.nativeElement.getContext('2d');
    }

    private setMainPerson(){
        this.context.beginPath();
        this.context.arc(this.canvasWidth/2,this.canvasHeight/2,16,0,2*Math.PI);
        this.context.stroke();
    }


    private setZombies(){
        for(var i = 0; i<this.zombies.length;i++){
            this.setZombie(this.zombies[i]);
        }
    }

    private setZombie(zombie : Zombie){
        this.context.beginPath();
        this.context.arc(zombie.x,zombie.y,zombie.size,0,2*Math.PI);
        this.context.stroke();
        if((zombie.x - this.canvasWidth/2) > 0){
            zombie.x -= zombie.velocity;
        }
        if((zombie.x - this.canvasWidth/2) < 0){
            zombie.x += zombie.velocity;
        }
        if((zombie.y - this.canvasHeight/2) > 0){
            zombie.y -= zombie.velocity;
        }
        if((zombie.y - this.canvasHeight/2) < 0){
            zombie.y += zombie.velocity;
        }
    }

    setScoreText(){
        this.context.beginPath();
        this.context.font = "30px Arial";
        this.context.fillText("Puntuación: " + this.score,10,50);
    }

    private onClick(event : MouseEvent) : void{
        var x = event.pageX,
        y = event.pageY;
        console.log('HE TOCADO', x, y);
        this.zombies.forEach((zombie)=>{
            if (Math.abs(x - zombie.x) <= zombie.size
                && Math.abs(y - zombie.y) <= zombie.size) {
                this.score++;
                zombie.health -= this.person.damage;
                if(zombie.health <= 0){
                    this.score = this.score + 10;
                    this.zombies.splice(this.zombies.indexOf(zombie),1);
                }
                this.setScoreText();
            }
        });
    }

}
