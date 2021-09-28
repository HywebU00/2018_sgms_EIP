// 自行加入的JS請寫在這裡
$(function() {
    $('.Menu>ul li').hover(
        function(){
            $(this).find('ul').fadeIn(300);
        },
        function(){
            $(this).find('ul').fadeOut(300);
        }
    )
});