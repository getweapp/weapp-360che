var app = getApp();
Page({
    data:{
        id:'1221',
        start:{
            city:'怀柔区',
            province:'北京'
        },
        end:{
            city:'武汉',
            province:'湖北'
        },
        mileage:'200',
        receipt:'2000元/吨，货到凭回单结算',
        address:[
            {
                title:'装货地址',
                content:'北京市怀柔区怀柔小区3号楼'
            },
            {
                title:'卸货地址',
                content:'湖北省武汉市中山大道中心小区2号楼'
            }
        ],
        source:[
            {
                caption:'装货时间',
                content:'无'
            },
            {
                caption:'货物情况',
                content:'冻品30吨'
            },
            {
                caption:'车辆需求',
                content:'15米冷藏车'
            }
        ],
        other:'此线路为长期线路，需两台车长期合作，联系时请说明货源信息来自微信小程序。',
        phone:'4008003030'
    },
    onLoad:function(options){
        var that = this;
        wx.request({
            url:'https://api.getweapp.com/thirdparty/360che/56',
            data:{
                c:'carlist',
                m:'ajaxGetShipInfo',
                sid:options['id'],
                uid:app['uid']
            },
            success:function(res){
                that.setData(res.data);
            }
        })
    },
    makePhoneCall:function(){
        var that = this;
        wx.makePhoneCall({
            phoneNumber:that.data['phone']
        })
    },
    showMap:function(e){
        var index = e.target['dataset'].index;
        wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function(res) {
            var latitude = res.latitude
            var longitude = res.longitude
            wx.openLocation({
              latitude: latitude,
              longitude: longitude,
              scale: 28
            })
          }
        })

    }
})
