var app = getApp();
Page({
    data:{
        trucks:''
    },
    onLoad:function(options){
        var that = this;
        wx.request({
            url:'https://api.getweapp.com/thirdparty/360che/56',
            data:{
                c:'carlist',
                m:'AjaxGetCarList'
            },
            success:function(res){
                that.setData({
                    trucks:res.data
                })
            }
        })
    }
})
