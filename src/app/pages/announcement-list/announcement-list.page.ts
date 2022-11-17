import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.page.html',
  styleUrls: ['./announcement-list.page.scss'],
})
export class AnnouncementListPage implements OnInit {
  produtos: any;

  constructor(
    public firestore: AngularFirestore,
  ) {
    this.produtos = firestore.collection('produtos').valueChanges()
   }

  ngOnInit() {
  }

}
