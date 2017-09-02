/**
 * Created by Administrator on 2017/8/31.
 */

(function($){

    $.fn.carrousel = function (options) {
        var contentItem = $(this).find(".carrousel-content .carrousel-item");
        var length = contentItem.length;

        var index = 0;
        var time = 2000;

        showItem(index);

        var sh = setInterval(next, time);



        //下一个按钮
        $(this).find('.carrousel-next').click(function(){
            sh = clearInterval(sh);
            next();
            sh = setInterval(next, time);
        });


        //上一个按钮
        $(this).find('.carrousel-pre').click(function(){
            sh = clearInterval(sh);
            pre();
            sh = setInterval(next, time);
        });

        function showItem(index){
            contentItem.each(function(i, o){
                if(i == index){
                    $(this).fadeIn();
                }else{
                    $(this).fadeOut();
                }
            });
        }

        function pre(){
            index = index - 1;
            if(index == -1) index = length - 1;
            showItem(index);
        }

        function next(){
            index = index + 1;
            if(index == length) index = 0;
            showItem(index);
        }
    }

})(window.jQuery);