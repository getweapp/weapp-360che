Page({
	data: {
	  	list:''
	},
	onLoad:function(options){
		var that = this;
		wx.request({
			url:'https://api.getweapp.com/thirdparty/360che/56',
			data:{
				c:'carlist',
				m:'ajaxGetShipList'
			},
			success:function(res){
				that.setData({
					list:res.data
				})
			}
		})
	}
})
