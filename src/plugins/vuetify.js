import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa',
    },
    lang: {
        current: 'zhHans',
    },
    theme:{
        dark:false,
        themes: {
            dark: {
              primary: colors.indigo.darken4,
              secondary: colors.grey.darken3,
              accent: colors.shades.black,
              error: colors.red.accent3,
            },
            light: {
              primary: colors.blue.darken4,
            },
          }
    }
}

export default new Vuetify(opts)