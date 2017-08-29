import { Component } from '@angular/core';

@Component({
  selector: 'pet-item',
  templateUrl: './partials/pet-item.html',
  styleUrls: ['./css/pet-item.css'],
  inputs: ['pet']
})

export class PetItemComponent {}
