<template>
  <div class="content">
    <div class="index">
      <span class="title">DT超级系统开发实验室</span>
      <h1 class="big-title">高端系统定制超级系统开发</h1>
      <div class="service-list">
        <div class="service-item" v-for="(item, index) in serviceList" :key="index">
          <div class="service-info">
            <img :src="item.iconSrc" class="service-img">
            <div style="width: 50%">
              <h1 class="service-title">{{item.title}}</h1>
              <h2 class="service-introudece">{{item.introduce}}</h2>
            </div>
          </div>
          <div class="service-icon">
            <span :class="item.iconName"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="system-list">
      <div class="system-item" @click="routeTo(index)" v-for="(item,index) in worksList" :key="index">
        <img :src="item.imgSrc" class="system-img">
        <div class="system-item-info">
          <div class="system-item-info-left">
            <img src="../../static/images/works-list-logo.png" class="system-item-info-icon">
            <div style="margin-left: 10px;height: 100%;display: flex;flex-direction: column;justify-content: space-between">
              <h2 class="system-item-info-title">{{item.worksName}}</h2>
              <h3 class="system-item-info-introduce">{{item.worksTitle}}</h3>
            </div>
          </div>
          <div class="system-item-info-right" >
            <span>#MES系统 #新零售</span>
            <span>#APP #小程序</span>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import { XButton } from 'vux'
import Bottom from '@/components/common/bottom'
export default {
  name: 'Index',
  components: {
    XButton,
    Bottom
  },
  data () {
    return {
      serviceList: [
        {
          title: '新零售系统开发',
          introduce: '企业新零售自品牌、自平台',
          iconSrc: '../../static/images/index-list1.png',
          iconName: 'icon-chip'
        },
        {
          title: '电商系统开发',
          introduce: '全渠道商城系统',
          iconSrc: '../../static/images/index-list2.png',
          iconName: 'icon-computer'
        },
        {
          title: '高端微信小程序定制',
          introduce: '小前台、大后台；小程序、大系统',
          iconSrc: '../../static/images/index-list3.png',
          iconName: 'icon-wxprogram'
        },
        {
          title: '移动互联网系统开发',
          introduce: '小程序+wap+微商城+APP',
          iconSrc: '../../static/images/index-list4.png',
          iconName: 'icon-phone'
        },
        {
          title: '全渠道集客与分销系统开发',
          introduce: '集客与营销服务闭环',
          iconSrc: '../../static/images/index-list5.png',
          iconName: 'icon-network'
        },
        {
          title: '系统工业级分布式控管系统',
          introduce: '重新定义mes系统',
          iconSrc: '../../static/images/index-list6.png',
          iconName: 'icon-cloud'
        },
        {
          title: '超级产品设计',
          introduce: '帮助企业实现逆势增长',
          iconSrc: '../../static/images/index-list7.png',
          iconName: 'icon-repair'
        }
      ],
      worksList: [
        {
          imgSrc: '../../static/images/index-works-list1.png',
          worksName: '犁小农新零售系统',
          worksTitle: '线上线下无边界的新零售超级入口'
        },
        {
          imgSrc: '../../static/images/index-works-list2.png',
          worksName: 'E电车',
          worksTitle: 'E电车智能硬件管理系统'
        },
        {
          imgSrc: '../../static/images/index-works-list3.png',
          worksName: '壹品仓',
          worksTitle: '线上线下全渠道新零售系统'
        },
        {
          imgSrc: '../../static/images/index-works-list4.png',
          worksName: '家而思',
          worksTitle: '打造家居制造行业下一代MES系统'
        },
        {
          imgSrc: '../../static/images/index-works-list5.png',
          worksName: '依电园',
          worksTitle: '打造家电行业新零售标杆'
        },
        {
          imgSrc: '../../static/images/index-works-list6.png',
          worksName: '原生鲜购',
          worksTitle: '把自然的馈赠带给城市'
        }
      ]
    }
  },
  methods: {
    routeTo (index) {
      this.$router.push({ name: 'caseDetail' + index  })
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/index.css';
</style>
