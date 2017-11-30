import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SafariViewController } from '@ionic-native/safari-view-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private showSpinner : boolean = true;

  constructor(public navCtrl: NavController,public platform : Platform, public safariViewController : SafariViewController) {

    this.safariViewController.isAvailable().then(()=>{
      this.safariViewController.show({
        url: 'http://lastdayonearth.es/foro',
        hidden: false,
        animated: true,
        transition: 'curl',
        enterReaderModeIfAvailable: false,
        tintColor: '#000000'
      }).subscribe((result: any) => {
        if(result.event === 'opened') console.log('Opened');
        else if(result.event === 'loaded') console.log('Loaded');
        else if(result.event === 'closed') console.log('Closed');
      },
      (error: any) => console.error(error)
    );
    }).catch(error=>{
      console.log(error);
    });
  }

}
