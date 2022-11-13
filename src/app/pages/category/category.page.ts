import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categorias : any;
  constructor(
    private router: Router,
    firestore: AngularFirestore
  ) {
    console.log(router.url);
    this.categorias = firestore.collection('categorias').valueChanges();
    console.log(this.categorias)
   }

  ngOnInit() {
  }

}
