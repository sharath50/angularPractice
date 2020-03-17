import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: []
})
export class BindingComponent {
  // input decorator - in this way we can take input from other components
  @Input() otherItems;

  // alias name requiredItems is used to listen from other components
  // but to use the data we can use externalItems as property name
  @Input("requiredItems") externalItems;

  // output decorator - to expose event bindings
  @Output() delete = new EventEmitter();

  // with alias
  @Output("updateRequest") update = new EventEmitter();

  title = "binding in angular from binding component";
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

  // used to demonstrate @Input @Output directive
  onDelete() {
    this.delete.emit("this item deleted"); // we can pass any items inside emit method
  }

  onUpdate() {
    this.update.emit("this is updated content"); // we can pass any items inside emit method
  }
}
