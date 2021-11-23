export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Jack Daniels',
    price: 150.00,
    description:
      'Um dos melhores e mais diferentes Tennessee Whiskey que você irá provar, aproveite!'
  },
  {
    id: 2,
    name: 'Gelo de Coco',
    price: 3.00,
    description:
      'O Gelo de Coco é 100% coco! Ele é produzido para você colocar juntamente com o whisky e degustar da melhor maneira!'
  },
  {
    id: 3,
    name: '1kg Picanha',
    price: 100.00,
    description: 'Essa carne de qualidade é para você aproveitar no seu churrascão de sábado degustando aquele Whiskey com o gelo de Coco!'
  },
  {
    id: 4,
    name: 'Piscina',
    price: 7000.00,
    description:
      'A Piscina mais prática que você verá para aproveitar no sabadão comendo aquela carninha e tomando aquele Whiskey com o famoso gelo de Coco!'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
