<template>
     <div class="cart_container">
             <h1>购物车</h1>
     </div>
</template>


<script>
     export default{
          name:"Cart",
          created () {
            //   alert(this.$route.params.id+"  "+this.$route.params.age)  
          alert(this.$route.params.username+"   "+this.$route.params.age+"  "+this.$route.params.sex)
          },
          data () {
              return {
                  
              }
          },
          methods: {
              
          },

     }

</script>


<style lang="scss" scoped >

</style>