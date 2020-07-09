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
    }

    complete(){
        this.done = true;
    }

    uncomplete(){
        this.done = false;
    }

    getFather(){
        return this.father;
    }
}