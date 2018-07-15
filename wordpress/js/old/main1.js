// JavaScript Document
var DELAY_SPEED = 200;//文字が流れる速さ
var FADE_SPEED = 400;//表示のアニメーション時間
var str = [];
$(document).ready(function(){
	$('.fadein > span').each(function(i){//セレクタで指定した要素すべて
        $(this).css('opacity','1');//行を不透明にする
        str[i] = $(this).text();//元のテキストをコピーし
        $(this).text('');//テキストを消す
        var no = i;
        var self = this;
        var interval = setInterval(function(){//50ミリ秒毎にチェック
            if(no == 0 || $('.fadein > span').eq(no - 1).children('span:last').css('opacity') == 1){//最初の行または前の行が全文字表示された時
                clearInterval(interval);//チェックを停止
                for (var j = 0; j < str[no].length; j++) {
                    $(self).append('<span>'+str[no].substr(j, 1)+'</span>');//1文字ずつ<span>を付けて
                    $(self).children('span:last').delay(DELAY_SPEED * j).animate({opacity:'1'}, FADE_SPEED);//時間差でフェードインさせる
                }
            }
        }, 50);
    });
});