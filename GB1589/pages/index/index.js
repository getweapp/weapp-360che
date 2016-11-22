Page({
    data: {
        swiper:{
            items: [
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162241.jpg',
                    text:'未来何去何从 新政后17米5大板依然万能'
                },
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162232.jpg',
                    text:'主要整治超载 中物联副会长解读921新政'
                },
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162200.jpg',
                    text:'6X2前双少拉3吨 司机生存空间还剩多少?'
                },
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162152.jpg',
                    text:'史上最全：921新政各省治超现状大盘点'
                },
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162144.jpg',
                    text:'为期两个月 GB1589等标准整改系统开通'
                },
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162137.jpg',
                    text:'不只是解放J6P 8吨内6×4牵引车都有谁？'
                },
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162128.jpg',
                    text:'治超又有大动作 两部委联合下发新通知'
                },
                {
                    url:'http://imgf.360che.com/HW_Image/2016/1027/1027162119.jpg',
                    text:'治超文件成废纸？ 北方4省超载现象调查'
                },
            ],
            indicatorDots: false,
            autoplay: true,
            interval: 3000,
            duration: 300
        },
        projects:[
            {
                url:"http://static.360che.com/wap/images/gb1589/discuss.jpg",
                navToUrl:"../talk/index",
                total:"4704",
                text:"讨论"
            },
            {
                url:"http://static.360che.com/wap/images/gb1589/reading.jpg",
                navToUrl:"../description/index",
                total:"15202",
                text:"解读"
            },
            {
                url:"http://static.360che.com/wap/images/gb1589/see_about.jpg",
                navToUrl:"../nav/index",
                total:"31829",
                text:"查看"
            }
        ]
    },
    navToPage:function(){
        var projectData = this.data.projects;
        wx.navigateTo({
            url:projectData[index]['navToUrl']
        })
    }

})
