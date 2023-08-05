//页面焦点消失互动
var OriginTitle = document.title;

var titleTime;

document.addEventListener('visibilitychange', function () {

    if (document.hidden) {

        document.title = '你要去哪 Σ(っ °Д °;)っ';

        clearTimeout(titleTime);

    }

    else {

        document.title = '欢迎回来ψ(｀∇´)ψ';

        titleTime = setTimeout(function () {

            document.title = OriginTitle;

        }, 2000);

    }

});