{
  /**
   * Type Alias: 타입을 직접 만들 수 있음
   */
  type Text = string;
  const name: Text = "wslee";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "wslee",
    age: 30,
  };

  // String Literal Types
  type Name = "name";
  const wsleeName: Name = "name";
}
