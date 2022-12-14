import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  produtos: any;

  constructor(
    public firestore: AngularFirestore,
  ) {
    this.produtos = firestore.collection('produtos').valueChanges();
   }

  ngOnInit() {
  }

}
