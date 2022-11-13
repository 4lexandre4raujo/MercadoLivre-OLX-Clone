import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.page.html',
  styleUrls: ['./announce.page.scss'],
})
export class AnnouncePage implements OnInit {
  listCat : any;
  produtos: Array<any>;
  imageUploads = [];
  arquivo: any;
  categorias : any;
  produtosBase: any;
  imagemProd: any;
  constructor(
    private router: Router,
    public storage: AngularFireStorage,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) { 
    this.produtosBase = firestore.collection('produtos');

    console.log(router.url);
    this.categorias = firestore.collection('categorias').valueChanges();
    console.log(this.categorias)
  }
  checkValue(event){
    this.listCat=event.detail.value
    console.log(this.listCat)
  }
  anunciar(titulo, descricao, tipo, preco, endereco, user) {
    console.log(titulo.value, descricao.value, this.listCat, tipo.value, preco.value, endereco.value)
    this.produtosBase.add({id:"", titulo: titulo.value, descricao: descricao.value, categoria: this.listCat,
      tipo: tipo.value, preco: preco.value, link: this.imagemProd, endereco: endereco.value, user: user}).then(newProduto=>{
        this.produtosBase.doc(newProduto.id).update({id:newProduto.id})
        this.router.navigateByUrl('announcement-list');
      })
  }
  ngOnInit() {
    this.firestore.collection('produtos').valueChanges({idField: 'id'}).subscribe( x => {
      this.produtos = x;
  });

  }
  location = 'prods/';

  imageName() {
    const newTime = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 20) + newTime;
  }

  async storeImage(imageData: any) {
    try {
      const imageName = this.imageName();
      return new Promise((resolve, reject) => {
        const pictureRef = this.storage.ref(this.location + imageName);
        pictureRef
        .put(imageData)
        .then(function () {
        pictureRef.getDownloadURL().subscribe((url) => {
        resolve(url)
        });
      })
      .catch((error) => {
          reject(error);
      });
    });
    } catch (e) {}
  }

  uploadPhoto(event) {
    this.storeImage(event.target.files[0]).then(
        (res: any) => {
            if (res) {
                console.log(res);
                this.imageUploads.unshift(res);
                this.updateImageProd(res);
        }
    },
    (error: any) => {

    }
    );
  }

  updateImageProd(url: string){
    this.imagemProd=url
    // this.firestore.doc('produtos/'+produto.id).update({link: url});
  }
}
