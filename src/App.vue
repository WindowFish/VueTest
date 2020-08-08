<template>
  <div id="app">
     <router-link :to="{name:'Index'}">首页</router-link>
      <!-- 第一 如果是通过导航条传递参数那么就在配置的路由的path后面写上 /:id/:hobby这样的绑定参数那么在点击的时候
      去到这个path路径的组件的时候就可以通过this.$route.params.id的形式获得用户在顶部导航栏输入的参数 -->
  
      <!-- 如果是要通过页面的形式去传递路由参数的话就用到params:{参数:值}的形式直接传递过去指定的path的对应的 -->
      <!-- 组件然后就一样的通过this.$route.params.username这种方式来获取到这些值 -->
      <router-link :to="{name:'Cart',params:{username:uname,age:uage,sex:usex}}">购物车</router-link>
      <router-view></router-view> 

      <!-- 子组件中使用bootstrap只要在父组件中引入就可以了 然后父子都可以使用它-->
      <BootstrapTest :SendTitle="title"   @SendMsg="Msg"></BootstrapTest>
      <div class="progress" style="margin-top: 10px;">
        <div class="progress-bar bg-danger" style="width: 50%;">50%</div>
      </div>

      <!-- 引入sass并且使用sass -->
      <div class="TestSass">
           <h1>测试sass</h1>
           <button class="btn">我是sass测试</button>
           <p>哈喽   <i class="n-container">{{name}}</i></p>
           

      </div>



  </div>
</template>

<script>
// 要使用bootstrap框架要引入如下的俩个库文件
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 测试bootstrap用的
import  BootstrapTest from "./components/BootstrapTest"

export default {
  name: 'App',
  components: {
      BootstrapTest
  }
  ,
  created () {
        // 可以是通过请求后端获得到的数据
        this.usex ="男",
        this.uname="mary",
        this.uage = 100 
  },
  data () {
    return {
        content:"app",
        uname:"",
        uage:0,
        usex:"",
        title:"我是Title",
        name:"Mr Jack"
    }
  },
  methods: {
     getUserInfo(){
          
     },
     Msg(msg1,msg2){
            alert(msg1+"  "+msg2)
     }
    
  },
  computed: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss"  scoped>
  // 导入scss公共的常用的文件  scss文件导入到vue中
   @import "./style/common";
  // 在这里使用
   $color:grey;
   $width:100%;
   $height:150px;
   $backgroundColor:yellow;
   .TestSass{
        display: flex;
        align-items: center;
        justify-content: center;
        color: $color;
        width: $width;
        height: $height;
        background-color: $backgroundColor;
        &:hover>h1{
             color: red;
        }
        // 把_commons.scss文件全局导入了以后就可以在任何一个地方使用在_commons.scss中写好的scss的语法样式
        p{
           @include allP($backgroundColor:pink);
        }
   }


</style>
