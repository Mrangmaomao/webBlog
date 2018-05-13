<style scoped lang="less">
  .header-img{
    height: 8.26rem;
    background: url('../../source/img/sea.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    .navigation{
      padding: .34rem .28rem;
      background: rgba(0, 0, 0, 0.43);
    }
    .container{
      width: 14rem;
      margin: 0 auto;
    }
  }
  .header-bg{
    background: rgba(0, 0, 0, 0.43);
    .navigation{
      padding: .2rem .28rem;
    }
    .container {
      width: 12rem;
      margin: 0 auto;
    }
  }
  .navigation{

    display: flex;
    div:first-child{
      width: 30%;
    }
    div:last-child{
      width: 70%;
    }
    div{
      ul{
        display: flex;

        li{
          padding: 0 .28rem;
          color:#44C29E;

        }
        li:hover{
          cursor: pointer;
        }
      }
      .menu{
        justify-content:flex-end;
        font-size: .18rem;
        .active{
          color: #fff;
        }
      }
    }
  }
  .menu-left{
    li {
      a{
        color: #fff;
        font-size: .12rem;
        vertical-align: sub;

      }
      a:hover{
          color: #C28F44;
      }

    }
    .inline{
      padding: .05rem;
    }
  }
  .title{
    margin-top: 2rem;
    text-align: center;
    h1,h2{
      color: #fff;
      /*font-weight: 500;*/
    }
    h1{
      font-size: 1rem;
      letter-spacing:.05rem;
      text-transform: uppercase;
      font-family: 'Vollkorn', serif;
    }
    h2 {
      font-size: .5rem;

    }
    p{
      margin-top: .1rem;
      font-size: .16rem;
      color: #999;
    }
  }
</style>
<template>
  <div class="header" :class="{'header-img':headerType,'header-bg':!headerType}">
    <div class="container">
      <div class="navigation">
        <div class="navigation-left animated wow slideInLeft animated" data-wow-delay="700ms">
          <ul  class="menu-left">
            <li>
              <a class="login hoverAn" href=":javascript">登陆</a>
              <a class="inline hoverAn" href=":javascript">/</a>
              <a class="register hoverAn" href=":javascript">注册</a>
            </li>
          </ul>
        </div>
        <div >
          <ul class="menu">
            <li class="hoverAn" v-for="(item,index) in headerData" :key="index" @click="checkUrl(item.url)" :class="{'active': item.active}">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div v-if="headerType" class="title logo animated wow zoomIn animated" data-wow-delay="900ms">
        <h1>HELLO</h1>
        <h2>陌生人</h2>
        <p>欢迎来到我的网站</p>
      </div>
    </div>

  </div>
</template>
<script>
  const headerData = [
    {
      index: 0,
      name: '首页',
      url:'/'
    },
    {
      index: 1,
      name: '个人简历',
      url: '/resume'
    },  {
      index: 1,
      name: '个人博客',
      url: '/blog'
    } , {
      index: 1,
      name: '摄影展示',
      url: '/photography'
    }
  ];
  export default {
    name: 'Header',
    props: {
      active: '',
      headerType:{
        default: true,
        type: Boolean
      },
    },
    created(){
      for( let i = 0; i< this.headerData.length; i++ ){
        let item = this.headerData[i];
        if( this.active == item.url ) {
          item.active = true
        } else {
          item.active = false;
        }
      }
    },
    data(){
      return {
        headerData,
        thisUrl: headerData[0].url,
      }
    },
    methods:{
      checkUrl:function (url) {
        if ( this.url == url ) {
          return false;
        }
        this.$router.push(url);
        this.thisUrl = url;
      }
    }
  };
</script>
