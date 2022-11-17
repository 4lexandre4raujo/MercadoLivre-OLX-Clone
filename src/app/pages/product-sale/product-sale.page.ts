import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.page.html',
  styleUrls: ['./product-sale.page.scss'],
})
export class ProductSalePage implements OnInit {
  produtos: any;
  constructor(
    public firestore: AngularFirestore,
  ) {
    this.produtos = firestore.collection('produtos').valueChanges();
   }

  ngOnInit() {
  }

}
