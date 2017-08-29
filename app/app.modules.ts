// describes all modules (their relationships and dependencies)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { PetItemComponent } from './component.pet-item';
import { PetDetailsComponent } from './component.pet-details';
import { SearchPipe } from './pipe.search';


// NgModule decorator
// Decorators are functions that modify JavaScript classes
// Essentially it's just a configuration object
@NgModule({
  // modules that the app needs, features
  imports: [
    BrowserModule, FormsModule
  ],
  // view classes that belong to this module
  // all modules that exist within the app
  declarations: [
    AppComponent, PetItemComponent, PetDetailsComponent, SearchPipe
  ],
  // bootstrap component (root component) that has the other components
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
