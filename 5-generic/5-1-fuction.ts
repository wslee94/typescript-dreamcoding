{
  // 숫자만 가능
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }

  // 이 함수를 이용하는 순간 타입이 any인 값이 리턴되므로 사용하지 않는게 좋음
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  const boal2 = checkNotNull<boolean>(true);
}
