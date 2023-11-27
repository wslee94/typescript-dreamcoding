{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }

      this.coffeeBeans += coffeeBeans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= CoffeeMachine.BEANS_GRAM_PER_SHOT * shots;
    }

    private preheat() {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const coffeeMachine: CoffeeMachine = new CoffeeMachine(100);
  coffeeMachine.fillCoffeeBeans(30);
  coffeeMachine.makeCoffee(2);

  const coffeeMachine2: CoffeeMaker = new CoffeeMachine(100);
  coffeeMachine2.fillCoffeeBeans(30);
  coffeeMachine2.makeCoffee(2);
}
