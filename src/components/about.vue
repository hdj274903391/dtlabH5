<template>
  <div class="about">
    <div class="about-content" style="font-size: 50px">
      <div class="about-list">
        <div class="about-item">
          <img src="../../static/images/about-index1.png" class="about-item-img">
          <div class="about-item-info">
            <h1 class="about-item-info-title">几句话勾勒实验室</h1>
            <h2 class="about-item-info-title">PROFILE</h2>
            <div class="logo-title-line"></div>
            <p>DT超级系统开发实验室</p>
            <p>超级系统开发实验室+产品与系统开发咨询公司 </p>
            <p>专注于高端IT系统定制  </p>
            <p>11年来，对外输出的系统平台开发成</p>
            <p>果总价值已超过百亿</p>
            <div class="about-item-icon-list">
              <div class="about-item-icon-item">
                <span class="icon-rocket" style="font-size: 30px"></span>
              </div>
              <div class="about-item-icon-item">
                <span class="icon-safe"></span>
              </div>
              <div class="about-item-icon-item">
                <span class="icon-harddisk" style="font-size: 22px"></span>
              </div>
              <div class="about-item-icon-item">
                <span class="icon-code" style="font-size: 18px"></span>
              </div>
            </div>
            <p>DT开发实验室以数据科技，智能科技为核心近12年时间内发明并创造累计近100余项产品专利及成果迄今为止，正在为超过1万+企业终端渠道提供源源不断的IT、新零售系统支撑超过1亿+消费者正在通过我们的IT系统、新零售系统与品牌互动</p>
          </div>
        </div>
        <div class="about-item">
          <img src="../../static/images/about-index2.png" class="about-item-img">
          <div class="about-item-info">
            <h1 class="about-item-info-title">我们的目标</h1>
            <h2 class="about-item-info-title">ACHIEVEMENT</h2>
            <div class="logo-title-line"></div>
            <p>DT超级系统开发实验室</p>
            <p>超级系统开发实验室+产品与系统开发咨询公司 </p>
            <p>专注于高端IT系统定制  </p>
            <p>11年来，对外输出的系统平台开发成</p>
            <p>果总价值已超过百亿</p>
            <div class="about-item-icon-list">
              <div class="about-item-icon-item">
                <span class="icon-rocket" style="font-size: 30px"></span>
              </div>
              <div class="about-item-icon-item">
                <span class="icon-safe"></span>
              </div>
              <div class="about-item-icon-item">
                <span class="icon-harddisk" style="font-size: 22px"></span>
              </div>
              <div class="about-item-icon-item">
                <span class="icon-code" style="font-size: 18px"></span>
              </div>
            </div>
            <p>DT开发实验室以数据科技，智能科技为核心近12年时间内发明并创造累计近100余项产品专利及成果迄今为止，正在为超过1万+企业终端渠道提供源源不断的IT、新零售系统支撑超过1亿+消费者正在通过我们的IT系统、新零售系统与品牌互动</p>
          </div>
        </div>
      </div>
      <div class="more-case">
        <h1 class="more-case-title">更多案例</h1>
        <div class="more-case-title-line"></div>
        <div class="more-case-list">
          <div class="more-case-item" v-for="(item,index) in caseList" :key="index">
            <div class="more-case-item-left">
              <img :src="item.imgSrc" class="more-case-item-icon"></img>
              <div class="more-case-item-introduce">
                <h1>{{item.title1}}</h1>
                <p>{{item.title2}}</p>
              </div>
            </div>
            <div class="more-case-item-right">
              <p>#MES系统 #新零售</p>
              <p>#APP #小程序</p>
            </div>
          </div>
        </div>
      </div>
      <div class="brand">©2018 COPYRIGHTS DT超级系统开发实验室</div>
    </div>
    <div class="about-bottom">
      <div class="about-bottom-btn">电话咨询</div>
      <div class="about-bottom-btn">留言</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advantage',
  data () {
    return {
      caseList: [
        {
          imgSrc: '../../static/images/about-list1.png',
          title1: 'MES智能工控系统',
          title2: '新制造 大数据智能管理'
        },
        {
          imgSrc: '../../static/images/about-list2.png',
          title1: 'AURA BAND',
          title2: '新制造 大数据智能管理'
        },
        {
          imgSrc: '../../static/images/about-list3.png',
          title1: '超级新零售系统',
          title2: '新制造 大数据智能管理'
        },
        {
          imgSrc: '../../static/images/about-list4.png',
          title1: 'MES智能工控系统',
          title2: '新制造 大数据智能管理'
        },
        {
          imgSrc: '../../static/images/about-list5.png',
          title1: 'AURA BAND',
          title2: '新制造 大数据智能管理'
        },
        {
          imgSrc: '../../static/images/about-list6.png',
          title1: 'MES智能工控系统',
          title2: '新制造 大数据智能管理'
        }
      ]
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/about.css';
</style>
