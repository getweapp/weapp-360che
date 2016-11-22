function navigateTo(url){
    wx.navigateTo({
        url:url
    });
};
Page({
    data:{
        homeLink:'../list/list',
        myLink:'../user/user'
    },
    goHome:function(){
        navigateTo(this.data['homeLink'])
    },
    viewMyList:function(){
        navigateTo(this.data['myLink'])
    }
})
