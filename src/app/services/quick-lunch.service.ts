import { Injectable } from '@angular/core';
import { Food } from '../models/food.interface';

@Injectable({
  providedIn: 'root'
})
export class QuickLunchService {

  planches: Food[] = [
    {id: 1, title: 'Fromages', description: 'bleu d\'Auvergne, camembert, gorgonzola', price: 8.40},
    {id: 2, title: 'Charcuterie', description: 'saucisson aux herbes, rillettes d\'oie, jambon serrano', price: 9.40},
    {id: 3, title: 'Mixte', description: 'planche fromage et charcuterie', price: 15.80}
  ];

  salades: Food[] = [
    {id: 1, title: 'Auvergnate', description: 'salade verte, jambon auvergnat, champignons du moment, oeuf, cantal, pommes de terre', price: 9.90},
    {id: 2, title: 'Périgourdine', description: 'salade verte, gésiers, truffe, tomates, noix', price: 9.90},
    {id: 3, title: 'Du moment', price: 9.90}
  ];

  brochettes: Food[] = [
    {id: 1, title: 'Boeuf', description: 'morceaux de boeuf accompagnés de frites et salade verte, sauce au choix', price: 14.50},
    {id: 2, title: 'Poissons', description: 'saumon, cabillaud, noix de st-jacques accompagné de frites et salade verte, sauce au choix', price: 17.50},
    {id: 3, title: 'Végétarienne', description: 'légumes de saison, frites, salade verte', price: 12.90}
  ];

  constructor() { }

  // méthodes pour rendre disponibles nos plats
  getPlanches(): Food[] {
    return this.planches;
  }

  getSalades(): Food[] {
    return this.salades;
  }

  getBrochettes(): Food[] {
    return this.brochettes;
  }

}
