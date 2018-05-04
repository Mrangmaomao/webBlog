
class JsType {
  constructor(){
    this.isType = Object.prototype.toString;
  }
  isArray( arr ) { // 判断数组
    return  this.isType.call( arr ) === '[object Array]' ;
  }
  checkNaN ( obj ) { // 判断 nan
    return obj !== obj;
  }
  isNumber( num ) { //判断number
    let res = false;
    let type = this.isType.call( num );
    if ( type == '[object Number]') {
      res = true;
    } else if ( !( this.checkNaN( Number(num) )) ){
      return this.isType.call( Number(num) ) === '[object Number]';
    }
    return res;
  }
  isFunction( fn ) { // 判断 fn
    return  this.isType.call( fn ) === '[object Function]';
  }
  isString( str ) {
    return this.isType.call( str ) === '[object String]';
  }
  isReg( reg ) {
    return this.isType.call( reg ) === '[object RegExp]';
  }
  isUndefined( str ) {
    return this.isType.call( str ) === '[object Undefined]';
  }
  isObject( obj ) {
    return this.isType.call( obj ) === '[object Object]';
  }
  isNull ( obj ) {
    return this.isType.call( obj ) === '[object Null]';
  }
  isDate( date ) {
    return this.isType.call(date) === '[object Date]';
  }
}
const jsType = new JsType();
class Fn {
  deepCopy( arr  ){ // 深拷贝
    let _this = this;
    let obj;
    if ( jsType.isArray( arr ) ) {
      obj = [];
      for ( let i=0; i< arr.length;i++ ) {
        obj.push( _this.deepCopy( arr[i] ) );
      }
    } else if ( jsType.isObject(arr)){
      obj = {};
      for ( let key in arr){
        obj[key] = this.deepCopy(arr[key]);
      }
    } else {
      return arr;
    }
    return obj;
  }
  timestampToString(time, onlyDate) {
    let date = new Date(time),
      arr = date.toLocaleDateString().split('/'),
      str1 = arr[0] + '-' +('0' + arr[1]).slice(-2) + '-' +('0' + arr[2]).slice(-2),
      str2 = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' +('0' + date.getSeconds()).slice(-2);
    return onlyDate ? str1 : (str1 + ' '+ str2)
  }
  isGovernment( name  ){ // 判断是否为直辖市
    let arr = [
      '北京市',
      '重庆市',
      '天津市',
      '上海市'
    ];
    name = name.replace(' ','');
    let res = false;
    for ( let i =0 ; i< arr.length; i++ ) {
      if ( name == arr[i] ) {
        res = true;
        break;
      }
    }
    return res;
  }
  calcWeight(product, count) {// 计算总重量
    return product.packageWeight * count / product.packageCount
  }
  calcVolumn(product, count) {// 计算总体积
    return product.packageWidth * product.packageHeight * product.packageLength * count / product.packageCount
  }
  uniqueArr(arr, key) { //去重
    var result = [],
      isRepeated,
      obj = {};
    if(key) {
      arr.map(item => {
        if(item[key] in obj) {
          isRepeated = true
        }else{
          isRepeated = false
          result.push(item)
        }
        obj[item[key]] = isRepeated
      })
    }else{
      arr.map(item => {
        if(item in obj) {
          isRepeated = true
        }else{
          isRepeated = false
          result.push(item)
        }
        obj[item] = isRepeated
      })
    }
    return result
  }
}
const commonFn = new Fn();
export { jsType,commonFn } ;
