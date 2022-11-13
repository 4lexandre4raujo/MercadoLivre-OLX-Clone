import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  produtos: any;
  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    this.produtos = firestore.collection('produtos', ref => ref.limit(4)).valueChanges();
  }
    
  ngOnInit() {
  }

}
