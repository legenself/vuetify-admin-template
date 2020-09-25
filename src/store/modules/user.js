
import Cookies from 'js-cookie'
const TOKEN_KEY='x-token'
const USERINFO_KEY='x-info'
// console.log(Cookies.get(TOKEN_KEY))
const state={
    token:Cookies.get(TOKEN_KEY),
    userinfo:Cookies.getJSON(USERINFO_KEY),
    msg:"",
}
const mutations={
    LOGIN(state,payload){
        state.token=payload.token
        state.userinfo=payload.user
 
        Cookies.set(TOKEN_KEY, state.token)
        Cookies.set(USERINFO_KEY, state.userinfo)
    },
    LOGOUT(state){
        state.token=undefined,
        state.userinfo=undefined,
        Cookies.remove(TOKEN_KEY)
        Cookies.remove(USERINFO_KEY)
    },
    RMESSAGE(state,payload){
        state.msg=payload
    }
}
const actions={

}

export default {
    namespaced:true,
    state,
    mutations,actions
}