console.log("it works!!")

/* Questions 
1. How do we know what "next" is?
2. What actually is a "reference to the next node"?
    - "head" seems to just be some idea that we (humans) use for the purpose of writing this code.

*/

// LinkedList Class

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    // empty our list
    clear() {
        this.head = null;
    }

    // add a new node to the start of the list
    prepend(value) {
        
    }

    // add a new node to the end of the list
    append(value) {
    
    }

    // returns the first node in the list
    head() {
    
    }

    // removes the last element from the list
    pop() {
    
    }

    // returns the last node in the list
    tail() {
    
    }

    // returns the node at the given index
    at(index) {
    
    }

    // returns the total number of nodes in the list
    size() {
        
    }

    // returns true if the passed in value is in the list, otherwise returns false
    contains(value) {
    
    }

    // returns the index of the node containing value, or null if not found
    find(value) {

    }

    // inserts a new node with the provided value at the given index
    insertAtValue(value, index) {
    
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