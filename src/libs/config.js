
// server 的配置
var config = {
	//user-web server domain
	'user_platform_domain':'http://api.yuantutech.com',
	// 'user_platform_domain':'http://guahao.jkqd.gov.cn',
	//spm domain
	'traceUrl': 'http://114.55.0.146:3003?',
	'PIROS_url': 'http://s.yuantutech.com/tms/piros'
}

let href = window.location.href;

if( href.indexOf('http://192.168.') != -1
	|| href.indexOf('http://127.0.0.1') != -1
	|| href.indexOf('http://a.daily.yuantutech.com') != -1
	|| href.indexOf('http://daily.yuantutech.com') != -1
	|| href.indexOf('http://0.0.0.0') != -1
	|| href.indexOf('http://172.16.46.2') != -1
	|| href.indexOf('http://172.27.35.2') != -1
){

	//测试环境使用 uat 的 server
	config = {
		//'user_platform_domain':'http://api.uat2.yuantutech.com',
		'user_platform_domain':'http://api.daily.yuantutech.com',
		'traceUrl': 'http://112.124.118.39:3003?',
		'PIROS_url': 'http://daily.yuantutech.com/tms/piros'
	}

} else if (href.includes("//a.uat.yuantutech.com")!= -1
	|| href.indexOf('http://uat.yuantutech.com') != -1
){
	config = {
		'user_platform_domain':'http://virtual.uat.yuantutech.com',
		'traceUrl': 'http://112.124.118.39:3003?',
		'PIROS_url': 'http://uat.yuantutech.com/tms/piros'
	}
} else if (href.includes("http://mock.")){
	config = {
		'user_platform_domain':'http://fbi.yuantutech.com:3100/mock',
		'traceUrl': 'http://112.124.118.39:3003?',
		'PIROS_url': 'http://uat.yuantutech.com/tms/piros'
	}
}
//
// if( href.indexOf('http://guahao.jkqd.gov.cn') != -1){
// 	config.user_platform_domain = 'http://guahao.jkqd.gov.cn';
// }

window.config = config;

export default config;
