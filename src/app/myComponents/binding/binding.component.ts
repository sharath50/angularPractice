import { Component } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: []
})
export class BindingComponent {
  title = "binding in angular";
  googleLink = "https://www.google.com";
  linkText = "Click for Google";
  facebookLink = "https://www.facebook.com";
  greeting = "hello two way binding";
  greeting2 = "hello no two way binding";

  callingByEvent($event) {
    alert($event.keyCode);
  }

  sayHello() {
    alert("hello everybody");
  }

  onDivClicked($event) {
    console.log("div clicked");
  }

  onBtnClicked($event) {
    $event.stopPropagation();
    console.log("button clicked");
  }

  getValue(text) {
    console.log(text);
  }

  updateData(data) {
    this.greeting2 = data;
  }
}
