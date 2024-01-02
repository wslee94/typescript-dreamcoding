function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log("making... ☕️");
  // };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making... ☕️");
};

function LatteMachine(milk) {
  this.milk = milk;
}

// 상속
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
// 필요하다면 추가할 수 있음
// LatteMachine.prototype.XXX
console.log(LatteMachine.prototype);

const latteMachine = new LatteMachine(123);
latteMachine.makeCoffee();
