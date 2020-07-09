class Board{
    constructor(){
        this.tasks = new Array();
        this.add(new Task(1, "Root task"));
    }

    add(newTask){
        this.tasks.push(newTask);
    }

    addTask(fatherId, taskText){
        let task = this.find(fatherId);

        if(this.exist(task)){
            let newTask = this.create(taskText);
            task.addSon(newTask);
            this.add(newTask);
        }else{
            console.log("["+fatherId+"] not found");
        }
    }

    removeTask(taskId){
        let task = this.find(taskId);

        if(this.exist(task)){
            let fatherId = task.getFather();
            let father = this.find(fatherId);

            father.removeSon(task);
            this.remove(task);
        }else{
            console.log("["+taskId+"] not found");
        }
    }

    exist(task){
        return task != undefined;
    }

    create(taskText){
        let id = this.getNextId();
        let newTask = new Task(id, taskText);

        return newTask;
    }

    find(fatherId){
        for(let task of this.tasks){
            if(task.id == fatherId){
                return task;
            }
        }
    }

    remove(taskToRemove){
        let index = this.tasks.indexOf(taskToRemove);
        this.tasks.splice(index, 1);
    }

    getNextId(){
        return Util.UUID();
    }
}
