import { serviceOneService } from "./../../services/serviceOne.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-basic", // as per the w3c roles custom HTML elements should contain atleaset one  dash
  templateUrl: "./basic.component.html",
  styleUrls: []
})

/**
 * selector : "",
 * template : "", // html template code
 * templateUrl : "", // html template code url
 * styleUrls : [], // array of style urls
 * styles : ['h1 { color:red } .class { color:blue } ', '.class2 { color:green }'] // array of styles
 */

// creating and exporting the component class
export class BasicComponent {
  title = "Basics"; // this can be used in component template

  constructor(public service: serviceOneService) {}

  numbers = this.service.getNumbers();
  pairs = this.service.pairs;
}
