{
  /**
   * Enum
   */

  // JavaScript
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });

  // TypeScript
  // 모두 대문자료 표기하지 않고 파스칼 케이스를 사용
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday = "wed",
  }
  console.log(Days.Monday);
  console.log(Days.Tuesday);
  console.log(Days.Wednesday);

  // 엘리쌤이 TypeScript에서 Enum은 가능한 쓰지 말아야한다라고 했으나...
  let day: Days = Days.Tuesday; // Days로 자동 추론
  day = 1000; // ts 5.0 부터는 이 문제가 해결된 것 같다. (다른 숫자 무엇이든 할당 가능했었다...)

  // 엘리쌤은 Union 타입을 자주 사용한다고 한다. 하지만 가독성을위해 긴 문자열의 상수라면 Enum을 사용하기도 한다고함
  type DaysOfWeek = "Monday" | "Tuesday" | "wednesday";
  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Tuesday";
}
