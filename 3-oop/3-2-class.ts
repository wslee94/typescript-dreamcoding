{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT: number = 7;
    coffeeBeans: number;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < CoffeeMachine.BEANS_GRAM_PER_SHOT * shots) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= CoffeeMachine.BEANS_GRAM_PER_SHOT * shots;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMachine = new CoffeeMachine(100);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);
}
