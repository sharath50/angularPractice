import { FavoriteDirective } from "./myComponents/builtInDirectives/favorite.directive";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BasicComponent } from "./myComponents/basics/basic.component";
import { BindingComponent } from "./myComponents/binding/binding.component";
import { PipingComponent } from "./myComponents/pipes/piping.component";
import { builtInDirectivesComponent } from "./myComponents/builtInDirectives/builtInDirectives.component";
import { SummaryPipe } from "./myComponents/pipes/summary.pipe";
import { FavoriteComponent } from "./reusableComponents/favorite.component";
import { MainComponent } from "./reusableComponents/main.component";

// services
import { serviceOneService } from "./services/serviceOne.service";

@NgModule({
  declarations: [
    AppComponent, // we include app component to make available to this module
    BasicComponent,
    BindingComponent,
    PipingComponent,
    builtInDirectivesComponent,
    SummaryPipe,
    FavoriteComponent,
    MainComponent,
    FavoriteDirective
  ], // to make all component availabe to the module that are not from other modules
  imports: [
    BrowserModule, // we need to use browser module because we are building browser base application
    // it gives us the ability to work with DOM and etc...
    FormsModule //
  ], // to import other modules from the app
  providers: [serviceOneService], // includes services
  bootstrap: [AppComponent] // indicates list of components as starting point of the app
})
export class AppModule {} // the name for module
