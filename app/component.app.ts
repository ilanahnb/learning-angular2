// starting point for the app

import { Component } from '@angular/core';
import { PetItemComponent } from './component.pet-item';
import { PetDetailsComponent } from './component.pet-details';


export class Pet {
  name: string;
  shortname: string;
  owner: string;
  age: number;
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
        owner: 'Unknown',
        age: 0,
        bio: ''
      });
    }
  }
}


var PETS: Pet[] = [
  {
    "name":"Panqueca",
    "shortname":"Panqueca",
    "owner":"Ilana",
    "age":7,
    "bio":"Spicy jalapeno bacon ipsum dolor amet corned beef ut ham hock ball tip prosciutto turkey cow rump sint tail. Ad burgdoggen excepteur reprehenderit velit meatball eu et. Tenderloin salami minim duis capicola ea laboris t-bone. Prosciutto pancetta chuck short loin, flank irure biltong aute burgdoggen short ribs eu ut qui ball tip frankfurter. Tri-tip aute deserunt turkey, in shankle pork ham et ad cow swine veniam corned beef."
  }, {
    "name":"Jello",
    "shortname":"Jello",
    "owner":"Ilana",
    "age":2,
    "bio":"Bacon ipsum dolor amet kevin jerky rump hamburger ground round shank t-bone prosciutto biltong filet mignon jowl porchetta brisket spare ribs. Fatback tongue shank pork belly, tail prosciutto tenderloin. Drumstick sausage doner kevin ball tip burgdoggen shankle pastrami hamburger cupim turducken pig. Leberkas filet mignon picanha, corned beef andouille meatloaf hamburger pork loin tail venison fatback. Kevin tenderloin capicola, cow prosciutto boudin spare ribs tail jerky tongue kielbasa chuck. Shoulder kielbasa tenderloin ball tip jerky. Biltong meatball beef ribs, shank beef sirloin pork loin meatloaf pork belly."
  }, {
    "name":"Quindim",
    "shortname":"Quindim",
    "owner":"Luara",
    "age":2,
    "bio":"Spicy jalapeno tri-tip frankfurter hamburger doner shankle strip steak alcatra rump flank jowl meatloaf landjaeger swine. Kevin turkey pork belly prosciutto, biltong ham hock landjaeger turducken jowl bacon chuck. Rump kielbasa short ribs biltong flank landjaeger pork filet mignon pork loin tail ham. Cupim corned beef brisket, pig andouille tongue drumstick meatloaf short loin alcatra ball tip venison flank pork landjaeger. Shankle venison shank alcatra meatball ham. Cow pork loin tongue, ribeye pastrami bacon burgdoggen pork shank jowl pancetta fatback cupim chuck. Alcatra meatball porchetta, frankfurter spare ribs pork chop boudin tenderloin shankle kevin."
  }, {
    "name":"Doge",
    "shortname":"Doge",
    "owner":"Meme",
    "age":99,
    "bio":"Bacon ipsum dolor amet pastrami ground round tri-tip, burgdoggen nostrud rump eiusmod laboris. Ipsum landjaeger pork loin nisi, meatloaf voluptate pork chop qui ex pig. Mollit aliqua shankle ut culpa reprehenderit. Fatback veniam leberkas reprehenderit picanha nostrud voluptate boudin id, turducken velit jerky meatloaf. Consequat strip steak shankle nisi reprehenderit irure, kevin meatball sunt burgdoggen."
  }
]
