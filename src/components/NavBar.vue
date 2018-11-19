<template>
    <div class="nav-bar">
        <router-link :to="'/'">所有人的名片</router-link>
        <span>|</span>
        <router-link :to="'/member/me'">我的個人頁面</router-link>
        <span>|</span>
        <router-link :to="'/member/edit'">編輯我的頁面</router-link>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
    float: right;
    line-height: 36px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
