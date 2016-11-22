App({
    uid:0,
    onLaunch:function(){
        // wx.checkSession({
        //     fail: function(){
                var that = this;
                wx.login({
                    success: function(res) {
                        if (res.code) {
                            /*
                            //发起网络请求
                            wx.request({
                                url: 'https://2bsapi.360che.com/56/',
                                data: {
                                    c:'wxadoc',
                                    code: res.code
                                },
                                success:function(res){
                                    if(res && res.data){
                                        that.uid = res.data['data'].uid
                                    }
                                }
                            })
                            */
                        } else {
                            console.log('获取用户登录态失败！' + res.errMsg);
                        }
                    }
                });
        //     }
        // });
    }
});
