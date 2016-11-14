import React, { Component } from 'react'
import TodoItem from './TodoItem'
import {observer} from 'mobx-react';

@observer
export default class TodoList extends Component{
    constructor(props) {
        super(props)
    }
    
    render() {
        // console.log(this.props.todoList)
        return (
            <ul>
                {
                    this.props.todoList.map((item,index) =>{
                            if(this.props.filter == ''){
                                return <TodoItem key={index} item={item} deleteItem={this.props.deleteItem}/> 
                            }else if(this.props.filter && (item.index+'').indexOf(this.props.filter) != -1){
                                return <TodoItem key={index} item={item} deleteItem={this.props.deleteItem}/> 
                            }
                        }
                    )
                }
            </ul>
        )
    }
}