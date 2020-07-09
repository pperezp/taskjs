class Task{
    constructor(id, text){
        this.id = id;
        this.father = null;
        this.sonsId = new Array();
        this.done = false;
        this.text = text;
    }

    addSon(son){
        this.sonsId.push(son.id);
        son.father = this.id;
    }

    removeSon(son){
        let index = this.sonsId.indexOf(son.id);
        this.sonsId.splice(index, 1);
        this.removeFather(son);
    }

    removeFather(son){
        son.father = null;
    }

    complete(){
        this.done = true;
    }

    uncomplete(){
        this.done = false;
    }
}

var root = new Task(1, "Primera tarea");

var son1 = new Task(2, "Sub tarea 1");
var son2 = new Task(3, "Sub tarea 2");
var son3 = new Task(4, "Sub tarea 3");

root.addSon(son1);
root.addSon(son2);
root.addSon(son3);

console.log(root);

root.removeSon(son1);

root.complete();
console.log(root);