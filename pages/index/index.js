Page({

  data:{
    popularList:[],
  },
  
  // 伪数据
  getPopular:function(){
    var fakePop = new Array(6);
    for(var i =0;i<6;i++){
      var ele = new Object();
      ele.name = "皇家"+i+"号";
      fakePop[i] = ele;
    }
    this.setData({
      popularList:fakePop,
    })
  },

  onShow(){
    this.getPopular();
  }

})