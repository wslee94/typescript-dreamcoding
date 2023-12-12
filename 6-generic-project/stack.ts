{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
      return this._size;
    }
    push(value: T): void {
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      // 아래의 경우 null과 undefined 모두 걸림 (방어 코딩)
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }

      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<number>();
  // stack.push("Ellie 1");
  // stack.push("Bob 2");
  // stack.push("Steve 3");
  stack.push(1);
  stack.push(2);
  stack.push(3);
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
