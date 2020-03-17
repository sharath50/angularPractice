import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular practice from app component";
  forBinding = "this is from app to binding";
  forBinding2 = "this is from app to binding 2";
  constructor() {}

  onDeleteFromBinding(e) {
    alert("delete msg from app component " + e);
  }

  onUpdateFromBinding(e) {
    alert("update msg from app component " + e);
  }
}
