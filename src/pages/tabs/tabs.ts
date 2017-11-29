import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html',
  selector : 'page-tabs'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  
  constructor(statusBar: StatusBar) {
    
  }
}
