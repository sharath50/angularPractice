import { serviceOneService } from "./../../services/serviceOne.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: []
})

/**
 * selector
 * templateUrl
 * styleUrls
 * styles
 */

// creating and exporting the component class
export class BasicComponent {
  title = "Basics";

  constructor(public service: serviceOneService) {}

  numbers = this.service.getNumbers();
  pairs = this.service.pairs;
}
