<template>
  <div class="case-detail">
    <x-header class="header"></x-header>
    <div class="case-top">
        <img src="../../../static/images/case-detail0-1.png" class="case-top-banner">
      <div class="system-item-info">
        <div class="system-item-info-left">
          <img  src="../../../static/images/works-list-logo.png" class="system-item-info-icon">
          <div style="margin-left: 10px;height: 100%;display: flex;flex-direction: column;justify-content: space-between">
            <h2 class="system-item-info-title">犁小农 </h2>
            <h3 class="system-item-info-introduce">线上线下无边界的新零售超级入口</h3>
          </div>
        </div>
        <div class="system-item-info-right">
          <span>#MES系统 #新零售</span>
          <span>#APP #小程序</span>
        </div>
      </div>
      <div class="case-content">
        <h1 class="case-content-title">建立人与食物之间的美好关系</h1>
        <p >在「新零售」概念还未被明确提出的2016年初，犁小农团队与我们一起充分利用犁小农强大的线下拓展能力，为犁小农进行了从0到1的整店体验和服务规划。DT SMART LAB将线上数字技术与线下购买体验结合，经历了与室内空间设计的整合、线上线下体验设计的落地、对硬件安装进行指导与调试、与现场营运激烈探讨。<br>
          犁小农诞生之初的目标就是建立人与食物之间的美好关系，与此同时，社会节奏越来越快，顾客希望花更少的时间在选购食材，同时又希望吃饭时有更好的体验——这也符合犁小农的诉求，在提高效率的同时，还能让顾客满意而归。</p>
        <img src="../../../static/images/case-detail0-2.png" class="case-content-img"/>
        <h1 class="case-content-title">快慢分离的店内布局和简单不迂回的动线</h1>
        <p>我们对门店进行了合理的分区布局，并给予相应的引导： <br>
          在餐厅门口的广告牌展示推荐食材，吸引顾客的同时，允许顾客在进店前就做好购买决策；
          在门口醒目位置告知顾客店内可以通过手机下单；引导顾客最快开始消费，降低流失率；
          将相对较慢的现场付费区域与希望更快的在线购买自提等待区域分开布局。
        </p>
        <img src="../../../static/images/case-detail0-3.png" class="case-content-img"/>
        <h1 class="case-content-title">全新更年轻化的品牌形象</h1>
        <p>犁小农的目标用户在不断的年轻化，为此我们设计了更具识别性和年轻化的品牌形象，设计了全线产品的包装物，希望通过设计，拉近品牌与用户的距离</p>
        <img src="../../../static/images/case-detail0-4.png" class="case-content-img"/>
        <h1 class="case-content-title">线上线下全面融合</h1>
        <p>
          犁小农新零售将线上线下全面打通，为用户带来无边界的生鲜购物体验，改变了年轻人对传统菜市场的印象，让买菜变成一件顺手又很酷的事情。
        </p>
      </div>
      <div class="case-bottom">
        <div class="case-bottom-icon-list">
          <div class="case-bottom-icon-item">
            <span class="icon-goods"></span>
          </div>
          <div class="case-bottom-icon-item">
            <span class="icon-code" style="font-size: 18px"></span>
          </div>
          <div class="case-bottom-icon-item">
            <span class="icon-rocket" style="font-size: 30px"></span>
          </div>
          <div class="case-bottom-icon-item">
            <span class="icon-safe"></span>
          </div>
          <div class="case-bottom-icon-item">
            <span class="icon-harddisk" style="font-size: 22px"></span>
          </div>
        </div>
        <img  src="../../../static/images/works-list-logo.png" class="case-bottom-icon"/>
        <h1>线上线下无边界的新零售超级入口 </h1>
        <P>SI设计  | VI设计  |  包装设计  | 品牌设计  </P>
        <P>新零售策略  |  APP  |  小程序</P>
        <p>线下智能终端  |  新零售总控后台</p>
        <div class="brand">©2018 COPYRIGHTS DT超级系统开发实验室</div>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'case-detail',
  components: {
    XHeader
  },
  mounted () {
    document.documentElement.scrollTop = 0
  }
}
</script>

<style scoped>
 @import "../../assets/css/case/case-detail.css";
</style>
