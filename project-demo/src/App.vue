<template>
  <div class="body" id="app">
    <nav-bar></nav-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
export default {
  name: 'app',
  data() {
    return {
      msg: 'Test',
      todoItems: [],
    }
  },
  components: {
    NavBar,
  },
}
</script>

<style scoped>
.body {
  background-color: #FFFFFF;
}
.page-enter-active, .page-leave-active {
  transition: opacity .4s;
}
.page-enter, .page-leave-to  {
  opacity: 0;
}

</style>
