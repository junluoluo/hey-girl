$(function(){
    frameHeight();
    $(window).resize(function(){
        frameHeight();
    });
    //input  checkbox和radio点击效果
    $(document).on("click",".b_checkbox label",function(event){
         if($(this).hasClass("disabled")){
             return false;
         }else{
             if($(this).find("i").hasClass("checked")){
                 $(this).find("i").removeClass("checked");
                 $(this).find("input").val("");
                 return false;
             }else{
                 $(this).find("i").addClass("checked");
                 $(this).find("input").val($(this).attr("data-value"));
                 return false;
             }
         }
    });
    $(document).on("click",".b_radio label",function(){
        if($(this).hasClass("disabled")){
            return false;
        }else{
            $(this).find("i").addClass("checked");
            $(this).siblings('label').find("i").removeClass("checked");
            $(this).parent().find("input[type=hidden]").val($(this).attr("data-value"));
        }
    });
})
//设置iframe框高度
function frameHeight(){
    $("#content").height($(window).height() - 120);
}
function hrefUrl(url,obj){
    if(url.indexOf("top_twenty_analyse") != -1){
        $("#headerTop2").show();
        $("#headerTop1").hide();
    }else{
        $("#headerTop1").show();
        $("#headerTop2").hide();
    }
    $(obj).addClass("active");
    $(obj).siblings().removeClass("active");
    $("#main_frame").attr("src",url);
    $(window).scrollTop(0);
}