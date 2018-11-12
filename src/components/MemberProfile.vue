<template>
  <div class="member-info">

    <h1 class="greeting">這是 "{{ '無名氏' }}" 的個人資訊</h1>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClapHand from '../components/ClapHand'
import Radar from 'vue-radar'
import { AVATAR_INITIAL } from '../constants.js'

export default {
  name: 'MemberProfile',
  components: {
    ClapHand,
    'v-radar': Radar
  },
  computed: {
  },
  created () {
  },
  mounted(){
    this.drawLine();
  },
  data() {
    return {
    }
  },
  methods: {
    isMyself () {
      return false
    },
    drawLine () {
      // 初始化 echarts
      let myChart = this.$echarts.init(document.getElementById('myChart'))

      // 繪製圖表
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'center',
          data:['眾人之力','我的能力']
        },
        radar: [
          {
            indicator: [
                {text: '影響力', max: 100},
                {text: '社群力', max: 100},
                {text: '技術力', max: 100},
                {text: '原力', max: 100},
                {text: '業力', max: 100}
            ],
            radius: 80,
            center: ['50%','60%'],
          }
        ],
        series: [
          {
            type: 'radar',
            radarIndex: 0,
            data: [
                {
                    value: [50, 20, 40, 15, 65],
                    areaStyle: {type: 'default'},
                    name: '眾人之力'
                },
                {
                    value: [85, 90, 90, 95, 95],
                    name: '我的能力'
                }
            ]
          }
        ]
      });
    }
  }
}
</script>


<style scoped>

  .fl {
    float: left;
  }

  .greeting {
    margin: 40px auto;
  }

  .col-grp {
    width: 33%;
    float: left;
    text-align: left;
  }
  .info-group {
    margin-top: 70px;
  }

  .avatar-container {
    width: 100px;
    margin: auto;
  }
  .avatar {
    width: 100px;
    margin-bottom: 15px;
  }

  .badge {
    background-color: #2ecc71;
    border-radius: 20px;
    color: #fff;
    display: inline-block;
    padding: 2px 17px;
    margin: 0;
    border-radius: 50px;
    font-weight: 600;
    line-height: initial;

  }

  .info-container {
    padding-left: 40px;
    text-align: left;
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
