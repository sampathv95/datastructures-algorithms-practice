class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1;

        return this
    }
    pop(){
        if (this.length === 0) return undefined;
        let lastNode = this.tail;
        this.tail = lastNode.prev;
        lastNode.prev = null;
        this.length -= 1;
        return lastNode;
    }
    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode
        }
        this.length += 1;

        return this
    }
    shift(){
        if (this.length === 0) return undefined
        var removedNode = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = removedNode.next
        this.head.prev = null;
        removedNode.next = null;
        removedNode.prev = null;
        this.length -= 1
        return removedNode
    }
    get(ind){
        if(ind<0 || ind>=this.length) return null;
        let currNode;
        if (ind >= this.length/2){
            currNode = this.head;
            let currInd = 0
            while(currInd<ind){
                currNode = currNode.next;
                currInd += 1;
            }
        }
        else{
            currNode = this.tail;
            let currInd = this.length-1;
            while(currInd>ind){
                currNode = currNode.prev;
                currInd -= 1;
            }
        }
        return currNode
    }
    set(ind, val){
        let node = this.get(ind);
        if (node != null){
            node.val = val;
            return true;
        }
        return false
    }
    remove(ind){
        if (this.length === 0) return undefined
        if (ind === 0) return this.shift()
        if (ind == this.length-1) return this.pop()
        let node = this.get(ind)
        if (node != null){
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
            this.length -= 1;
            return node
        }
        else{
            return undefined;
        }
    }
    insert(ind, val){
        newNode = new Node(val)
        let beforeNode = this.get(ind)
        if (beforeNode !== null){
            afterNode = beforeNode.next;
            newNode.prev = beforeNode;
            beforeNode.next = newNode;
            newNode.next = afterNode;
            afterNode.prev = newNode;
            this.length += 1;

            return true
        }
        else{
            return undefined;
        }
    }
    reverse(){
        let temp;
        let currNode = this.head;
        while (currNode !== null){
            temp = currNode.prev;
            currNode.prev = currNode.next;
            currNode.next = temp;
            currNode = currNode.prev;
        }
        this.tail = this.head;
        this.head = temp.prev;
        return this
    }
}

dll = new DoublyLinkedList()
dll.push(64)
dll.push(100)
dll.push(128)
dll.push(256)
dll.push(70)
dll.push(22)
//console.log(dll.set(1, 32))
//console.log(dll.remove())
console.log(dll.reverse())


