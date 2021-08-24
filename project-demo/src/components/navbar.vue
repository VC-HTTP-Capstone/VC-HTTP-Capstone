<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="../images/navicon.jpg" width="30" height="30" class="mr-3" alt="">
      <a id="navbar-main" class="navbar-brand mr-5" href="#">VC-HTTP&nbsp;&nbsp;&nbsp;Vue.js Practice</a>
      <form class="form-inline">
        <router-link to ="/main">
          <button class="btn btn-outline-secondary mr-3 navbar-item" type="button">Main</button>
        </router-link>
        <router-link to = "/todo">
          <button class="btn btn-outline-secondary mr-3 navbar-item" type="button">Todo</button>
        </router-link>
        <router-link to = "/issuer">
          <button class="btn btn-outline-secondary mr-3 navbar-item" type="button">Issuer</button>
        </router-link>
        <router-link to = "/wallet">
          <button class="btn btn-outline-secondary mr-3 navbar-item" type="button">Wallet</button>
        </router-link>
        <router-link to = "/verifier">
          <button class="btn btn-outline-secondary mr-3 navbar-item" type="button">verifier</button>
        </router-link>
      </form>
      <!-- <router-link to = "/test1" class="navbar-item ml-auto">test1</router-link>
      <router-link to = "/test2" class="navbar-item">test2</router-link> -->
    </nav>
  </div>
</template>

<script>
export default {
  methods : {
        refreshAll() {
            // 새로고침
            this.$router.go();
        }
    }
}
</script>
<style scoped>
.header {
}
.header .router-link-exact-active {

}
.header a {

}

#navbar-main {
  font-size: 32px;
  font-family: 'Recursive', sans-serif;
  font-family: 'Source Code Pro', monospace;
  font-family: 'Varela Round', sans-serif;
}
.navbar-item {
  font-size: 24px;
  color: white;
  font-family: 'Recursive', sans-serif;
  font-family: 'Source Code Pro', monospace;
  font-family: 'Varela Round', sans-serif;
  margin-bottom: 21px;
  /* margin-right: 100px; */
}
</style>
