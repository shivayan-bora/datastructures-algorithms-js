// Stack implementation
const Stack = function() {
    this.storage = {};
    this.count = 0;

    // Adds a value onto the top of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count += 1
    }

    // Removes and returns the value at the top of the stack
    this.pop = function() {
        // If there are no items in the stack, return
        if(this.count === 0) {
            return undefined
        }

        // If the stack is not empty, remove the value at the top from the stack and return it
        this.count -= 1
        let value = this.storage[this.count]
        delete this.storage[this.count]
        return value
    }

    // Returns the value at the top of the stack without removing it, unlike pop()
    this.peek = function() {
        return this.storage[this.count - 1]
    }

    // Returns the size of the stack
    this.size = function() {
        return this.count
    }
}