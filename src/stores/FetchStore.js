import {observable, computed, autorunAsync, action, autorun} from 'mobx'
// import io from '../libs/io'
import fetch from 'isomorphic-fetch'



export default class FetchStore{
    @observable data
    @observable errorMsg
    @observable loading
    @observable typeName

    constructor(){
        this.data = []
        this.errorMsg = ''
        this.loading = false
        this.url = ''
        this.typeName = 'social'
    }

    @action fetch = ()=>{
        this.onRequest()
        fetchApi(`http://api.huceo.com/${this.typeName}/${this.url}`).then(
            this.onSuccess,
            this.onFailed
        )
    }

    @action onRequest = ()=>{
        this.loading = true
    }

    @action onSuccess = (result)=>{
        this.loading = false
        this.data = result.newslist
    }

    @action onFailed = (err)=>{
        this.loading = false
        this.errorMsg = err.msg
    }
}



function fetchApi(url){
    return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
}

function checkStatus(response) {
  if ((response.status >= 200 && response.status < 300) || response.status == 304) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}



