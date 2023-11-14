{
  // Array
  const fruits: string[] = ["🍅", "🥝"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(arr: readonly string[]) {}
  // function printArray(arr: readonly Array<number> ) {} // readonly에 Array Generic 방식은 에러가 발생함

  // Tuple, 엘리쌤은 권장하지 않는다고함, 인덱스로 접근하므로 가독성이 떨어짐 -> interface, type alias, class 로 대체가능
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
  // 리액트는 튜플을 잘 사용한 예라고함
  // const [count, setCount] = useState(0)
}
