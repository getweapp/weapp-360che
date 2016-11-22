
Page({
	data: {
	  	list:['出发地','到达地','车长与车型'],
	  	id:'1221',
		start:{
		    city:'怀柔区',
		    province:'北京'
		},
		end:{
		    city:'武汉',
		    province:'湖北'
		},
		mileage:'200'
	},
	onLoad:function(options){
	    this.setData()
	}
})