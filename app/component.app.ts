// starting point for the app

import { Component } from '@angular/core';

// Component decorator
@Component({
  selector: 'app',  // html tag
  templateUrl: './partials/app.html',
  // this css is only going to be added to the page
  // if this particular component is available or exposed within the app
  styleUrls: [ './css/app.css' ]
})

export class AppComponent {
  name: string;
  pets: any;

  onClick(petItem, petElement) {
    this.name = petItem.name;
    petElement.style.backgroundColor="#FECE4E";
  }

  addPet(value) {
    if (value!=='') {
      this.pets.push({
        name: value,
        age: '_ years'
      });
    }
  }

  // method that gets executed when
  // an instance of the class is created
  constructor() {
    this.pets = [
      {
        name: 'Panqueca',
        age: '7 years'
      },
      {
        name: 'Jello',
        age: '2 years'
      },
      {
        name: 'Quindim',
        age: '3 years'
      }
    ]
  }
}
