

<template>
    <div>
      <!--index_banner-->
      <div class="index_banner">
        <router-link to="/home">
          <img src="./../assets/banner.png" alt="">
        </router-link>
      </div>
      <!--index_box-->
      <ul class="index_box">
        <!--fg1-->
        <div class="index_fg1">
          <img src="./../assets/fg1.png" alt="图片加载失败">
          每月任务
        </div>

        <li>
          <img src="./../assets/task_invite.png">

          <div class="index_pic">
            <h3>邀新任务</h3>
            <h3 class='index_picDescription'>邀新任务每个月都需要完成的哟~</h3>
            <img src="./../assets/go.png">
          </div>
        </li>
      </ul>

      <!--fg2-->
      <div class="index_fg2"></div>
      <!--fg3-->
      <div class="index_fg3 m_fg2_1 ">
        <!--<span class="m_fg2_l"></span>-->
        <img src="./../assets/fg3.png" alt="图片加载失败">
        <span>测试项目打卡</span>
        <!--<span class="m_fg2_r"></span>-->
      </div>

      <!--index_container-->
      <ul class="index_container">

        <li v-for="item in list">

          <img v-lazy="item.imgUrl">
          <div class="index_pic">
            <h3>{{item.title}}</h3>
            <h3 class='index_picDescription'>{{item.description}}</h3>
            <img src="./../assets/go.png">
          </div>
        </li>
      </ul>


      <!--index_link-->
      <div class="index_link">

        <router-link to="/signout">
          <img src="./../assets/rank@3x.png" alt="">
        </router-link>
      </div>
      <router-view>
      </router-view>

    </div>
</template>
<script>

    export default{
      data() {
        return {
          loadingImg: './../assets/load.gif',
          list: [
            {
              imgUrl: require('./../assets/read.png'),
              title: '速闻阅读',
              description : '阅读速闻可获得更多测试打卡机会~'
            },
            {
              imgUrl: require('./../assets/store.png'),
              title: '到店扫码',
              description : '测试项目打卡资格轻松获取~'
            },
            {
              imgUrl: require('./../assets/invite.png'),
              title: '邀新赚信用',
              description : '快来赚取信用分吧~'
            },
            {
              imgUrl: require('./../assets/fire.png'),
              title: '搭火线',
              description : '参与搭火线活动，还有意外惊喜哦~'
            },
            {
              imgUrl: require('./../assets/treasure.png'),
              title: '寻宝',
              description : '寻找遗失的宝藏~'
            }
          ]
        }
      },
      mounted: function() {

         /**
         * http_get
         * 截止时间
         */
        this.$http.get('http://test.appserver.com/activity/getSingEndTime'

        ).then((response) => {
              this.$set('gridData', response.data)
        })
        .catch((response) => {
              console.log(response)
        })
         /**
         * http_get
         * 是否显示寻宝模块
         */
        this.$http.get('http://test.appserver.com/activity/treasurebox/display')
        .then((response) => {
              this.$set('gridData', response.data)
        })
        .catch(function(response) {
              console.log(response)
        })
      }
    }
</script>

<style scoped>
    @import './../sass/common.css';
    @import './../sass/index.css';
</style>
