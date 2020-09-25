<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <template v-for="(item,index) in menu">
          <v-list-item v-if="!item.children" link :to="item.link" :key="index">
            <v-list-item-action>
              <v-icon>{{item.icon}} fa-fw</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else :prepend-icon="item.icon" :key="index" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="sub in item.children" :key="sub.title" link :to="sub.link">
              <v-list-item-content>
                <v-list-item-title v-text="sub.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>{{sub.icon}} fa-fw</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense app dark clipped-left color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{defaultSettings.title}}</v-toolbar-title>
      <v-spacer/>
       <v-text-field
        hide-details outlined dense
        prepend-inner-icon="fa-search"
        single-line
      ></v-text-field>
         <v-spacer/>
         {{userinfo.account}}已登录
    </v-app-bar>
    <v-snackbar
      v-model="cmsg"
      timeout="1000"
    >
      {{ msg }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="cmsg = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-main>
      <v-container fluid>
        <Breadcrumbs />
        <router-view />
      </v-container>
    </v-main>

    <v-footer app padless>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import defaultSettings from "@/setting";
import {mapGetters} from 'vuex'
import Breadcrumbs from "@/components/Breadcrumbs.vue";
export default {
  components: {
    Breadcrumbs
  },
  computed:{
    ...mapGetters(['msg','userinfo']),
    'cmsg':{
      get(){
        return this.msg
      },
      set(newvalue){
        this.$store.commit('user/RMESSAGE',newvalue)
      }
    }
  },
  data: () => ({
    drawer: null,
    defaultSettings,
    menu: [
      {
        icon: "fa-tachometer-alt",
        title: "仪表盘",
        link: "/index"
      },
      {
        icon: "fa-users",
        title: "用户管理",
        children: [
          {
            icon: "fa-list",
            title: "查询",
            link: "/user/index"
          }
        ]
      },
    {
        icon: "fa-cogs",
        title: "设置",
        link: "/config"
      }
    ]
  }),
  created() {}
};
</script>