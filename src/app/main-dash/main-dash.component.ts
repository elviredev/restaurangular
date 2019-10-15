import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import {QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Salades', cols: 1, rows: 1, id: 'sld' },
          { title: 'Planches', cols: 1, rows: 1, id: 'pln' },
          { title: 'Brochettes', cols: 1, rows: 1, id: 'brc' }
        ];
      }

      return [
        { title: 'Salades', cols: 2, rows: 1, id: 'sld' },
        { title: 'Planches', cols: 2, rows: 1, id: 'pln' },
        { title: 'Brochettes', cols: 2, rows: 1, id: 'brc' }
      ];
    })
  );

  // variables qui seront initialisées par l'instance de notre service pour s'en servir côté html (affichage côté template)
  planches: Food[];
  salades: Food[];
  brochettes: Food[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private qls: QuickLunchService) {}

  ngOnInit() {
    // le service va fournir les plats
    this.planches = this.qls.getPlanches();
    this.salades = this.qls.getSalades();
    this.brochettes = this.qls.getBrochettes();
  }
}
