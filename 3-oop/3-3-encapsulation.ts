{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
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
  coffeeMachine.fillCoffeeBeans(30);
  console.log(coffeeMachine.makeCoffee(4));

  // getter setter
  class User {
    constructor(
      private firstName: string,
      private lastName: string,
      private internalAge: number
    ) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error("age should be greater than 0");
      }

      this.internalAge = num;
    }
  }
}
