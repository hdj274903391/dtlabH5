<template>
  <div class="content">
    <div class="advantage-list">
      <div class="advantage-item" v-for="(item,index) in advantageList" :key="index">
        <div class="advantage-img">
          <img src="../../static/images/geek.png" alt="" v-if="index == '0'">
          <span :class="item.iconName"></span>
        </div>
        <h1 class="advantage-title">
          {{item.title}}
        </h1>
        <span class="advantage-introduce">{{item.englishTitle}}</span>
        <div class="advantage-line"> </div>
        <span class="advantage-info">{{item.title1}}</span>
        <span class="advantage-info">{{item.title2}}</span>
        <span class="advantage-info">{{item.title3}}</span>
        <span class="advantage-info">{{item.title4}}</span>
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
      advantageList: [
        {
          title: 'GEEK级IT技术狂热者',
          iconName: '',
          englishTitle: 'WE ARE GEEK',
          title1: '1000万+行核心引擎代码沉淀',
          title2: '超过15+种开发语言',
          title3: '封装10余大型系统引擎只做精品系统',
          title4: '十年磨一剑琢磨、研磨、打磨分布式超级系统'
        },
        {
          title: '12年大型IT系统开发经验',
          iconName: 'icon-process',
          englishTitle: 'WE ARE GEEK',
          title1: '100余项系统APP开发案',
          title2: '例覆盖14个行业合作伙伴',
          title3: '80项行业核心技术',
          title4: '百余个合作伙伴给我们的褒奖与认可'
        },
        {
          title: '军人级的执行力',
          iconName: 'icon-soldier',
          englishTitle: 'WE ARE GEEK',
          title1: 'Productor+Designer+Programer+Opreator',
          title2: '四大兵种组成IT开发特种部队',
          title3: '军人的执行力',
          title4: '做出军工级做精、美、酷的系统产品'
        },
        {
          title: '保姆级的服务',
          iconName: 'icon-nanny',
          englishTitle: 'WE ARE GEEK',
          title1: '完善体贴的开发全程服务',
          title2: '我们让客户真正参与系统的开发过程',
          title3: '我们队售出的系统提供永久性技术支持',
          title4: '为用户提供完善的售后服务'
        }
      ]
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/advantage.css';
</style>
