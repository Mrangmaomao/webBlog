<template>
  <div id="app">
    <!-- <transition name="fade" > -->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="child-view"/>
        </keep-alive>
    <!-- </transition> -->
    <!-- <transition name="fade" > -->
      <router-view v-if="!$route.meta.keepAlive" class="child-view"/>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
body{
 margin: 0px;
 padding: 0px;
 font-family:MicrosoftYaHei;
 font-size: 12px;
 color: #585858;
 -webkit-overflow-scrolling : touch;
}
p,h1,h2,h3,h4,h5,h6,ul{
 margin: 0px;
 padding: 0px;
}
a{
  text-decoration: none;
}
html, body{
 width: 100%;
 height: 100%;
}
input, button, select, textarea {
  outline: none;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  border: none;
}
input:disabled, textarea:disabled{
 background: #fff;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
 color: #8D8D8D;
}
input::-moz-placeholder, textarea::-moz-placeholder {
 color: #8D8D8D;
}
input:-ms-input-placeholder, textarea:-ms-input-placeholder {
 color: #8D8D8D;
}
ul{
 margin: 0;
 padding: 0;
}
li{
 list-style: none;
}
textarea{
 outline: none;
 overflow-y:auto;
 resize: none;
 border: none;
}
.fade-enter-active{
  transition: opacity 1s;
}
.picker .picker-items .picker-item{
  font-size: .28rem;
  color: #8D8D8D;
  text-align: center;
}
.picker .picker-items .picker-selected{
  font-size: .32rem;
  color: #000;
}
.fade-leave-active {
  /*transition: opacity .2s;*/
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/*.fade-enter-active {*/
  /*transition: all .3s ease;*/

/*}*/
/*.fade-leave-active{*/
  /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
/*}*/
/*.fade-enter,.fade-leave-to{*/
  /*!*transform: translateX(10px);*!*/
  /*opacity: 0;*/
/*}*/
</style>
<script>
  export default {
    watch: {
//      "$route"( to, from ) {
//        const toDepth = to.path.split('/').length
//        const fromDepth = from.path.split('/').length
//        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//      }
    },
    data(){
      return {
        transitionName: ''
      }
    }
  }
</script>
