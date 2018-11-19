<template>
  <div class="member-info fade-in">

    <h1 class="greeting">這是 "{{ memberProfile.data.name || '某某某' }}" 的個人資訊</h1>
    <div class="row">
      <div class="col-2" v-if="isMyself">
        <div class="fl col-clap col-grp">
          <ClapHand icon-class="fa fa-hand-paper-o" :likedId="memberProfile.data.id" />
        </div>
      </div>

      <div class="col-5 offset-md-1">
        <div class="info-group">
          <div class="avatar-container fl">
            <img class="avatar" :src="memberProfile.data.avatar_url || initialAvatar" />
            <p class="badge">{{ memberProfile.data.group }}</p>
          </div>

          <div class="info-container fl">
            <p>姓名： {{ memberProfile.data.name || '某某某' }}</p>
            <p>職稱： {{ memberProfile.data.title || '未填寫' }}</p>
            <p>興趣： {{ memberProfile.data.hobby || '未填寫' }}</p>
            <p>座右銘： {{ memberProfile.data.motto || '未填寫' }}</p>
          </div>

        </div>
      </div>

      <div class="col-3">
        <div class="fl col-chart col-grp">
          <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClapHand from '../components/ClapHand'
import Radar from 'vue-radar'
import { AVATAR_INITIAL } from '../constants'
import { MY_ID } from '../my-config'

export default {
  name: 'MemberProfile',
  components: {
    ClapHand,
    'v-radar': Radar
  },
  computed: {
    ...mapGetters([
      'loaded',
      'memberProfile',
      'averagePower'
    ]),
  },
  created () {
    const {
      params,
      path,
    } = this.$route;
    this.$store.dispatch('getAveragePower');
    this.$store.dispatch('getProfileLikes', { userId: this.isMyself(path, params) });
    this.$store.dispatch('getMemberProfile', { memberId: this.isMyself(path, params) }).then(() => {
      this.drawLine();
    });;
  },
  data() {
    return {
      initialAvatar: AVATAR_INITIAL,
    }
  },
  methods: {
    isMyself (path, params) {
      return path && path === '/member/me' ?  MY_ID : params.userId;
    },
    drawLine () {

      const {
        averagePower,
        memberProfile
      } =  this.$store.getters;

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
                {text: '適應力', max: 100},
                {text: '想像力', max: 100},
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
                    value: [averagePower.data.social, averagePower.data.adapt, averagePower.data.imagine, averagePower.data.force, averagePower.data.karma],
                    areaStyle: {type: 'default'},
                    name: '眾人之力'
                },
                {
                    value: [memberProfile.data.power.social, memberProfile.data.power.adapt, memberProfile.data.power.imagine, memberProfile.data.power.force, memberProfile.data.power.karma],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    margin-top: 35px;
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
    max-width: 100px;
    background-color: #2ecc71;
    border-radius: 20px;
    color: #fff;
    display: inline-block;
    padding: 2px 17px;
    margin: 0;
    border-radius: 50px;
    font-weight: 600;
    line-height: initial;
    text-overflow: ellipsis;
    overflow: hidden;

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

  /* 進場特效 - 淡入 */
  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

  .fade-in {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:.3s;
    -moz-animation-duration:.3s;
    animation-duration:.3s;
  }
</style>
