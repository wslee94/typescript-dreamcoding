{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array ...
   */

  // number
  const num: number = 10;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = true;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 어떤 타입이 들어올 지 모른다.(겸손한 버전) 가능한 한 완전 피하는게 좋다. 사용하는 이유는 자바스크립트 라이브러리와 호환하기 위해 사용한다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩 어떤 타입이든 들어올 수 있다.(당당한 버전) 가능한 한 완전 피하는게 좋다.
  let anything: any = 0;
  anything = "hello";

  // void: 함수의 리턴 값이 undefined 이다.
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never: 함수에 리턴 값이 없다. void는 return;이 생략된 경우임
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // 이 경우도 never임
    // while (true) {}
  }
  let neverEnding: never; // 💩

  // object: 💩 원시 타입을 제외한 모든 타입이 가능함, 타입은 가능한 최대한 구체적으로 정의해야함
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "wslee" });
  acceptSomeObject({ animal: "dog" });
}
