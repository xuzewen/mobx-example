import {observable, computed, autorunAsync, action} from 'mobx'

class TodoItem{
    @observable text
    @observable index

    constructor(text, index){
        this.text = text
        this.index = index
    }
}

class TodoStore{
    index;
    @observable todoList
    @observable filter

    constructor() {
        this.todoList = [new TodoItem('111',1),new TodoItem('222',2)]
        this.filter = ''
        this.index = 2
    }

    @computed get showCount() {
		return this.todoList.reduce(
			(sum, todo) => sum + ((todo.index + '').indexOf(this.filter) == -1 ? 0 : 1),
			0
		)
	}

    @action addItem = (text)=>{
        this.todoList.push(new TodoItem(text, ++this.index))
    }

    @action deleteItem = (item)=>{
        this.todoList.splice(this.todoList.indexOf(item), 1)
    }

    @action setFilter = (filter)=>{
        this.filter = filter
    }
}

const todoStore = new TodoStore()

export default todoStore;