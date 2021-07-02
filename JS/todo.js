const prompt = require('prompt-sync')();

class ToDoList {
    constructor() {
        this.list = [];
    }

    addItem() {
        let item = prompt("Enter a new task: ");
        this.list.push(item);
    }

    listItems() {
        for (let elem of this.list) {
            console.log(elem);
        }        
    }

    deleteItem() {
        let item = prompt("Enter a task to delete: ");
        let ind = this.list.indexOf(item);
        this.list.splice(ind, 1);
    }

    getInput() {
        let breaker = true;
        while(breaker) {
            let command = prompt("Enter Input: ");
            switch (command) {
                case "new":
                    this.addItem();
                    break;
                case "list":
                    this.listItems();
                    break;
                case "delete":
                    this.deleteItem();
                    break;
                case "quit":
                    breaker = false; 
                    break;
            }
        }



    }
}



let sim = new ToDoList();
sim.getInput();