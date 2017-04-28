import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import Filter from '../components/Filter'


@inject('TodoStore','NewsStore') @observer
export default class Todo extends Component {

    render() {
        let { TodoStore } = this.props
        return (
            <div className="todo-list">
                <Header addItem={TodoStore.addItem}/>
                <TodoList todoList={TodoStore.todoList} deleteItem={TodoStore.deleteItem} filter={TodoStore.filter}/>
                <Filter setFilter={TodoStore.setFilter} showCount={TodoStore.showCount}/>
            </div>
        )
    }
}

