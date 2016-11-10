import {observable, computed, autorunAsync, action, autorun} from 'mobx'
import io from '../libs/io'
import FetchStore from './FetchStore'


class NewsStore extends FetchStore{

    constructor(){
        super()
        
        this.num = 10
        this.key = 'faf10506f4b71ba3113a8125f92d0e7f'
        this.url = `?key=${this.key}&num=${this.num}`
    }

    @action changeType = (typeName)=>{
        this.typeName = typeName
    }
}

const newsStore = new NewsStore()

export default newsStore;



