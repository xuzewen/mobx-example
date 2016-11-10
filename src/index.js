import './css/css.less'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { useStrict } from 'mobx'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import DevTools from 'mobx-react-devtools'
import rootStore from './stores'

import Todo from './containers/Todo'
import Fetch from './containers/Fetch'

useStrict(true);

const history = useRouterHistory(createHashHistory)({ queryKey: false })

function renderDevTools() {
    if (__DEBUG__) {
        return (
            <DevTools />
        )
    }

    return null
}

class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
}


const routes = (
    <Route path="/" component={Page}>
        <IndexRedirect to="index" />
        <Route path="index">
            <IndexRoute component={Todo} />
        </Route>
        <Route path="fetch">
            <IndexRoute component={Fetch} />
        </Route>
    </Route>
)



export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router history={history}>
                {routes}
            </Router>
        )
    }

}




render(
    <div>
        <Provider {...rootStore}>
            <App />
        </Provider>
        {renderDevTools()}
    </div>
    , document.getElementById('root'))