var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

    data: {
        // start 导航条需要的变量(weui感觉好不人性化，还不如bootstrap好用)
        tabs: ["选项一", "选项二", "选项三"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        // end

        popularList: [],
    },

    // 伪数据
    getPopular: function () {
        var fakePop = new Array(6);
        for (var i = 0; i < 6; i++) {
            var ele = new Object();
            ele.name = "皇家" + i + "号";
            fakePop[i] = ele;
        }
        this.setData({
            popularList: fakePop,
        })
    },

    //导航相关
    navbar: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },


    onShow() {
        this.getPopular();
        navbar;

    }

})