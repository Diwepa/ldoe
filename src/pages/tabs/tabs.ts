import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html',
  selector : 'page-tabs'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = HomePage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  
  constructor() { }
}
