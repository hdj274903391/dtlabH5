<template>
  <div class="service">
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
    <div class="service-detail">
      <img src="../../static/images/service-index.png" class="service-detail-img">
      <div class="service-detail-info">
        <div class="service-detail-info-top">
          <div class="service-detail-info-top-left">
            <div>新零售系统开发</div>
            <div>new retail system</div>
          </div>
          <button>获取资料和报价</button>
        </div>
        <p class="service-content">
          会员有多种储值、消费点、服务套餐和级别折扣。
          与此同时，会籍也有一些特殊的特点:节日、生日
          护理、礼品和假日加倍。
        </p>
        <p class="service-content">
          传统零售业是以“商品”为核心，“商品”为主要经
          营对象的商品的购销和仓储。关键是成本和效率。
          传统的零售体系以商品为中心。从订单到生产和
          销售的整个生产线管理主要集中在货物的采购、
          销售和储存上，较少暴露在客户的前端。
        </p>
        <div class="entrance-list">
          <div>新零售</div>
          <div>总控系统</div>
          <div>多入口</div>
        </div>
        <div class="platform-list">
          <div class="platform-item" v-for="(item,index) in serviceDesignList" :key="index">
            <img :src="item.imgSrc" class="platform-item-img">
            <div class="platform-item-info">
              <h1>{{item.designName}}</h1>
              <p>{{item.designTitle}}</p>
            </div>
          </div>
          <div class="more-platform">
            <span>展开子模块</span>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from '@/components/common/bottom'
export default {
  name: 'advantage',
  components: {
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
      serviceDesignList: [
        {
          imgSrc: '../../static/images/service-list1.png',
          designName: '爆品设计',
          designTitle: '围绕购买理由设计爆品'
        },
        {
          imgSrc: '../../static/images/service-list2.png',
          designName: '高端商业空间设计',
          designTitle: '高端商业空间设计'
        },
        {
          imgSrc: '../../static/images/service-list3.png',
          designName: '展示展厅空间设计',
          designTitle: '展示展厅空间设计'
        },
        {
          imgSrc: '../../static/images/service-list4.png',
          designName: '高端门店终端升级设计',
          designTitle: '高端门店终端升级设计'
        },
        {
          imgSrc: '../../static/images/service-list5.png',
          designName: '高端3D产品设计',
          designTitle: '高端3D产品设计'
        },
        {
          imgSrc: '../../static/images/service-list6.png',
          designName: 'UI互动设计',
          designTitle: 'UI互动设计'
        },
        {
          imgSrc: '../../static/images/service-list7.png',
          designName: 'Web设计',
          designTitle: 'Web设计'
        },
        {
          imgSrc: '../../static/images/service-list8.png',
          designName: 'PPT设计',
          designTitle: 'PPT设计'
        },
        {
          imgSrc: '../../static/images/service-list9.png',
          designName: '互联网品牌设计',
          designTitle: '互联网品牌设计'
        }
      ]
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/service.css';
</style>
