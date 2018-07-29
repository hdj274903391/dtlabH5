<template>
    <div>
      <div class="contact">
        <h1 class="contact-title" style="margin:50px 0 0;">DT超级系统开发实验室</h1>
        <h1 class="contact-title" style="margin: 0px;font-size: 15px">CHINA DT SMART LAB.</h1>
        <span class="contact-introduce" style="margin-top: 38px">想查看更多案例请留下您的联系方式或</span>
        <span class="contact-introduce">直接致电咨询</span>
        <div class="introduce-line"></div>
        <div class="input-list">
          <input type="text"  placeholder="输入姓名">
          <input type="number"  placeholder="输入电话">
          <textarea placeholder="输入内容" ></textarea>
        </div>
        <x-button type="default" button-default-active-bg-color="#ff4c4d"  style="width: 90%;background: #505050;color: white;margin-top: 24px;">提交留言</x-button>
        <x-button type="default" style="width: 90%;border: 1px solid #505050;margin-bottom: 30px">电话咨询</x-button>
      </div>
      <div class="bottom-info">
        <span>我们有绝对的实力创造出打动人心的、世界级IT</span>
        <span>系统产品，致力成为中国乃至全球最顶尖的系统</span>
        <span>©2018 COPYRIGHTS DT超级系统开发实验室</span>
      </div>
    </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  name: 'bottom',
  components: {
    XButton
  }
}
</script>

<style scoped>

  .contact{
    width: 100%;
    border-radius: 3px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-title{
    font-size:18px;
    letter-spacing: 1px;
  }
  .contact-introduce{
    font-size: 13px;
    color: #787878;
  }
  .introduce-line{
    width:25px ;
    height: 5px;
    background: #464646;
    margin-top: 30px;
  }
  .input-list{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input-list input:focus , .input-list textarea:focus {
    outline-color: white;
  }
  .input-list input{
    border:0px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 13px;
    height: 55px;
    line-height: 55px;
    width: 80%;
  }
  .input-list textarea{
    border: 0px;
    font-size: 13px;
    color: #b4b4b4;
    font-family: "Adobe 宋体 Std L";
    width: 80%;
    margin-top: 20px;
    height: 140px;
    border-bottom: 1px solid #f0f0f0;
  }
  .bottom-info{
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    padding-bottom: 10px;
  }
  .bottom-info span{
    color: #a0a0a0;
    font-size: 10px;
    letter-spacing: 1px;
  }
</style>
