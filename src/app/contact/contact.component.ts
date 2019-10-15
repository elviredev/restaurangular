import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  numberToDisplay = '';

  standard = {
    firstName: 'Benjamin',
    lastName: 'Glouton',
    role: 'Accueil',
    award: '', //récompense
    phoneNumber: '02-99-99-99-01'
  };

  sommelier = {
    firstName: 'Régis',
    lastName: 'Castro',
    role: 'Sommelier',
    award: 'Meilleur Ouvrier de France 2008', //récompense
    phoneNumber: '02-99-99-99-98'
  };

  patissier = {
    firstName: 'Lilas',
    lastName: 'Lalart-Castro',
    role: 'Pâtissière',
    award: 'Meilleur Ouvrier de France 2018', //récompense
    phoneNumber: '02-99-99-99-97'
  };

  constructor() { }

  ngOnInit() {
  }

  displayBig(telephoneNumber){
    console.log(telephoneNumber);
    this.numberToDisplay = telephoneNumber;
  }

}
