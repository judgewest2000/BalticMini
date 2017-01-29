import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactView } from '../pages/contact-view/contact-view';
import { ProfileView } from '../pages/profile-view/profile-view'
import {Outlet} from '../pages/outlet/outlet';
import {OutletView} from '../pages/outlet-view/outlet-view';
import { MapPage } from '../pages/map/map';
import {Contact} from '../pages/contact/contact';


import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    OutletView,
    Outlet,
    Contact,
    ContactView,
    ProfileView,
    MapPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyAKaXMcBG0PGJdKi8CBvmFhNaV7e2LRJSE'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   MyApp,
    AboutPage,
    ContactView,
    Outlet,
    Contact,
    OutletView,
    ProfileView,
    MapPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
