$(function(){
    var id;
 	$(window).resize(function() {
        clearTimeout(id);
        id = setTimeout(doneResizing, 500);
    });
    
    var mqWidth = 0;
 	function doneResizing(){
      	mqWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
 
    $(window).scroll(function(){
      	if(mqWidth > 1024){
	        var $snb = $('#snb');
	        var scrollTop = $(window).scrollTop();
	        $snb.stop().animate({"top":scrollTop+15},300);
        }
    });

    doneResizing();

    $('.noticeList li').on('click','a',function(e){
    	e.preventDefault();
    	$(this).parent().addClass('active').siblings().removeClass('active');

    });
});
 