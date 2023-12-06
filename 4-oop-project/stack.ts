{
  interface StackInterface {
    push(item: string): void;
    pop(): string;
  }

  class Node {
    private _next: Node | null;
    private _item: string;

    constructor(next: Node | null, item: string) {
      this._next = next;
      this._item = item;
    }

    get next(): Node | null {
      return this._next;
    }

    get item(): string {
      return this._item;
    }
  }

  class Stack implements StackInterface {
    private _size: number;
    private head: null | Node;

    constructor() {
      this._size = 0;
      this.head = null;
    }

    get size() {
      return this._size;
    }

    push(item: string) {
      if (!this.head) {
        const node = new Node(null, item);
        this.head = node;
      } else {
        const node = new Node(this.head, item);
        this.head = node;
      }
      this._size++;
    }

    pop(): string {
      if (!this.head) {
        throw new Error("Stack is empty");
      }

      const node = this.head;
      this.head = node.next ? node.next : null;
      this._size--;
      return node.item;
    }

    print(): void {
      let node = this.head;
      while (node) {
        console.log(node.item);
        node = node.next;
      }
    }
  }

  const stack = new Stack();
  stack.push("pizza");
  stack.push("hamberger");
  stack.push("cheese");
  stack.print();
  console.log("\n");
  stack.pop();
  stack.pop();
  stack.print();
}
