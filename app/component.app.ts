// starting point for the app

import { Component } from '@angular/core';
import { PetItemComponent } from './component.pet-item';
import { PetDetailsComponent } from './component.pet-details';


export class Pet {
  name: string;
  shortname: string;
  age: string;
  bio: string
}


// Component decorator
@Component({
  selector: 'app',  // html tag
  templateUrl: './partials/app.html',
  // this css is only going to be added to the page
  // if this particular component is available or exposed within the app
  styleUrls: [ './css/app.css' ]
})

export class AppComponent {
  pets = PETS;
  currentPet: Pet;

  showPet(item) {
    this.currentPet = item;
  }

  addPet(value) {
    if (value!=='') {
      this.pets.push({
        name: value,
        shortname: 'Pet_Avatar',
        age: '',
        bio: ''
      });
    }
  }
}


var PETS: Pet[] = [
  {
    "name":"Panqueca",
    "shortname":"Panqueca",
    "age":"7 years",
    "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  }, {
    "name":"Jello",
    "shortname":"Jello",
    "age":"2 years",
    "bio":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  }, {
    "name":"Quindim",
    "shortname":"Quindim",
    "age":"2 years",
    "bio":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  }, {
    "name":"Doge",
    "shortname":"Doge",
    "age":"99 years",
    "bio":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
  }
]
