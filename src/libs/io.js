
import md5 from 'md5';
import io from './reqwest';
import config from './config';

let {user_platform_domain} = config;

let ajax = {
    get:function(path, param, callback, errorCallback, option){

        //如果没有user_platform_domain就添加
        let domain = user_platform_domain
        path = path.indexOf('http://') == -1 ? domain + path : path;
        option = Object.assign({
            type:'jsonp',
            method:'get'
        }, option || {});


        //console.log( isSameuser_platform_domain )
        param  = param || {};
        if( !param.ver ){
            param.ver = '1.0';
        }

        //删除明显多余的参数传递

        if( param ){
            for(let key in param){
                if( param[key] == undefined || param[key] == null  || param[key] == ''){
                    delete param[key];
                }
            }
        }

        let isResult = false
        io({
            url:path,
            //对请求进行简单的加密
            data:param,
            type:option.type,
            // dataType:option.dataType,
            // timeout:30000,
            // withCredentials:true,
            error:function(result, status){
                isResult = true;
                result = result.msg || {msg:'请求失败，请稍后再试'};
                errorCallback && errorCallback(result);
            },
            success:function(result){
                isResult = true;
                callback && callback(result)
            }

        });

        setTimeout(function(){
            if(isResult == false){
                errorCallback && errorCallback({msg:'网络超时'})
            }
        }, 60000);
    },

    //加密参数
    md5Param:function( param ){

        let paramList = [];
        //固定加密参数
        param['__sign__'] = '39a7daceb6a952257bc874f30553f8eb';

        for(let key in param){
            paramList.push(key+'='+param[key]);
        }

        param.md5 = md5( paramList.sort().join('') );

        delete param['__sign__'];

        return param;
    },
    //文具请求 api 和 请求参数 制作唯一的缓存 key
    generateCacheKey:function(api, param){

        let key = md5( api +  JSON.stringify(param || {}) );
        return key;

    },
    a:1

}

window.yuantu_io = ajax;

module.exports = ajax;
