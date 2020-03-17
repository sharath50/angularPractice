export class serviceOneService {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pairs = [
    { name: "sharath", place: "belur", role: "web dev", pincode: "573 115" },
    { name: "sharath", place: "belur", role: "web dev", pincode: "573 115" },
    { name: "sharath", place: "belur", role: "web dev", pincode: "573 115" }
  ];

  getNumbers() {
    return this.numbers;
  }
}
