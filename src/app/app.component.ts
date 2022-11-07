import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Minha conta', url: '/account', icon: 'person-circle' },
    { title: 'Histórico', url: '/folder/Favorites', icon: 'time' },
    { title: 'Favoritos', url: '/folder/Archived', icon: 'heart' },
    { title: 'Ofertas do dia', url: '/folder/Trash', icon: 'pricetags' },
    { title: 'Anunciar', url: '/announce', icon: 'pricetag' },
    { title: 'Categorias', url: '/category', icon: 'menu' },
  ];
  constructor() {}
}
