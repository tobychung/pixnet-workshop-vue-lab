<template>
  <div class="member-edit">
    <h1 class="greeting">個人編輯頁面</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { VueForm } from 'vue-form'
import { AVATAR_INITIAL } from '../constants.js'

export default {
  name: 'MemberEdit',
  data () {
    return {
      form: {
      },
      show: true,
      initialAvatar: AVATAR_INITIAL
    }
  },
  created () {

  },
  computed: {
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();

    },
    onReset (evt) {
      evt.preventDefault();
    }
  }
}
</script>


<style scoped>

.greeting {
  margin-top: 40px;
  margin-bottom: 0px;
}

.form-container {
  text-align: left;
}

.form-group {
  width: 600px;
  margin: 40px auto;
}

.range-point {
    float: left;
    margin-right: 11px;
    display: inline-block;
    transform: translateY(-4px);
}

.avatar {
  display: block;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}

.btn-reset {
  margin-left: 20px;
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



/* range */
.range-input-group input {
  -webkit-appearance: none;
  width: 160px;
  height: 20px;
  margin: 10px 50px;
  background: linear-gradient(to right, #16a085 0%, #16a085 100%);
  background-size: 150px 10px;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
  zoom: 130%;
  display: block;
  margin-left: 0;
  margin-bottom: 20px;
}

.range-input-group input::-webkit-slider-thumb {
 -webkit-appearance: none;
 width: 20px;
 height: 20px;
 background: #27ae60;
 position: relative;
 z-index: 3;
}

.range-input-group input::-webkit-slider-thumb:after {
 content: " ";
 width: 160px;
 height: 10px;
 position: absolute;
 z-index: 1;
 right: 20px;
 top: 5px;
 background: #2ecc71;
}

</style>
