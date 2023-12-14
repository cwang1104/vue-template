//用户相关
import { defineStore } from "pinia";
import { reqLogin } from "../../api/user";
import type { loginForm } from "@/api/user/type";

let useUserStore = defineStore('User',{
    state:()=>{
        return {
            token:''
        }
    },

    //异步|逻辑
    actions:{
       async userLogin(data: loginForm){
            console.log("logindata")
            console.log(data)
            //登录请求
        
            let result = await reqLogin(data)
            console.log(result)
            if (result.code === 200) {
                this.token = result.data.token
                localStorage.setItem('TOKEN',this.token)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.msg))
            }
        }
    },
    getters:{

    }
})

export default useUserStore;