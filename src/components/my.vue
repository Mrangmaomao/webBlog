<style scoped lang="less">
  .my-skill{
    
    padding: 1rem .6rem;
    .text-content{
        margin:0 auto;
      width:60%;
    }
    h2{

      // text-align: center;
      margin-left: 36%;
      padding: .1rem;
    }
    .line{
      content:'';
      border: 2px solid #44C29E;
      width:40%;
      margin-left: 30%;
      // height:4rem;
      transform: rotate(160deg);
    }
    .content{
      // text-align: center;
      margin-top: .3rem;
      p{
        font-size: .14rem;
        color:#999;
        label{
          width:45%;
          text-align:right;
          padding:.1rem .2rem;
          display:inline-block;
          font-size: .16rem;
          color:#333;
        }
      }
    }
  }
  .row h2{
          font-size: .3rem;
  }
  .experience {
    background-color:#e4e4e4;
    padding: 1rem .6rem;
    h2{
      text-align: center;
    }
    .text-content{
      margin-top: .2rem;
    }

    .row{
      border-top:1px dotted #44C29E;
      border-bottom:1px dotted #44C29E;
      height: 2.6rem;
      .left{
            padding-right: .6rem;
        width: 50%;
        .panel{
          margin-right: .2rem;
          
          margin-top:.4rem;
        }
      }

      .content{
        border-right: 1px solid #44C29E;
        height: 100%;
        position: relative;
        .acr{
          width: .8rem;
          height: .8rem;
          position: absolute;
          border: 1px solid #7dd5bc;
          background-color: #7dd5bc;
          box-shadow: 0 0 0.06rem rgba(0,0,0,.2); 
          border-radius: .8rem;
          left: -.4rem;
          top: .9rem;
          .acr-acr{
            width: .6rem;
            height: .6rem;
            border: 1px solid #44C29E;
            background-color: #44C29E;
            color: #fff;
            border-radius: .8rem;
            margin-top: .1rem;
            margin-left: .1rem;
            p:first-child{
              
              margin-top: .1rem;
            }
            p{
              text-align: center;
               margin-top: .05rem;
            }
          }
          
        }
      }
      .right{
        margin-left: .8rem;
        margin-top: .4rem;
        width: 48%;
      }
    }
    .row:nth-child(3){
      height: 2rem;
      .acr{
        top: .6rem;
      }
    }
  }
  .panel{
    background-color: #fff;
    padding: .2rem;
    border-radius: .08rem;
    p,h3{
      margin-top: .1rem;
      letter-spacing: .02rem;
      font-family: MicrosoftYaHei;
    }
    p.text{
      text-indent: .2rem;
    }
    p{
      color: #999;
      font-size: .1rem;
    }
  }
@keyframes autoMove {
      from { }
      to {
        transform: rotateY(-360deg);
      }
  }
  .project{
    margin: 1rem 0; 
    perspective: 100rem;
    height: 4rem;
    h2{
      text-align: center;
    }
    .project-content:hover{
      /*鼠标移入 暂停动画*/
      animation-play-state: paused;
    }
    .project-content{
      display: flex;
      transform-style: preserve-3d;
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 3rem;
      margin: 0 auto;
      position: relative;
      animation: autoMove 20s infinite linear;
      .group:hover{
        cursor: pointer;
      }
      .group{
        // float: left;
        text-align: center;
        padding: .1rem;
        width: 2rem;
        border: 1px solid #ddd;
        height: 2rem;
        background-color: #efefef;
        position: absolute;
        margin-top: 1rem;
        // transform: rotateX(60deg);
        // translate3d:rotateX
      }
      
    
      // .group:nth-child(3){
      //   transform:translateX(-10rem);
      //   // transform: rotateX(180deg) rotateY(180deg) rotateZ(90deg);
      // }
      //   .group:nth-child(2){
      //   transform:translateX(-7rem); 
      //   // transform: translate(30deg) rotateY(120deg);
      // }
      // .group:nth-child(1){
      //   // transform: translateX(30px);
      //   margin: 0 auto;
      // }
    }
  }
  @keyframes projectAn {
      from { 
        transform: rotateY(90deg);
      }
      to {
        transform: rotateY(0deg);
      }
  }
  .project-model {
    color: #fff;
    overflow: hidden;
        position: fixed;
    background-color: rgba(0,0,0,.5);
    width: 50%;
    height: 4rem;
    top:20%;
    border: 1px solid #44C29E;
    border-radius: .1rem;
    left: 25%;
    animation: projectAn .2s linear;
    h4{
      text-align: center;
      font-size: .2rem;
      margin: .2rem 0rem;
    }
    div,h4{
      margin: .2rem .2rem;
    }
    div{
      text-indent: .2rem;
    }
     .close{
       position: absolute;
       top:-.02rem;
      //  background-color: #7dd5bc;
      
       color: #7dd5bc;
       right: 0rem;
       font-size: .6rem;
       top:-.22rem;
      margin-top: .2rem;
     }
     .close:hover{
       cursor: pointer;
     }
  }
  .self{
     background-color: #efefef;
  }

  .self,.thanks{
    margin-top: .6rem;
    padding: 1rem 0;
    // background-image: url('../source/img/self.jpeg');
    // background-size: contain;
    width: 100%;
    // background-repeat: no-repeat;
   
    font-size: .2rem;
    color: #333;
    h2{
      display: block;
      text-align: center;
          width: 100%;
          margin-bottom: .2rem;
         
          // margin: 0 align-self: auto;
    }
    p{
      font-size: .16rem;
      color: #20624f;
      text-indent: .32rem;
    }
  }
  .thanks{
    overflow: hidden;
    padding:.1rem 0;
    // color: #fff;  
    h2{
      color: #44C29E;
      padding: .1rem 0;
    }
    span{
      vertical-align: .8rem;
    }
    .kit{
       width: 1.6rem;
        height: auto;
    }
  }
</style>
<template>
  <div class="index">
    <Header active="/resume" :headerType='false' :bgImg='bgImg'></Header>
    <div class='row my-skill'>
      <div class='container'>
      <div class="text-content">
          <h2>个人信息</h2>
          <div class="line"></div>
          <div class='content'>
            <p><label>姓名:</label> 王茂</p>
            <p><label>电话号码:</label>18080421017</p> 
            <p><label>工作经验:</label>3 年</p>
            <p><label>性别:</label>女</p> 
            <p><label>邮箱:</label>18080421017@163.com</p>
          </div>
        </div>
      </div> 
    </div>
    <div class='row experience'>
      <div class='container'>
        <div>
          <h2>个人经历</h2>
          <div class='text-content'>
            <div class="row flex">
              <div class="left">
                <div class="panel">
                  <p>
                    <span>天露物流有限公司</span>
                    <span>2017.9 - 至今</span>
                  </p>
                  <h3>前端小组长 ／ 前端工程师 </h3>
                  <p>技术栈:webpack + vue + vue-router + iview + es6 + less</p>
                </div>
              </div>
              <div class="content">
                <div class="acr">
                  <div class="acr-acr">
                    <p>至今</p>
                    <p>2017</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="panel">
                  <h3>工作职责</h3>
                  <div>
                    <p>
                      1.  将本版本所需发版内容分给相应同事，控制开发进度。
                    </p>
                    <p>
                      2.  搭建框架以及选技术框架，编写框架中的公共组件。
                    </p>
                    <p>
                    3.  对不利于的用户体验的前端功能提出建议，与产品经理讨论解决方式。 对已有的前端功能进行优化，保证运行速度。
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div class="row flex">
              <div class="left">
                <div class="panel">
                  <p>
                    <span>成都上品软件</span>
                    <span>2016.6 - 2017.9</span>
                  </p>
                  <h3>前端工程师 </h3>
                  <p>技术栈:es5 + knockout.js + coffee + jquery + ztree + require + bootstarp + less</p>
                </div>
              </div>
              <div class="content">
                <div class="acr">
                  <div class="acr-acr">
                    <p>2016</p>
                    <p>2017</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="panel">
                  <h3>工作职责</h3>
                  <div>
                    <p>
                      1.  对页面的兼容性调整，页面优化，静态页面，页面交互，用户体验度。
                    </p>
                    <p>
                      2.  利用公司现用技术对现有的OA系统进行维护（包括pc端，手机端 ，对页面的整洁性，性能，样式，兼容性，前端功能 ）以及新功能的添加，配合UI实现高效的页面重现，后端数据到前台的可视化。
                    </p>
                    <p>
                    3. 封装公共组件
                    </p>
                  </div>

                </div>
              </div>
            </div>
              <div class="row flex">
              <div class="left">
                <div class="panel">
                  <p>
                    <span>四川星酷物联网科技有限公司</span>
                    <span>2015.1 - 2016.5</span>
                  </p>
                  <h3> SEO / 前端工程师 </h3>
                  <p>html + css + js + jquery </p>
                </div>
              </div>
              <div class="content">
                <div class="acr">
                  <div class="acr-acr">
                    <p>2015</p>
                    <p>2016</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="panel">
                  <h3>工作职责</h3>
                  <div>
                    <p class='text'>
                      负责网站的日常优化以及公司官方微信的维护，以及利用photoshop进行推广图片制作，后期主要以前端工作为主要，包括 pc端页面的编写，ajax数据的交互以及展现，其中公司的产品是一个电商网站。星酷商城。
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row project">
      <div class="container">
        <h2>项目经验</h2>
        <div class="project-content">
          <div @click="projectClick(item)" class="group" v-for="(item,index) in projectData" :key='index' :style="{transform:`rotateY(${item.rotateY}deg) translateZ(4.2rem)`}">
            <p class="title">
              {{item.title}}
            </p>
            <p class="text">
              {{item.dec}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="self">
      <h2>自我评价</h2>
      <div  class="container">
              <p>个人觉得自己还是很励志的，为了自己的理想可以勇敢往前追。个人特点就是比较自信，
对事物有着好奇感。从有到无，全凭自己的努力。在工作中可以承担压力，对新事物有着较
强的学习能力，可以独立完成一个项目。</p>
      </div>

    </div>
    <div class="thanks">
      <h2><span>  谢谢观看!</span><img class="kit" src="../source/img/kit.jpg" alt=""></h2>
    </div>
    <Footer></Footer>
    <div class="project-model" v-if='isProjectModel'>
      <span class="iconfont icon-guanbi1 close" @click="toggleModel" ></span>  
      <h4>{{projectItem.title}}</h4>
      <div>
        {{projectItem.dec}}
      </div>
    </div>
  </div>
</template>

<script>
  import bgImg  from '../source/img/my.jpg';
  const projectData = [
    {
      title:'天露物流 CMS 系统',
      dec:'该项目用于 仓库的出入库的库存管理，以及费用管理，项目采用前后端分离开发的方式，前端使用 vue + es6 + webpack + iview, 中间件使用 nginx',
      rotateY: 0,
    },
        {
      title:'h5项目',
      dec:'项目简介',
      rotateY: 0,
    },
        {
      title:'h5项目',
      dec:'项目简介',
      rotateY: 0,
    },
       {
      title:'h5项目',
      dec:'项目简介',
      rotateY: 0,
    },
       {
      title:'h5项目',
      dec:'项目简介',
      rotateY: 0,
    },
       {
      title:'h5项目',
      dec:'项目简介',
      rotateY: 0,
    },
       {
      title:'h5项目',
      dec:'项目简介',
      rotateY: 0,
    },
  ]
  export default {
    data () {
      return {
        projectData,
        bgImg,
        isProjectModel: false,
        projectItem: {},
      }
    },
    mounted(){
      let itemDeg = 360 / projectData.length;
      projectData.forEach( (item,index) => {
        item.rotateY = index * itemDeg;
      })
      this.$nextTick( () => {

      })
    },
    methods: {
      toggleModel: function(){
        this.isProjectModel = false;
      },
      projectClick:function(item){
        this.isProjectModel = true;
        this.projectItem = item;
      }
    }
  }
</script>

