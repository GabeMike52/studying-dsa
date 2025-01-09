class LinkedList {
    head;
    size;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    length() {
        return this.size;
    }

    //Add a new node to the start of the List
    // O(1)
    add(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    //Append a new node to the end of the list
    // O(n) -> can be O(1) with a tail attribute pointing to the last element
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    //Insert a new node at said index in the list
    // O(n) -> there are no true indexes in a LinkedList
    insert(value, index) {
        const node = new Node(value);
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.add(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    //Remove a node at said index from the list
    // O(n) -> same thing as insert.
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    //Remove a certain node if it's value equals the passed value
    // O(n) -> it has to run the whole list in the worst case
    remove(value) {
        if (list.isEmpty()) {
            return null;
        }
        if (value === this.head.value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value != value) {
                prev = prev.next;
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    show() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
