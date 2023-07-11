// 页面焦点消失互动
var OriginTitle = document.title;

var titleTime;

document.addEventListener('visibilitychange', function () {

    if (document.hidden) {

        document.title = '你别走吖 Σ(っ °Д °;)っ';

        clearTimeout(titleTime);

    }

    else {

        document.title = '你可算回来了 (｡•ˇ‸ˇ•｡)';

        titleTime = setTimeout(function () {

            document.title = OriginTitle;

        }, 2000);

    }

});


/* 复制提醒 */
document.addEventListener("copy", function (e) {
    new Vue({
        data: function () {
            this.$notify({
                title: "嘿！复制成功",
                message: "若要转载请务必保留原文链接！爱你呦~",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type: "success"
            });
            return { visible: false }
        }
    })
})

/* 首次访问弹窗 */
$(function () {
    if (window.localStorage.getItem("isClose") == 'yes') {
        $('#note')[0].style.display = 'none';
    } else {
        $('#note')[0].style.display = 'block';
    }

});
function closeclick() {
    $('#note')[0].style.display = 'none';
    window.localStorage.setItem("isClose", "yes");
}