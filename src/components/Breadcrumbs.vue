<template>
  <v-breadcrumbs class="ma-0 pa-0" :items="levelList"></v-breadcrumbs>
</template>
<script>
export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      // const first = matched[0]

      // if (!this.isDashboard(first)) {
      //   matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      // }

      this.levelList = matched
        .filter(
          item => item.meta && item.meta.title && item.meta.breadcrumb !== false
        )
        .map(value => {
          return {
            text: value.meta.title,
            to: value.path,
            disabled: value.redirect != undefined
          };
        });
      // console.log(matched)
    }
  }
};
</script>