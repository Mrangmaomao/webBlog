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
   b{
     color: red;
     margin-left: .1rem;
     vertical-align: sub;
   }
   span:hover{
     cursor:pointer;
   }
   
  }
  .dec,.model{
     position:fixed;
     width: 30%;
     top: 30%;
     background-color: rgba(0,0,0,.5);
     border-radius: .1rem;
     border-top-right-radius: none;
     border: 1px solid #7dd5bc;
     height:20%;
     left: 35%;
     padding: .2rem .2rem;
     color:#fff;
     text-align: center;  
     overflow: hidden;
     h5{
     
       font-size: .2rem;
     } 
     p{
       font-size: .16rem;
       text-indent: .1rem;
       margin-top: .2rem;
     }
     .btn {
       width: 1rem;
       margin: 0 auto;
       height: .4rem;
       color: #fff;
       font-size: .16rem;
       background-color: #7dd5bc;
       display:block;
       border-radius:.4rem;
       margin-top: .1rem;
     }
     .close{
       position: absolute;
       top:-.02rem;
      //  background-color: #7dd5bc;
      
       color: #7dd5bc;
       right: 0;
       font-size: .4rem;
     }
     .close:hover{
       cursor:pointer;
     }
   }
   .index{
     position:relative;
   }
  .color-picker {
    position: absolute;
       
  }
  .model{
    height: 40%;
    top: 20%;
    textarea{
      width: 96%;
      height: 70%;
      margin-top: .2rem;
      border:1px solid #ddd;
      padding: 2%;
      
    }
    textarea.readonly {
      background-color: transparent;
      color:#fff;
    }
    .close{
      top:-.22rem;
      margin-top: .2rem;
    }
  }
  .play-left{
    position: fixed;
    width: 60px;
    background-color:rgba(180,201,171,.1);
    height: 100%;
    // top:.8rem;
    left: 0;
    padding-top: .4rem;
    text-align: center;
    div{
      padding: .1rem 0rem;
      // line-height: 1rem;
    }
    .clear-grid:hover,.clear-grid:active,.active{
      color: #7dd5bc;
      cursor: pointer;
    }
    .iconfont{
      font-size: .26rem;
      line-height: .3rem;
   
    }
  }
  /** loading 动画**/
  .spinner {
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
      position: fixed;
    left: 48%;
    top: 30%;
}
 
.spinner > div {
  background-color: #67CF22;
  height: 100%;
  width: 6px;
  display: inline-block;
   
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
<template>
  <div class="index">
    <Header  active="/play" :headerType="false"></Header>
    <div class="play-left">
      <div @click="operationActive(item,index)" v-for="(item,index) in leftData" :key="index" class="clear-grid" :class="{'active':item.active}" :title="item.title">
        <span :class="['iconfont',item.className]"></span>
      </div>
      <div title="色板">
        <colorPicker @on-close='closePanel' defaultColor='#333'  v-model="modelColor" v-on:change="headleChangeColor"></colorPicker> 
      </div>
    </div>
    <div class='content' :style="{width:screenWidth + 'px',height:screenHeight+'px'}">
      <div class='title'>
        <span @click="toggleDec">游戏玩法</span>
        <span class="clear" @click="clear">清除画板</span>
        <!-- <span class="clear" @click="clear">生成图片</span> -->
        <span class="clear" @click="getCode">生成程序数据</span>
        <span class="clear" @click="drawCode">导入程序数据</span>
      </div>
      <div class="from">
        <input v-model='gridNum' /><span @click="run">runing</span>
        <b>{{errorText}}</b>
      </div>
      <div class="border-content" v-if='borderData.length'>
        <div :key='item.index' v-for="item in borderData" :style="{backgroundColor:item.backgroundColor}" @click="itemClick(item,$event)" @dblclick="itemDBClick(item,$event)"></div>
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
       
       <span class="iconfont icon-guanbi1 close" @click="toggleDec" ></span>  
      
    </div>
     <div class="model" v-if="isModel">
      <h5>{{modelTitle}}</h5>
      <textarea name="" id="" v-model="resultCode" :readonly='modelType == 0'>
      </textarea>
      <span class="iconfont icon-guanbi1 close" @click="toggleModel" ></span>   
        
        <button  v-if="modelType == 1" @click="importData" class="btn"> 导入</button> 
      
    </div>
    <div class="spinner" v-if="loading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isModel: false,
        modelTitle: '',
        screenHeight: 0,
        screenWidth: 0,
        girdWidth: 20,
        gridHeight: 20,
        borderData:[],
        gridNum: 1000,
        errorText: '',
        modelColor: '#333',
        loading: false,
        openColor: false,
        clickItem: null,
        colorTop: 0,
        colorLeft: 0,
        resultCode:'',
        modelType: 0, //0 为生成数据， 1为导入数据
        operationType:0, // 0 是画笔， 1 是清除格子
        leftData:[
           {
            title: '清除',
            className: 'icon-qingchu',
            active: false,
            operationType: 1,
          },
          {
            title: '画笔',
            className: 'icon-icon-pencil',
            active: true,
            operationType: 0,
          }
        ],
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
      importData: function(){ // 导入数据
        let _this = this;
        _this.loading = true;
        if( _this.resultCode != '' ) {
          let data = JSON.parse(_this.resultCode);
          setTimeout(() => {
            _this.loading = false;
            this.isModel = true;
            _this.borderData = data.data;
            _this.gridNum = data.gridNum;
          _this.gridWidth = data.gridWidth;
          _this.gridHeight = data.gridHeight;
          _this.isModel = false;
           },2000);
          
          
        } else {
          console.log('不能输入为空')
        }

      },
      drawCode: function(){
        this.isModel = true;
        let _this = this;
        _this.modelTitle = '导入程序数据';
        _this.modelType = 1;
        _this.resultCode = '';
      },
      toggleModel:function(){
        this.isModel = this.isModel ? false : true;
      },
      getCode:function(){
        
        let _this = this;
        _this.modelTitle = '生成程序数据';
        _this.modelType = 0;
        _this.loading = true;
        setTimeout(() => {
          _this.loading = false;
          this.isModel = true;
        },2000);
        let result = {
          data:_this.borderData,
          gridNum: _this.gridNum,
          gridWidth: _this.gridWidth,
          gridHeight: _this.gridHeight
        };
        // for( let i=0; i < _this.borderData.length;i++ ){
        //   let item = _this.borderData[i];
        //   if ( item.backgroundColor != '#000' ) {
        //     result.data.push(item);
        //   }
        // }
        _this.resultCode = JSON.stringify(result);
      },
      operationActive:function(item,index){
        let _this = this;
        _this.operationType = item.operationType;
        _this.leftData.forEach((item,i)=>{
          item.active = false;
        })
        _this.leftData[index].active = true;
        _this.$set(_this.leftData,index,_this.leftData[index]);
      },
      toggleOperation: function(){
        //span-active
      },
      toggleDec:function(){
        this.isDec = this.isDec ? false : true;
      },
      closePanel: function(val){
        if (!val) {
          this.openColor = false;
        }
      },
      itemClick:function (item, e) {
        let index = item.index;
        this.clickItem = item;
        switch(this.operationType) {
          case 0 :this.drawColor(item,index);break ;
          case 1 :this.clearGrid(item,index);break ;
        }
        
        
      },
      drawColor:function(item,index,color){
        this.borderData[index].backgroundColor = this.modelColor;
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
      itemDBClick:function(item,e){
        e.stopPropagation();
        let index = item.index;
        this.borderData[index].backgroundColor = '#000';
        this.$set(this.borderData, index, this.borderData[index]);
      },
      clearGrid:function(item,index){ // 清除一个格子
        this.borderData[index].backgroundColor = '#000';
        this.$set(this.borderData, index, this.borderData[index]);
      },
      clear:function(){ // 清除所有
        for(let i= 0 ; i<this.borderData.length; i++) {
          let item = this.borderData[i];
          item.backgroundColor = '#000';
        }
        this.$set(this.borderData, 0, this.borderData[0]);
      },
      run: function(){ // 画格子 ，默认为100, 最大在10000
        let _this = this;
         _this.errorText =  _this.gridNum > 10000 ? '此格子最大数不能超过10000' : '';
        if( _this.gridNum > 10000 ) { // 大于10000 有卡顿
          return false;
        }
        _this.borderData = [];
        for(let i= 0 ; i<_this.gridNum; i++) {
          _this.borderData.push({
            index: i,
            backgroundColor: '#000'
          })
        }
        _this.calHeight();
      },
      headleChangeColor: function(color){ //颜色改变的时候
        this.modelColor = color;
      }
    }
  }
</script>