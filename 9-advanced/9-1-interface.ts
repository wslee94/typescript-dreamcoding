{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object (both)
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class (both)
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: 1;
  }

  // extends (both)
  type ZPositionType = PositionType & { z: number };
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  // merge (only interface)
  interface PositionInterface {
    z: number;
  }

  // computed properties (only type)
  type Person = {
    name: string;
    age: number;
  };
  type name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";

  // utility (only type), 강의 후반 부에 설명 예정
}
