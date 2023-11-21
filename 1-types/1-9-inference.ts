/**
 * Type Inference
 */

// 원시타입은 타입을 생략하는게 좋다. (너무 뻔해서)
let text = "hello";

// default parameter 타입 추론
function print(message = "hello") {
  console.log(message);
}
print("hello");

/**
 * 함수 리턴 값 타입 추론, 엘리쌤은 함수의 리턴 값에 타입 추론하는 것을 좋아하지않음.
 * 그 이유는 함수가 길어질 경우 타입 파악이 함들어지기 때문임
 */
function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);

// 그래서 아래와 같이 리턴 타입을 꼭 적어주자.
function add2(x: number, y: number): number {
  return x + y;
}
const result2 = add2(1, 2);
