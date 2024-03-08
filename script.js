console.log("it works!!")

// LinkedList Class

class LinkedList {
    constructor() {
        
    }

    append(value) {
        // adds a new node containing value to the end of the list
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
    }

    pop() {
        // removes the last element from the list
    }

    head() {
        // returns the first node in the list
    }

    tail() {
        // returns the last node in the list
    }

    at(index) {
        // returns the node at the given index
    }

    size() {
        // returns the total number of nodes in the list
    }

    contains(value) {
        // returns true if the passed in value is in the list and otherwise returns false.
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
    }

    insertAtValue(value, index) {
        // that inserts a new node with the provided value at the given index.
    }

    removeAt(index) {
        // that removes the node at the given index.
    }

    toString() {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`
    }
}

// Node Class

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}