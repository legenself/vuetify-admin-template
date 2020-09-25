import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// NProgress.configure({ showSpinner: false }) 

// const whiteList = ['/login', '/regis'] 

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  //if login
  if(store.getters.token&&store.getters.token.length!=0)
  {
    next()
  }else if(to.meta.noauth){
    next()
  }else{
    next({ path: '/login' })
  }
  //else in whitelist
  //else login
  NProgress.done() 
  // set page title
  // document.title = getPageTitle(to.meta.title)
  // var isLogin=false
  // if (isLogin) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done() 
  //   }  
  //   NProgress.done() 
  // } else {
  //   next()
  //   /* has no token*/
  //   NProgress.done() 
    // if (whiteList.indexOf(to.path) !== -1) {
    //   // in the free login whitelist, go directly
    //   next()
    // } else {
    //   // other pages that do not have permission to access are redirected to the login page.
    //   next(`/login?redirect=${to.path}`)
    //   NProgress.done()
    // }
  // }

})