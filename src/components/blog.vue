<style scoped lang="less">

</style>
<template>
  <div class="index">
    <Header active="/blog" :headerType="false"></Header>
      个人博客
  </div>
</template>

<script>
  import md5 from 'js-md5'
  import {headerData} from '../source/js/data';
  console.log(headerData,55555555555);
  export default {
    name: 'HelloWorld',
    data () {
      return {
        headerData,
      }
    },
    methods: {
    }
  }
</script>

