class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop(){
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
    }

    shift(){
        if (!this.head) return undefined
        this.head = this.head.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return this.head
    }

    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode = this.head
            this.head = newNode
        }
        this.length++ 
        return this
    }

    get(index){
        if(index < 0 || index >=this.length) return null;

        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }

        return current
    }

    set(index, val){
        const found = this.get(index)
        if(found){
            found.val = val
            return true
        }
        return false
    }

    insert(index, val){
        let newNode = new Node(val)
        const indexedNode = this.get(index-1)
        console.log(indexedNode)
        newNode.next = indexedNode.next
        indexedNode.next = newNode
        this.length++
        return this
    }

    remove(index){
        const prev = this.get(index-1)
        const found = this.get(index)
        prev.next = found.next
        this.length--
        return this
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null, next;

        for(let i = 0; i<this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }
}
