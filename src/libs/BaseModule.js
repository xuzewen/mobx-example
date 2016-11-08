import React, {Component}from 'react'
import md5 from 'md5'
import util from './util'
import url from './url'
import config from './config'
import io from './io'



export default class BaseModule extends Component {

    constructor(props) {
        super(props);

        this.state = {}
        this.query = props.location ? props.location.query : url.query()
        this.util = util
        this.config = config
        this.md5 = md5
        this.get = io.get
    }
};
