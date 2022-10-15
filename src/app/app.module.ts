import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyCLZhgWKMxav774ylEoqWRecskD-ZmwjI8",
      authDomain: "mercadolivre-olx-clone.firebaseapp.com",
      projectId: "mercadolivre-olx-clone",
      storageBucket: "mercadolivre-olx-clone.appspot.com",
      messagingSenderId: "503269932924",
      appId: "1:503269932924:web:e9b6c47dd710c31f346ef9"
     }),
     AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
