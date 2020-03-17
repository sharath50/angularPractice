import { Component } from "@angular/core";

@Component({
  selector: "app-builtInDirectives",
  templateUrl: "./builtInDirectives.component.html",
  styleUrls: []
})
export class builtInDirectivesComponent {
  title = "built in directives";

  // design directives
  done = true;
  classes = "card text-warning";
  classesArr = ["card", "text-dark"];
  classesObj = { "card text-success": true };
  padd = 10;
  bc = "red";
  bc2 = "blue";
  cStyles = { color: "white", "background-color": "green" };

  // voting
  gender = "male";
  age = 17;
  isIndian = true;
  changeAge() {
    this.age > 18 ? (this.age -= 10) : (this.age += 10);
  }

  // access controll
  admin = true;
  changeAccess() {
    this.admin = !this.admin;
  }
}
