<template>
    <div class="nav-bar">
    </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'NavBar',
}
</script>


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
