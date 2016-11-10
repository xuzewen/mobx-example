import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'


let typelist = [
    {
        typeName: 'social',
        name: '社会'
    },
    {
        typeName: 'guonei',
        name: '国内'
    },
    {
        typeName: 'world',
        name: '国际'
    },
    {
        typeName: 'keji',
        name: '科技'
    },
    {
        typeName: 'tiyu',
        name: '体育'
    }
]

@inject('NewsStore') @observer
export default class Fetch extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
      this.props.NewsStore.fetch()
  }
  
  changeType(typeName) {
      this.props.NewsStore.changeType(typeName)
      this.props.NewsStore.fetch(typeName)
  }

  render() {
    let {NewsStore} = this.props
    return (
        <div className="fetch">
            <p>加载中:{NewsStore.loading.toString()}</p>
            <div className="type-list">
                {
                    typelist.map((item, index) =>
                        <span key={index} className={item.typeName == NewsStore.typeName ? 'active' : ''} onClick={this.changeType.bind(this, item.typeName)}>{item.name}</span>
                    )
                }
            </div>
            <ul>
            {
                NewsStore.data.map((item, index) =>
                    <li key={index}><img src={item.picUrl} /><a href={item.url}>{item.title}</a></li>
                )
            }
            </ul>
        </div>
    )
  }
}