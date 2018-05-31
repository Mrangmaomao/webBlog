<style scoped lang="less">
  .container {
    width: 14rem;
    margin: 0 auto;
  }
  .row{
    margin-top: .8rem;
  }
  .row>.clo-7 {
    height: 4rem;
  }
  .banner-bottom-text{
    position: relative;
    margin-top: 2rem;
    h2,h3{
      font-size: .6rem;
      color: #D5D5D5;
      margin: 0;
      font-family: 'Vollkorn', serif;
    }
    .banner-bottom-text-pos {
      position: absolute;
      top: 58%;
      left: 13%;
      h3{
        color: #C28F44;
        text-transform: uppercase;
      }
    }
  }
  .bar1 .bar{
    background-color: #44C29E;
  }
  .bar-con{
    background-color: #D5D5D5;
    height: 3px;
    margin: .6rem 0 .2rem 1.2rem;
    width: 70%;
  }
  .flex {
    flex-wrap:wrap;
  }
  .banner-bottom-right-left{
    width: 44%;
    .banner-bottom-right-left1{
      width: 2.8rem;
      padding: .5em;
      border: 1px dotted #999;
    }
    .box {
      height: 3.4rem;
      width: 2.8rem;
      background-repeat: no-repeat;
      margin: 0 auto;
      background-size: cover;
      position: relative;
      -webkit-transition: all 0.4s cubic-bezier(.99,.99,0,.61);
      transition: all 0.4s cubic-bezier(.99,.99,0,.61);
      overflow: hidden;
      .cover{
        position: relative;
        top: -4rem;
        left: -4rem;
        -webkit-transition: all 0.4s cubic-bezier(.99,.99,0,.61);
        transition: all 0.4s cubic-bezier(.99,.99,0,.61);
        height: 2.6rem;
        background: rgba(0,0,0,0.45);
        position: relative;
        padding: .4rem .4rem;
        color: #fff;
        overflow: hidden;
        text-shadow: 1px 1px 0px #000;
        .title{
          font-size: .16rem;
          color: #44C29E;
          text-transform: capitalize;
        }

        .intro{
          line-height: 1.8em;
          width: 100%;
          position: relative;
          font-size: .16rem;
          overflow: hidden;
          margin: 1em 0 0;
          text-indent: .32rem;
        }
        .date{
          position: absolute;
          bottom: 1.5em;
          right: 1em;
          font-size: 10pt;
        }
      }

    }
    .box:hover{
      cursor: pointer;
      .cover{
        top:0;
        left: 0;
      }
    }

  }
  .banner-bottom-right-left:nth-child(1){
    margin-top: 12em;
    margin-left: 10%;
  }
  .banner-bottom-right-left:nth-child(3){
    margin-left: 54%;
    margin-top: -1.2rem;
  }
  .bar-con+p{
    margin: 0 0 2rem;
    color: #999;
    line-height: 1.8em;
    font-size: 0.16rem;
    text-indent: .32rem;
  }
  .bar1 .bar{
    height: 100%;
    width: 70%;
  }
  .two{
    background-color: #f5f5f5;
    padding: .6rem;
    margin-top: .6rem;
  }

</style>
<template>
  <div class="index">
      <Header active="/" :bgImg='defaultBg'></Header>
      <div class="container">
        <div class="row">
          <div class="clo-4">
            <div class="banner-bottom-text">
              <h2>My</h2>
              <div class="banner-bottom-text-pos">
                <h3>自我介绍</h3>
              </div>
            </div>
            <div class="bar1 bar-con">
              <div class="bar" data-percent="70"></div>
            </div>
            <p>您好！陌生人，欢迎来到这里。我的名字Mrs.mao,本人从事于web前端3年左右，此网站用于本人自我展示，主要展示有摄影，it前端技术。</p>
          </div>
          <div class="clo-6 banner-bottom-right animated wow bounceInRight flex" data-wow-delay="700ms">
            <div class="banner-bottom-right-left" v-for="(item,index) in myDatas" :key="index">
              <div class="banner-bottom-right-left1">
                <div class="box" :style="{'backgroundImage':`url('${item.bg}')`}">
                  <div class="cover top-left">
                    <h3 class="title">{{item.title}}</h3>
                    <p class="intro">{{item.dec}}</p>
                    <p class="date">{{item.date}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- <div class="two">
      <div class="container">
        <div class="row">
          <div class="clo-4">
            <img class="img-res" src="../source/img/4.jpg" alt="">
          </div>
          <div class="clo-6">

          </div>
        </div>
      </div> -->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5'
  import img1 from '../source/img/1.jpg'
  import img2 from '../source/img/2.jpg'
  import img3 from '../source/img/3.jpg'
  import defaultBg from '../source/img/sea.jpg';
  var pages = [
    {
      title: 'hello',
      style:{
        background:'#4bbfc3',
      },
    },
    {
      title: 'slide2',
      style:{
        background:'#000',
      },
    },
    {
      title: 'slide3',
      style:{
        background:'#4bbfc3',
      },
    },
    {
      title: 'slide4',
      style:{
        background:'#4bbfc3',
      },
    },
  ]
  var myDatas = [
    {
      title: '爱旅游',
      date: 'Date: 10/03/2016',
      dec: '一个人的旅行，在路上遇见最真实的自己。背上行囊去远方，那个梦寐以求的目的地。',
      bg: img1
    },    {
      title: '爱摄影',
      date: 'Date: 10/03/2016',
      dec: '摄影是诗，拍照的那一瞬间抓住我千万种思绪之一，我的感觉定格记忆，也将记忆在那一瞬间闪回。---贤良',
      bg: img2
    },    {
      title: '艾斯 --海贼王',
      date: 'Date: 10/03/2016',
      dec: '得意奸笑道：对不起，我对活一千年没有兴趣，我只要今天能活着就好。',
      bg: img3
    },
  ]
  export default {
    name: 'HelloWorld',
    data () {
      return {
        pages:pages,
        myDatas,
        defaultBg,
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 100,//滑动判定时间
          autoplay:5000,//自动滚动[ms]
          loop:true,//循环滚动
//          direction:'vertical',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
      }
    },
    methods: {
    }
  }
</script>

