import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tp_Angular_js';
  isAuth = false;
  etat1='Allumer';
  etat2='Eteindre';


  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

 onAllumer = function(){

}
}
