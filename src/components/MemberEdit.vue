<template>
  <div class="member-edit">
    <h1 class="greeting">個人編輯頁面</h1>
    <div class="form-container container py-5 fade-in">
      <div class="row">
         <img class="avatar" :src="form.avatar_url || initialAvatar" />
      </div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <!-- 大頭貼 -->
        <b-form-group id="input-group-avatar"
                      label="大頭貼URL:"
                      label-for="input-avatar-url"
                      description="快到 https://getavataaars.com 找尋你的專屬大頭貼">
          <b-form-input id="input-avatar-url"
                        type="text"
                        :state="validAvatar"
                        v-model="form.avatar_url"
                        required
                        placeholder="請貼上大頭貼字串至此">
          </b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            請輸入網址
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- 名字 -->
        <b-form-group id="input-group-name"
                      label="名字:"
                      label-for="input-name">
          <b-form-input id="input-name"
                        type="text"
                        :state="validName"
                        v-model="form.name"
                        required
                        placeholder="請輸入你的名字">
          </b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            請輸入至少 2 個字
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- 組別 -->
        <b-form-group id="input-group-group"
                      label="組別:"
                      label-for="input-group">
          <b-form-input id="input-group"
                        type="text"
                        :state="validGroup"
                        v-model="form.group"
                        required
                        placeholder="請輸入你的組別">
          </b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            請輸入至少 2 個字
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- 職稱 -->
        <b-form-group id="input-group-title"
                      label="職稱:"
                      label-for="input-title">
          <b-form-input id="input-title"
                        type="text"
                        :state="validTitle"
                        v-model="form.title"
                        required
                        placeholder="請輸入 '職稱' or '在學身份'">
          </b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            請輸入至少 2 個字
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- 興趣 -->
        <b-form-group id="input-group-hobby"
                      label="興趣:"
                      label-for="input-hobby">
          <b-form-input id="input-hobby"
                        type="text"
                        :state="validHobby"
                        v-model="form.hobby"
                        required
                        placeholder="請輸入喜歡的事物">
          </b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            不可能沒興趣啦！
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- 座右銘 -->
        <b-form-group id="input-group-motto"
                      label="座右銘:"
                      label-for="input-motto">
          <b-form-input id="input-motto"
                        type="text"
                        :state="validMotto"
                        v-model="form.motto"
                        required
                        placeholder="簡單一句話plz">
          </b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            請輸入至少 1 個字以上， 25 個字以內
          </b-form-invalid-feedback>
        </b-form-group>


        <!-- 1. 影響力 -->
        <b-form-group id="input-group-influence"
                      class="range-input-group"
                      label="影響力:"
                      label-for="input-influence"
                      description="槍在手 跟我走">
          <b-form-input id="input-influence"
                        type="range"
                        v-model="form.power.influence"
                        required>
          </b-form-input>
          <span class="range-point">{{ form.power.influence }}</span>
        </b-form-group>


        <!-- 2. 適應力 -->
        <b-form-group id="input-group-adapt"
                      class="range-input-group"
                      label="適應力:"
                      label-for="input-adapt"
                      description="我的改變 你看得見">
          <b-form-input id="input-adapt"
                        type="range"
                        v-model="form.power.adapt"
                        required>
          </b-form-input>

          <span class="range-point">{{ form.power.adapt }}</span>
        </b-form-group>


        <!-- 3. 想像力 -->
        <b-form-group id="input-group-imagine"
                      class="range-input-group"
                      label="想像力:"
                      label-for="input-imagine"
                      description="I have a dream">
          <b-form-input id="input-imagine"
                        type="range"
                        v-model="form.power.imagine"
                        required>
          </b-form-input>

          <span class="range-point">{{ form.power.imagine }}</span>
        </b-form-group>


        <!-- 4. 原力 -->
        <b-form-group id="input-group-force"
                      class="range-input-group"
                      label="原力:"
                      label-for="input-force"
                      description="May the force be with you">
          <b-form-input id="input-force"
                        type="range"
                        v-model="form.power.force"
                        required>
          </b-form-input>

          <span class="range-point">{{ form.power.force }}</span>
        </b-form-group>


        <!-- 5. 業力 -->
        <b-form-group id="input-group-karma"
                      class="range-input-group"
                      label="業力:"
                      label-for="input-karma"
                      description="你 引爆了嗎？">
            <div class="rkmd-slider slider-continuous slider-lightBlue">
              <b-form-input id="input-karma"
                          type="range"
                          v-model="form.power.karma"
                          required>
              </b-form-input>
            </div>
          <span class="range-point">{{ form.power.karma }}</span>
        </b-form-group>


        <!-- Submit -->
        <b-form-group>
          <b-button type="submit" variant="success">送出</b-button>
          <b-button class="btn-reset" type="reset" variant="danger">重置</b-button>
        </b-form-group>

      </b-form>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Router from 'vue-router'
import { VueForm } from 'vue-form'
import { AVATAR_INITIAL } from '../constants'
import { MY_ID } from '../my-config'


export default {
  name: 'MemberEdit',
  computed: {
    ...mapGetters([
      'loaded',
      'memberProfile'
    ]),
  },
  data () {
    const {
      avatar_url,
      name,
      group,
      title,
      hobby,
      motto,
      power
    } =  this.$store.getters.memberProfile.data;

    return {
      form: {
        avatar_url,
        name,
        group,
        title,
        hobby,
        motto,
        power
      },
      show: true,
      initialAvatar: AVATAR_INITIAL
    }
  },
  created () {
    this.$store.dispatch('getMemberProfile', { memberId: MY_ID });
  },
  computed: {
    ...mapGetters([
      'loaded',
      'userInfo',
    ]),
    validAvatar () { return this.form.avatar_url.length > 0 },
    validName () { return this.form.name.length > 2 },
    validGroup () { return this.form.group.length > 2 },
    validTitle () { return this.form.title.length > 2 },
    validHobby () { return this.form.hobby.length > 0 },
    validMotto () { return this.form.motto.length > 1 && this.form.motto.length < 26 },
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.$store.dispatch('updateMemberProfile', { submitData: this.form }).then((res) => {
        this.$router.push('/member/me');
      });
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form = {
        avatar_url: '',
        name: '',
        group: '',
        title: '',
        hobby: '',
        motto: '',
        power: {
          influence: 0,
          adapt: 0,
          imagine: 0,
          force: 0,
          karma: 0
        }
      };

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
