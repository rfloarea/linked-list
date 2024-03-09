// LinkedList Class

class LinkedList {
    // this allows head to initialize to null while being open to future changes
    constructor(head = null) {
        this.head = head;
    };

    // empty the list
    clear() {
        this.head = null;
    };

    // return the first node in the list
    head() {
        return this.head;
    };

    // return the last node in the list
    tail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            };
        };
        return lastNode;
    };

    // return the total number of nodes in the list
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;  
    };

    // add a new node to the start of the list
    prepend(node) {
        node.next = this.head;
        this.head = node;
    }

    // add a new node to the end of the list
    append(node) {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            };
        };
        lastNode.next = node;
    }

    // remove the last node from the list
    pop() {
        let lastNode = this.head;
        if (lastNode.next) {
            // find the penultimate node
            while (lastNode.next.next) {
                lastNode = lastNode.next;
            }
        }
        // pop the last node by setting the penultimate node's "next" to null
        lastNode.next = null;
    }

    // returns true if the passed in value is in the list, otherwise returns false
    contains(seekingFor) {
       
    }

    // returns the node at the given index
    at(index) {
    
    }

    // returns the index of the node, or null if not found
    find(node) {

    }

    // inserts a new node at the given index
    insertAtValue(node, index) {
    
    }

    // removes the node at the given index
    removeAt(index) {
    
    }

    // represents the LinkedList objects as strings, so we can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`
    toString() {
    }
}

// Node Class

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}