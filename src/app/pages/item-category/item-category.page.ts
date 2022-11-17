import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.page.html',
  styleUrls: ['./item-category.page.scss'],
})
export class ItemCategoryPage implements OnInit {
  produtos: any;

  constructor(
    public firestore: AngularFirestore,
  ) {
    this.produtos = firestore.collection('produtos').valueChanges()
   }

  ngOnInit() {
  }

}
