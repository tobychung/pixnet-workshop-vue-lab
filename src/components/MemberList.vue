<template>
  <div class="card-list">
    <!-- <h1 class="greeting rubberBand">歡迎來到 workshop 我們來看看這邊有哪些人參加！！</h1> -->
    <h1 class="greeting rubberBand">恭喜你～環境建置成功！</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { AVATAR_INITIAL } from '../constants.js'

  export default {
    name: 'MemberList',
    computed: {
    },
    created () {
    },
    data() {
    },
    methods: {
      getGroupedData (list) {
          const groupData = list.reduce((a, b) => {
            (a[b['group']] = a[b['group']] || []).push(b);
            return a;
          }, {});;
          console.log('groupData', groupData);
          return groupData;
      },
    }
  }
</script>

<style scoped>
  /* Google font */
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);

  * {
    transition: all 0.15s;
  }

  li {
    overflow: hidden;
    list-style-type: none;
  }

  .greeting {
    margin: 40px auto;
  }

  .group-name {
    text-align: left;
  }

  /* 卡片特效 */
  .wrap {
    position: relative;
    float: left;
    box-shadow: 0 0 10px rgba(200, 201, 201, 0.5);
    background: #fff;
    width: 350px;
    color: #999998;
    text-decoration: none;
    list-style-type: none;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .wrap .block-text {
    height: 350px;
    padding: 25px;
  }
  .wrap .block-text h1 {
    color: #B7AA9C;
    font-size: 20px;
    margin-bottom: 5px;
    padding-top: 20px;
  }
  .wrap .block-text hr {
    display: block;
    border: none;
    margin: 0;
    width: 30px;
    background: #efefef;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    height: 2px;
  }

  .wrap .block-text .block-text__info {
    text-align: justify;
  }

  .wrap .block-text p {
    color: #333;
    font-weight: 400;
    line-height: 20px;
    font-size: 14px;
  }

  .avatar-container {
    width: 100px;
    height: 100px;
    margin: auto;
  }

  .avatar {
    width: 100px;
  }
  .wrap .block-text .badge {
    background-color: #2ecc71;
    border-radius: 20px;
    color: #fff;
    display: inline-block;
    margin-bottom: 20px;
    padding: 2px 17px;
    border-radius: 50px;
    font-weight: 600;
    line-height: initial;

  }
  .wrap .block-date {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .wrap .block-date-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
  }
  .wrap .date {
    color: #fff;
    position: relative;
    z-index: 1;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 0px 30px 15px 30px;
    font-size: 18px;
    opacity: 0;
    transition: all 0.25s;
    -webkit-transform: translateY(40px);
            transform: translateY(40px);
  }
  .wrap .day {
    float: left;
  }
  .wrap .time {
    float: left;
  }
  .wrap span {
    display: block;
    float: left;
    height: 10px;
    bottom: 0;
    left: 0;
    content: "";
  }
  .wrap span.dark {
    background: #5FB2B2;
  }
  .wrap span.light {
    background: #9BCFCF;
  }
  .wrap span.percent-75 {
    width: 75%;
  }
  .wrap span.percent-25 {
    width: 25%;
  }
  .wrap:hover {
    box-shadow: 0 0 20px rgba(200, 201, 201, 0.5);
  }
  .wrap:hover .avatar {
    margin-top: -15px;
  }
  .wrap:hover .block-text h1 {
    margin-top: -15px;
  }
  .wrap:hover .block-text hr {
    height: 1px;
  }
  .wrap:hover .block-date .date {
    opacity: 1;
    -webkit-transform: translateY(25px);
            transform: translateY(25px);
  }
  .wrap:hover .block-date span {
    height: 45px;
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


  /* 進場特效 - 橡皮筋 */
  @-webkit-keyframes rubberBand {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      opacity: 0;
    }

    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }

  @keyframes rubberBand {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      opacity: 0;
    }

    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }

  .rubberBand {
    opacity:0;
    -webkit-animation:rubberBand ease-in 1;
    -moz-animation:rubberBand ease-in 1;
    animation:rubberBand ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;
  }


</style>
