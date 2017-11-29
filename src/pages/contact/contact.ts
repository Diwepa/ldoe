import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,statusBar: StatusBar) {
    statusBar.styleLightContent();
  }

  onClickLink(link){
    window.open(link,'_system','location=yes');
  }

}
