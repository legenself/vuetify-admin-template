<template>
  <v-app id="inspire">
    <v-main class="bg">
      <vue-particles color='#fff' :particleSize='1' class="particles">

      </vue-particles>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
         
            sm="12"
            md="3"
            offset-md='8'
          >
            <v-card class="elevation-12 pa-5" >
              <v-card-text class="text-center">
                <h1>{{defaultSettings.title}}</h1>
              </v-card-text>
              <v-card-text>
                <v-form   >
                  <v-text-field dense
                    label="账户"
                    name="login" outlined v-model="input.account"
                    prepend-inner-icon="fa-user"
                    type="text" 
                    solo
                  ></v-text-field>

                  <v-text-field dense
                    outlined
                    id="password"
                    label="密码" v-model="input.password"
                    name="password"
                    solo
                    prepend-inner-icon="fa-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions> 
                <v-btn  @click="submit" color="primary">登录</v-btn>
                 <v-spacer/>
                <v-btn to="/register" text>已有账户，去登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import defaultSettings from '@/setting'
import {mapMutations} from 'vuex'
  export default {
  
    data: () => ({ 
      defaultSettings,
      input:{}
    }),
    methods:{
      ...mapMutations('user',['LOGIN']),
      submit(){
        this.$post('/api/user/login',this.input).then(res=>{
          this.LOGIN(res)
          this.$router.replace({path:"/"})
        })
      }
    }
  }
</script>
<style scoped>
::-webkit-scrollbar{
  display: none;
}
.particles{
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
}
.content{
  position: relative;
  z-index: 9999;
}
.bg{
background-image: linear-gradient(to left, #30cfd0 0%, #330867 100%);
}
</style>