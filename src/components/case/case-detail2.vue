<template>
  <div class="case-detail">
    <x-header class="header"></x-header>
    <div class="case-top">
        <div class="case-top-banner"></div>
      <div class="system-item-info">
        <div class="system-item-info-left">
          <div class="system-item-info-icon"></div>
          <div style="margin-left: 10px;height: 100%;display: flex;flex-direction: column;justify-content: space-between">
            <h2 class="system-item-info-title">MES智能工控系统 </h2>
            <h3 class="system-item-info-introduce">新制造 大数据智能管理</h3>
          </div>
        </div>
        <div class="system-item-info-right">
          <span>#MES系统 #新零售</span>
          <span>#APP #小程序</span>
        </div>
      </div>
      <div class="case-content">
        <p>2018年是零售业新时代的丰收期。与此同时，网店的发展也面临着更多的机遇和挑战。用户的 个人需求继续凸显。体验消费和智能零售将成为该店突破传统门槛、开拓新零售发展机遇的重要组成部分</p>
        <div class="case-content-img"></div>
        <p>电脑、微信和应用程序可以随时随地轻松订购。CARMO收银机系统颠覆了传统的收银机设备，支持多个商店和多个收银员自动将产品信息与扫描匹配。联机和脱机库存数据是同步的。除金 支付外，还有会员卡支付、微信支付、支付宝支付等。也受到支持。
        </p>
        <div class="case-content-img"></div>
        <p>
          许多离线公司希望通过互联网升级。大多数公司 的核心要求是降低成本，提高利润，提高竞争力 在这些需求下，许多传统商店开始跟随管理和服务优化的趋势。对于许多中小个体零售商来说，如何正确进入“新零售体系”轨道？
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
        <div class="case-bottom-icon"></div>
        <h1>MES智能工控系统 </h1>
        <P>#新制造 #MES #大数据智能管理</P>
        <P>#智能工控 #工业机器人 #生产自动化 #CRM</P>
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
