import { Component } from '@angular/core';
import { PETS } from './component.app'

@Component({
  selector: 'pet-add',
  templateUrl: './partials/pet-add.html',
  styleUrls: [ './css/pet-details.css' ]
})

export class PetAddComponent {
  pets = PETS;

  addPet(value) {
    if (value!=='') {
      this.pets.push({
        name: value,
        shortname: 'Pet_Avatar',
        owner: 'Unknown',
        age: 0,
        bio: ''
      });
    }
  }
}
