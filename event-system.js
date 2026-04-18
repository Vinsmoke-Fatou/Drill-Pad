class EventEmitter {
    #listFunctions = {};
    

    on(event, listener){
        if (this.#listFunctions[event]) 
            this.#listFunctions[event].push(listener);
        else
            this.#listFunctions[event] = [listener];
    }

    emit(event, ...args){
        if (this.#listFunctions[event]) {
            this.#listFunctions[event].forEach(listener => listener(...args));
        } else {
            throw new Error("Event doesn't exist");
        }
    }

    off(event, listener){
        if (this.#listFunctions[event])  this.#listFunctions[event] = this.#listFunctions[event].filter(l => l !== listener);
    }
}
