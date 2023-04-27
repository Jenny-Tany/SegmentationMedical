//index.js
//导入axios
import axios from 'axios'
// import QS from 'qs'

//创建axios实例
const service = axios.create({
	//统一的url前缀
	baseURL:"http://10.33.68.59:8080",
	//超时时间
	timeout:5000,
	//自定义请求头
	headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
})

//request请求拦截
service.interceptors.request.use(config => {
	//判断token是否存在，存在则向请求头添加token信息
	if(sessionStorage.getItem("token")){
		config.headers.Authorization = sessionStorage.getItem("token") 
	}
	return config
}),err => {
	//对请求错误进行处理
	return Promise.reject(err)
}

//response 响应拦截
service.interceptors.response.use(response => {
const date = res.date
	//成功获取信息
	if(date.code == 200){
		return date
	}
	return response
}),err => {
	//对响应错误进行处理
	return Promise.reject(err)
}


//get接口封装
export function get(url,params) {
	return new Promise((resolve,reject) => {
		axios.get(url,params).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

//post接口封装
export function post(url,date) {
	return new Promise((resolve,reject) => {
		axios.post(url,date).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	}) 
}

export default service
