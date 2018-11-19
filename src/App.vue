<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <img class="logo" src="./assets/images/logo-pixnet.png">
      </router-link>
      <NavBar/>
    </div>
    <div class="divide-line" />
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'



export default {
  name: 'App',
  metaInfo: {
    title: 'PIXNET workshop ',
    titleTemplate: '%s - 實戰一波',
    link: [
      { rel: 'favicon', href: 'favicon.ico' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    }
  },
  components: {
    NavBar
  },
  created () {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
}

.header {
  overflow: hidden;
}

.logo {
  float: left;
  width: 136px;
  height: 36px;
}

.divide-line {
  margin-top: 20px;
  border-bottom: 2px solid #efefef;
}

</style>
