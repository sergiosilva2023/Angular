import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  //encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.Emulated // Padrão
   //encapsulation: ViewEncapsulation.ShadowDom
})

export class CardComponent {
  // ts-ignore
    plano: any = {
      infos: {
        tipo: 'Simples',
        preco: 100
      }
    };
}
