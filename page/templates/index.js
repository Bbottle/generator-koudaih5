/**
 * Created by gorden on 15/2/25.
 */

(function () {
    function Index() {

    };

    Index.prototype = {
        init: function () {
            var that = this;
//            that.cacheDom();
//            that.cacheData();
//            that.renderUI();
//            that.bindEvent();
//            that.deallocate();
            /*
            @TODO : 私有方法以"_"开头:_tempMethod
            @TODO : sea.js 分模块开发
             */
        },
        cacheDom: function () {
//          保存DOM元素
            var that = this;
        },
        cacheData: function () {
//          保存相关数据,

            var that = this;
            that.data = {};
            that.data.param = {};
            that.data.multiLang = LANG[that.queryLang()];

        },
        renderUI: function () {
//          渲染UI
            var that = this;

        },


        bindEvent: function () {
//         绑定事件
            var that = this;


        },
        deallocate: function(){
//        DOM,Date,Event在数据加载完的时候，如果不再使用，记得deallocate，这样会让你的页面更快
          var that = this;

        },
        SendRequest: function (url, success, error) {
//          公共方法,JSONP
            $.ajax({
                url: url + "&callback=?",
                dataType: "JSONP",
                success: function (res) {
                    success(res);
                },
                error: function (err) {
                    error && error(err);
                }
            })
        },
        hackJSLang: function (key) {
//          公共方法，多语言
            var that = this;
            return LANG[that.queryLang()][key] || '';
        }
    }

    var index = new Index();
    index.init();

})();
