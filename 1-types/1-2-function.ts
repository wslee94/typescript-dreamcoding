{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: number): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter ✨
  function printName(firstName: string, lastName?: string) {
    console.log(firstName, lastName);
  }
  printName("Steve", "Jobs");
  printName("Ellie");

  // Default parameter ✨
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage("Hello Worlds");
  printMessage();

  // Rest parameter ✨
  function addNumbers(...num: number[]): number {
    return num.reduce((acc, curr) => acc + curr, 0);
  }
  addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
