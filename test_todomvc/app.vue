<template>
        <div>
            <section class="todoapp" v-cloak>
                <header class="header">
                    <h1>todos</h1>
                    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"  v-model="newTaskContent" @keyup.enter="addTask">
                </header>
                <section class="main" >
                    <input class="toggle-all" type="checkbox" v-model="toggle" @change="toggleAll(toggle)">
                    <ul class="todo-list">
                        <li class="todo" :class="{'editing': editingId==task.id}" v-for="task in tasks" :key="task.id">
                            <div class="view">
                                <input class="toggle" type="checkbox" v-model="task.isCompleted" >
                                <label v-text="task.content" @dblclick="showEdit(task.id)"></label>
                                <button class="destroy" @click="del(task.id)"></button>
                            </div>
                            <input class="edit" type="text" v-model="task.content" @blur="save">
                        </li>
                    </ul>
                </section>
                <footer class="footer" >
                    <span class="todo-count">
                        <strong ></strong> 99 left
                    </span>
                    <ul class="filters">
                        <li><a href="#/all" >All</a></li>
                        <li><a href="#/active" >Active</a></li>
                        <li><a href="#/completed" >Completed</a></li>
                    </ul>
                    <button class="clear-completed" >
                        Clear completed
                    </button>
                </footer>
        </section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Written by <a href="http://evanyou.me">Evan You</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        </div>
</template>
<script>
export default {
    data() {
        return {
            tasks: [{
                id:1,
                content: "sleeping",
                isCompleted: false
            },{
                id: 2,
                content: "eating",
                isCompleted: true
            }],
            newTaskContent: "",
            editingId: -1,
            toggle: false
        }
    },methods: {
        //删除元素
        del(id){
            // for (var i = 0; i < this.tasks.length; i++) {
            //     if(this.tasks[i].id == id){
            //         this.tasks.splice(i,1);
            //     }
            // }
            // es6
            let index = this.tasks.findIndex((ele) => {
                return ele.id == id;
            });
            console.log(index);

            if(index == -1){
                alert("删除失败！！");
            }

            this.tasks.splice(index,1);
        },
        addTask(){
            let maxId=0;

            this.tasks.forEach((ele) => {
                if(ele.id > maxId) maxId = ele.id;
            });

            maxId++;

            this.tasks.push({
                id: maxId,
                content: this.newTaskContent,
                isCompleted: false
            });

            this.newTaskContent = "";
            console.log(this.tasks);
        },
        showEdit(id){
            this.editingId = id;
        },
        save(){
            this.editingId = -1;
        },
        toggleAll(toggle){

            this.tasks.forEach((ele) => {
                ele.isCompleted = toggle;
            })
        }
    },
    watch: {
        tasks: {
            handler: function(val, oldVal){
                let istogAll = true;
                this.tasks.forEach((ele) => {
                    if(!ele.isCompleted){
                        istogAll = false;
                    }
                });
                this.toggle = istogAll;
            },
            deep: true
        }
    }
}
</script>
<style>
.d {
    background-color: red;
    height: 200px;
}
</style>
