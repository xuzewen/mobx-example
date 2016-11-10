import React, { Component } from 'react'
import {observer} from 'mobx-react';

@observer
export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    filter(e) {
        this.props.setFilter(e.target.value)
    }
    
    render() {
        return (
            <div>
                过滤号码：<input type="text" onKeyUp={this.filter.bind(this)}/>
                <p>显示数量：{this.props.showCount}</p>
            </div>
        )
    }
}