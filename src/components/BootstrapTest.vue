<template>
     <div class="container">
             <h1>{{title}}</h1>
            <button class="btn btn-danger">危险按钮</button>
            {{SendTitle}}
            <Button @click="sendMsg" class="btn">传递消息给父组件</Button>
     </div>
</template>

<script>
     export default{
          props: {
                 SendTitle:{
                      type:String,
                      default:"nothing",
                    //   require:true
                 }
          },        
           data () {
               return {
                    title:"我只是一个子组件，我是用来测试bootstrap的，我将用于App.vue中",
                    msg1:'hey',
                    msg2:'nice to meet you'
               }
           },
           methods: {
              sendMsg(){
                     this.$emit("SendMsg",this.msg1,this.msg2)
              }
           }
            ,
           computed: {
            
           }

     }

</script>

<style lang="scss" scoped>
//    @import "../style/_btn";
   @import "../style/_common";

   h1{
         margin: 100px auto;
   }

</style>