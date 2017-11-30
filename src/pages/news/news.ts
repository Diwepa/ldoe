import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

    private showSpinner : boolean = true;

    constructor(public navCtrl: NavController) { }

}
