class Stack {
    constructor(size) {
        this.stack = [];
        this.size = size;
    }
    
    push(elem) {
        if (this.isFull() === false) {
            this.stack.push(elem);
        }
        else {
            console.log("Error 0: can't push when stack full!");
            return;
        }
    }

    pop() {
        if (this.isEmpty() === false) {
            this.stack.pop();
        }
        else {
            console.log("Error 1: can't pop when stack empty!");
            return;
        }
    }

    isEmpty() {
        if (this.stack.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    isFull() {
        if (this.stack.length === 4) {
            return true;
        }
        else {
            return false;
        }
    }

    peek() {
        if (this.isEmpty() === false) {
            return (this.stack[this.stack.length-1]);
        }
        else {
            // console.log("Error 2: can't peek when stack empty!");
            return ("Error 2: can't peek when stack empty!");
        }
    }
}

const myStack = new Stack(4);

console.log(myStack.isEmpty())
console.log(myStack.isFull())
console.log(myStack.peek())
myStack.push("ee")
myStack.pop()