class Stack {
  constructor(initItem) {
    if(initItem) {
      this.stack = [initItem];
    } else {
      this.stack = [];
    }
  }
  pop() {
    this.stack.shift();
    return this;
  }

  push(item) {
    this.stack.unshift(item);
    return this;
  }

  get() {
    return this.stack[0];
  }
  reach() {
    if(this.stack.length > 1) {
      return this.stack[1];
    } else {
      return '';
    }
  }
}

module.exports = Stack;
