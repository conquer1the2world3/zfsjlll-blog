function botuiinit() {
    var botui = new BotUI("my-botui-app");
    botui.message.add({
        delay: 800, //延迟时间
        content: "你好（被戳醒，揉了揉眼睛）" //内容
    }).then(function () {
        botui.message.add({
            delay: 1000,
            content: "为什么打扰我睡觉(∪.∪ )...zzz"
        }).then(function () {
            botui.action.button({
                delay: 1000,
                action: [{
                    text: "你是谁",
                    value: "who"
                }, {
                    text: "(上手rua)",
                    value: "rua"
                }]
            }).then(function(res){
                res.value == "who" && who();
                res.value == "rua" && rua();                    
            })
        })
    })
    
    var rua = function(){
        botui.message.add({
            delay:800,
            content:"不许碰我！嗷呜！"     
        }).then(function(){
            botui.message.add({
                type: 'html',
                loading: true,
                delay:600,
                content:'<img src="https://cdn.staticaly.com/gh/conquer1the2world3/zfsjlll-blog@main/Photo/8fad8fb2dcbe851.4bp9yzpnvd40.jpg" alt="嗷呜">'
            }).then(function(){
            botui.message.add({
                delay:600,
                content:"(你被不明生物咬中不幸中毒身亡。)<br>--------------------------------------------------<br>达成成就【不要手欠】"
            })
            })
        })
    }

    var who = function(){
        botui.message.add({
            delay:800,
            content:"既然你诚心诚意地发问了..."
        }).then(function(){
            botui.message.add({
                delay:1000,
                content:"呃。。。我只记得我在吃东西的时候被两个人敲晕，醒来就被关在这里了。"
            })
        .then(function(){
            botui.message.add({
                delay:1000,
                content:"他们不给我吃的，我只能每天吃他们的狗粮度日。"
            })
        }).then(function () {
            botui.action.button({
                delay: 1200,
                action: [{
                    text: "我也想吃🤤",
                    value: "eat"
                }, {
                    text: "tui,狗都不吃!",
                    value: "tui"
                }]
            }).then(function(res){
                res.value == "eat" && eat();
                res.value == "tui" && tui();                    
            })
        })
    })
    }

    var eat = function(){
        botui.message.add({
        delay: 800, //延迟时间
        content: "。。。那你点左上角标题去随便逛逛吧，吃好和好之后记得去祝福板里留言哦！" //内容
        }).then(function () {
            botui.message.add({
                delay: 800,
                content: "希望你的留言比他们的狗粮好吃ヾ(•ω•`)o"
            }).then(function(){
                botui.message.add({
                    delay:1000,
                    content:"总而言之，这两个人是通过互联网相识的。从相恋到奔现，从争吵到磕磕绊绊走到现在，也还算是一场甜甜的恋爱。如果想了解更多关于他们的故事的话，就自己去探索吧~"
                })
            })
        })
    }

    var tui = function(){
        botui.message.add({
        delay: 800, //延迟时间
        content: "给爷吃！" //内容
        }).then(function () {
            botui.message.add({
                type: 'html',
                loading: true,
                delay: 1000,
                content: '<img src="https://cdn.staticaly.com/gh/conquer1the2world3/zfsjlll-blog@main/Photo/mmexport1689240885937.oaknsq9z6q8.jpg" alt="狗粮" width="128" height="170"><br>--------------------------------------------------<br>达成成就【狗粮陷阱】'
            }).then(function(){
                botui.message.add({
                    delay:1200,
                    content:"总而言之，这两个人是通过互联网相识的。从相恋到奔现，从争吵到磕磕绊绊走到现在，也还算是一场甜甜的恋爱。如果想了解更多关于他们的故事的话，就自己去探索吧~"
                })
            })
        })
    }

}

botuiinit();