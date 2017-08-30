// describes all modules (their relationships and dependencies)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { PetItemComponent } from './component.pet-item';
import { PetDetailsComponent } from './component.pet-details';
import { PetAddComponent } from './component.pet-add';
import { SearchPipe } from './pipe.search';


// NgModule decorator
// Decorators are functions that modify JavaScript classes
// Essentially it's just a configuration object
@NgModule({
  // other Angular modules that the app needs, features
  imports: [
    BrowserModule, FormsModule
  ],
  // view classes that belong to this module
  // all modules that exist within the app
  declarations: [
    AppComponent,
    PetItemComponent,
    PetDetailsComponent,
    PetAddComponent,
    SearchPipe
  ],
  // Root module. Component(s) that will be the starting point for the Bootstrap process
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
