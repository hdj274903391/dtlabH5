<template>
  <div class="app">
    <div class="content">
      <img src="../../static/images/logo_bg.png" class="home-top-bg">
      <div class="home-top">
        <div class="home-top-follow">
          <div>
            <div class="home-top-follow-icon icon-heart"></div>
            <div class="home-top-follow-num">1234</div>
          </div>
        </div>
        <div class="logo-all">
        <span class="icon-logo logo">
                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span>
         </span>
          <span class="icon-logo-right logo-right"></span>
        </div>
        <span class="logo-line"></span>
        <h1 class="logo-title">DT超级系统开发实验室</h1>
        <div class="logo-title-line"></div>
        <h2 class="introduce">超级系统开发实验室+产品与系统开发咨询公司 </h2>
        <h2 class="introduce">专注于高端IT系统定制  </h2>
        <h2 class="introduce">11年来，对外输出的系统平台开发成 </h2>
        <h2 class="introduce">果总价值已超过百亿 </h2>
        <h2 class="introduce-kinds" >#MES系统  #新零售  #APP  #小程序 </h2>
      </div>
    </div>
    <tab class="tab-list" style="height: 60px;padding: 0" active-color="#ff4c4d">
      <tab-item :selected="item.name == nowRoute"  v-for="(item,index) in tab" :key="index" @on-item-click="handlerTo(item.name)">{{item.title}} </tab-item>
    </tab>
    <div class="content-list">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      nowRoute: 'index',
      tab: [
        {
          name: 'index',
          title: '案例'
        },
        {
          name: 'advantage',
          title: '优势'
        },
        {
          name: 'service',
          title: '服务'
        },
        {
          name: 'about',
          title: '关于'
        }
      ]
    }
  },
  methods: {
    handlerTo (index) {
      this.$router.push({ name: index })
      this.nowRoute = index
    }
  }
}
</script>

<style>
  @import '../assets/css/home.css';
</style>
