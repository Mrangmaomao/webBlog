<style scoped lang="less">
  .content{
    background-color: #000;
    .title{
      text-align: center;
      padding-top:.5rem;
      font-size: .2rem;
      
      padding-bottom: .5rem;
      span{
         border: 1px solid #7dd5bc;
        padding: .1rem .2rem;
        border-radius: .08rem;
        color:#999;
        margin-left:.4rem;
      }
      span:hover,.span-active{
       
        color:#7dd5bc;
        border-color:#999;
        cursor:pointer;
      
      }
    }
  }
  .border-content{
    display:flex;
    flex-wrap: wrap;
    width:80%;
    margin:0 auto;
    div{
      width: 20px;
      height:20px;
      border:1px solid #333;
    }
  }
  .from{
   padding-bottom:.4rem;
   width:80%;
   margin:0 auto;
   font-size: .2rem;
   input{
     border: 6px solid #7dd5bc;
     border-radius:.08rem;
     border-top-right-radius:0;
     border-bottom-right-radius:0;
     height:.2rem;
     width: 4rem;
     padding:.1rem;
   }
   span{
     background-color:#7dd5bc;
     height: .2rem;
     display:inline-block;
     color:#fff;
     padding:.1rem;
     border:6px solid transparent;
     border-radius:.08rem;
      border-top-left-radius:0;
     border-bottom-left-radius:0;
     line-height: .2rem;
     vertical-align: bottom;
     font-family: cursive;
   }
   span:hover{
     cursor:pointer;
   }
   
  }
  .dec{
     position:absolute;
     width: 30%;
     top: 30%;
     background-color: rgba(0,0,0,.5);
     border-radius: .1rem;
     border: 1px solid #7dd5bc;
     height:20%;
     left: 35%;
     padding: .2rem .2rem;
     color:#fff;
     text-align: center;  
     h5{
     
       font-size: .2rem;
     } 
     p{
       font-size: .16rem;
       text-indent: .1rem;
       margin-top: .2rem;
     }
     .close {
       width: 1rem;
       margin: 0 auto;
       height: .4rem;
       color: #fff;
       font-size: .16rem;
       background-color: #7dd5bc;
       display:block;
       border-radius:.4rem;
       margin-top: .4rem;
     }
     .close:hover{
       cursor:pointer;
     }
   }
</style>
<template>
  <div class="index">
    <Header  active="/play" :headerType="false"></Header>
    
    <div class='content' :style="{width:screenWidth + 'px',height:screenHeight+'px'}">
      <div class='title'>
        <span @click="toggleDec">游戏玩法</span>
        <span class="clear" @click="clear">清除画板</span>
        <span class="clear" @click="clear">生成图片</span>
        <span class="clear" @click="clear">生成程序代码</span>
        <span class="clear" @click="clear">导入程序代码</span>
      </div>
      <div class="from">
        <input v-model='gridNum' /><span @click="run">runing</span>
      </div>
      <div class="border-content" v-if='borderData.length'>
        <div v-for="item in borderData" :style="{backgroundColor:item.backgroundColor}" @click="itemClick(item)" @dblclick="itemDBClick(item)"></div>
        <div class=""></div>
      </div>
    </div>
    <div class="dec" v-if="isDec">
      <h5>游戏玩法简介</h5>
      <p>
        第一步：先计算出，你画物的格子，并在输入框输入。
      </p>
      <p>
        第二步：发挥出你的想象，绘画出你想要的事物把。
      </p>
       
        <button @click="toggleDec" class="close"> 关闭</button>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        screenHeight: 0,
        screenWidth: 0,
        borderData:[],
        gridNum: 1000,
        isDec: false
      }
    },
    created(){

    },
    mounted(){
      let _this = this;
      this.$nextTick(() => {
        _this.screenHeight = window.screen.height - 61;
        _this.screenWidth = document.body.offsetWidth;
        _this.run();
      })
    },
    methods: {
      toggleOperation: function(){
        span-active
      },
      toggleDec:function(){
        this.isDec = this.isDec ? false : true;
      },
      itemClick:function (item) {
        let index = item.index;
        this.borderData[index].backgroundColor = '#999';
        this.$set(this.borderData, index, this.borderData[index]);
      },
      calHeight:function(){
        let _this = this;
        _this.$nextTick( () => {
          let screenHeight = window.screen.height - 61;
          let elHeight = _this.$el.querySelector('.border-content').offsetHeight;
          if( screenHeight < elHeight ) {
            screenHeight = elHeight + 300;
          }
          _this.screenHeight = screenHeight;
          _this.screenWidth = document.body.offsetWidth;
        })
          
      },
      itemDBClick:function(item){
         let index = item.index;
        this.borderData[index].backgroundColor = '#000';
        this.$set(this.borderData, index, this.borderData[index]);
      },
      clear:function(){
        for(let i= 0 ; i<this.borderData.length; i++) {
          let item = this.borderData[i];
          item.backgroundColor = '#000';
        }
        this.$set(this.borderData, 0, this.borderData[0]);
      },
      run: function(){ // 画格子 ，默认为100
        let _this = this;
        _this.borderData = [];
        for(let i= 0 ; i<_this.gridNum; i++) {
          _this.borderData.push({
            index: i,
            backgroundColor: '#000'
          })
        }
        _this.calHeight();
      }

    }
  }
</script>

