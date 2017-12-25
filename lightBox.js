/**
 * Created by Administrator on 2017/11/23 0023.
 */
"use strict";
function lightBox(id) {
//灯箱效果
    let currentImg = 0;//当前是哪张图片
    let num = $("#" + id + " figure").length;
    //在大的div中加蒙版及图片按钮
    $(".lightBox").append("" +
        "<div class='lightBoxMengban'>" +
        "<img src='img/1.jpg' class='scBig'>" +
        "<img src='img/close.png' class='close'>" +
        "<img src='img/toNext.png' class='next'>" +
        "<img src='img/toPre.png' class='pre'>" +
        "</div>");
    //currentImg=$(this).currentImg();
    $(".lightBoxMengban").hide();  //默认蒙版隐藏
    //单击任意一张图片，显示该图片
    $("#" + id + " figure").click(function () {
        console.log(num)
        currentImg=$(this).index();
        $(".lightBoxMengban").fadeIn();
        var src = $(this).find("img")[0].src;
        $(".scBig").attr("src", src);
    });
    //上一页按钮
    $(".pre").click(function () {
        if (currentImg > 0) {
            currentImg--;
            $(".scBig").attr("src", "" + $("#" + id + " figure").eq(currentImg).find("img").attr("src") + "")
        }else {
            alert("已经是第一张图片")
        }
    });
    //下一页按钮
    $(".next").click(function () {

        if (currentImg < (num - 1)) {
            currentImg++;
            $(".scBig").attr("src", "" + $("#" + id + " figure").eq(currentImg).find("img").attr("src") + "")
        }else {
            alert("已经是最后一张图片")
        }
    });
    //关闭按钮
    $(".close").click(function () {
        $(".lightBoxMengban").fadeOut();
    })
}