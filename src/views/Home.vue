<template>
  <div class="home">
    <el-button @click="test" type="primary">test-button</el-button>
  </div>
</template>

<script>
import { test } from '@/api/test/test'
export default {
  name: 'home',
  components:{

  },
  methods : {
    test(){
      console.log('测试接口请求')
      let sendParams = {
        userId:49,
        activityId:14765
      }
      test(sendParams).then(res => {
        console.log(res)
        console.log(this.$store.state.author)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  .text{
    color: red;
  }
}
</style>

