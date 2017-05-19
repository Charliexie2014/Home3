$(function(){
	
		setInterval(function(){
       		$(".se-pre-con").fadeOut("slow");
    	},3000);
	
	var index=0; 
    var imgnum=$('.banner ul li').length; //获得li的个数
    var nmun='';
     
     
    $('.banner').hover(function(){
        clearInterval(p); //鼠标移动到上面停止到当前画面轮播
    },function(){
        pic(); //鼠标移开继续开始轮播
        });
     
    function pic(){ 
    //轮播切换图片的函数，思路就是通过定时器不停的改变index的值，选择对应的图片页面进行显示
        p=setInterval(function(){
            index++;
            if(index>=imgnum){
                index=0; //当index大于图片总个数时回到第一屏
            }
            selectimg(index); //通过index显示对应图片
        },4000);
         var iCount = setInterval(p, 4000);
    }
     
    function selectimg(index){ //通过index显示对应的图片，并隐藏这张图片的其他图片
        $('.banner ul li').eq(index).fadeIn(600).siblings().fadeOut(600); 
        //同时把下面的小按钮加上选中样式，其他取消
    }
     
    $('.banner .ban-r').click(function(){ //往左切换
        index-=1;
        if(index<0){
                index=imgnum-1;
            }
        selectimg(index);
        clearInterval(iCount);
    });
     
    $('.banner .ban-l').click(function(){ //往右边切换
        index+=1;
        if(index>imgnum-1){
                index=0;
            }
        selectimg(index); 
         clearInterval(iCount);
    });
    pic();
	
	
	$(".nav-right li").click(function(event) { 
		var index = $(this);
		 $('html, body').stop().animate({
            scrollTop: $(index.find("a").attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        index.find("a").addClass("color").parent().siblings().find("a").removeClass("color")
   });

   	var winHeight = $(window).height();
	$(window).scroll(function(){
		var winScrollTop = $(window).scrollTop();
		$(".pos").each(function(){
			var mainOffsetTop = $(this).offset().top;
			var mainHeight = $(this).height();
			if (winScrollTop>mainOffsetTop+mainHeight || winScrollTop<mainOffsetTop-winHeight) {
				
			} else{
				$(".nav-right li").eq($(this).index()-1).children("a").addClass("color").parent().siblings().children("a").removeClass("color")
			}
		})
		 

        
    if ($("header").offset().top > 50) {
        $("header div ul li").stop().animate({
        	padding:"14px 15px" ,
        },600,'easeInOutExpo');
        $("header").addClass("header")
    } else {
        $("header div ul li").stop().animate({
        	padding:"32px 15px",
        },600,'easeInOutExpo');
         $("header").removeClass("header")
    }
    
});
   
   
});





