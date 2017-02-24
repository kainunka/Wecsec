import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavouritePage } from '../pages/favourite/favourite';
import { PersonPage } from '../pages/person/person';
import { ViewVideoPage } from '../pages/view-video/view-video';
import { ViewAllPage } from '../pages/view-all/view-all';

import { Storage } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyB9iverOh8z6ZeRX5kj1C4faPLHnc1O_R0",
  authDomain: "firstapp-e20a1.firebaseapp.com",
  databaseURL: "https://firstapp-e20a1.firebaseio.com",
  storageBucket: "firstapp-e20a1.appspot.com",
  messagingSenderId: "877097461184"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritePage,
    PersonPage,
    ViewVideoPage,
    ViewAllPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritePage,
    PersonPage,
    ViewVideoPage,
    ViewAllPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
