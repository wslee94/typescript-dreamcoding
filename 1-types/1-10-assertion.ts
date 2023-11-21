{
  /**
   * Type Assertion 💩
   * 정말 정말 타입을 장담할 수 있을 때 사용하고 그 외에는 사용하지 않는다.
   */

  // 아래와 같이 자바스크립트 함수가 있다고 가정해보자. 이 함수에서 무조건! string 타입을 리턴한다고 장담할 수 있으면 아래와 같이 쓸 수 있다.
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 5가 출력됨
  console.log((<string>result).length); // 5가 출력됨

  // 하지만 만약 장담한 타입이 아닐 때는 문제가 될 수 있다.
  function jsStrFunc2(): any {
    return 2;
  }
  const result2 = jsStrFunc2();
  console.log((result2 as string).length); // undefined가 출력됨

  // 아래의 경우 런타임 도중 애플리케이션이 뻗을 수 있다.
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱

  // 아래처럼 Type Assertion이 필요한 경우가 있긴 하다.
  const button = document.querySelector("class")!;
  button.addEventListener("click", () => {});

  // 아래 코드는 위와 같음
  // const button = document.querySelector("class");
  // button!.addEventListener("click", () => {});

  // 위 코드가 아니면 이렇게 코딩해야함!
  if (button) {
    button.addEventListener("click", () => {});
  }
}
