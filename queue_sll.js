class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.length = 0;
        this.first = null;
        this.last = null;
    }
    push(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    pop(){
        if (this.length === 0) return undefined
        var removedNode = this.first;
        if (this.length === 1){
            this.first = null
        }
        this.first = this.first.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }
}

stack = new Stack()
stack.push(10);
stack.push(23)
stack.push(123)
console.log(stack)
console.log(stack.pop())
console.log(stack)