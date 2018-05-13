<style scoped lang="less">
  .my-skill{
    
    padding: .6rem;
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
    padding: .6rem;
    h2{
      text-align: center;
    }
    .text-content{
      margin-top: .2rem;
    }
    .row{
      border-top:1px dotted #44C29E;
      border-bottom:1px dotted #44C29E;
      height: 2rem;
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
          top: .6rem;
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
      }
    }
  }
  .panel{
    background-color: #fff;
    padding: .2rem;
    border-radius: .08rem;
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
                </div>
              </div>
              <div class="content">
                <div class="acr">
                  <div class="acr-acr">
                    <p>6月</p>
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
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import bgImg  from '../source/img/my.jpg'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        bgImg
      }
    },
    methods: {
    }
  }
</script>

