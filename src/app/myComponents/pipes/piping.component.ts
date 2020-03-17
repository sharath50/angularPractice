import { Component } from "@angular/core";

@Component({
  selector: "app-piping",
  templateUrl: "./piping.component.html",
  styleUrls: []
})
export class PipingComponent {
  title = "piping";
  fname = "sharath";
  lname = "mohan";
  fullname = this.fname + this.lname;

  rating = 14.516;
  price = 1499;
  iphonePrice = 41000;
  outing = Date.now();
  heading =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. cupiditate beatae quae provident quia!";
}
