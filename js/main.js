
$(document).ready(function(){
  $("#mainmenu").click(function(){
    $("#gn-menu").toggleClass("fadeInLeftBig");
	 $("#gn-menu").toggleClass("fadeOutLeftBig");
	 $('#gn-menu').removeClass('hidden');
	 
	console.log('Clicked');
	
  });
}); 
 





    (function($){
        $(document).ready(function(){
            $(".contentscroll").mCustomScrollbar();
			$("#sponsors").mCustomScrollbar();
				$("#cbp-spmenu-s1").mCustomScrollbar();
				$(".contentnew").mCustomScrollbar({
    axis:"x" // vertical and horizontal scrollbar
});
			
        });
    })(jQuery);
	 
		
	
	

$(document).ready(function(){
  $(".ico-comp").mouseenter(function(){
    $("#icon1").removeClass('hidden');
	  $("#icon1").addClass('fadeInRight');
  });
  $(".ico-comp").mouseleave(function(){
    $("#icon1").addClass('hidden');
	  $("#icon1").removeClass('fadeInRight');
  });
});

$(document).ready(function(){
  $(".ico-proshow").mouseenter(function(){
    $("#icon2").removeClass('hidden');
	  $("#icon2").addClass('fadeInRight');
  });
  $(".ico-proshow").mouseleave(function(){
    $("#icon2").addClass('hidden');
	  $("#icon2").removeClass('fadeInRight');
  });
});

$(document).ready(function(){
  $(".ico-carnival").mouseenter(function(){
    $("#icon3").removeClass('hidden');
	  $("#icon3").addClass('fadeInRight');
  });
  $(".ico-carnival").mouseleave(function(){
    $("#icon3").addClass('hidden');
	  $("#icon3").removeClass('fadeInRight');
  });
});

$(document).ready(function(){
  $(".ico-events").mouseenter(function(){
    $("#icon4").removeClass('hidden');
	  $("#icon4").addClass('fadeInRight');
  });
  $(".ico-events").mouseleave(function(){
    $("#icon4").addClass('hidden');
	  $("#icon4").removeClass('fadeInRight');
  });
});

$(document).ready(function(){
  $(".ico-social").mouseenter(function(){
    $("#icon5").removeClass('hidden');
	  $("#icon5").addClass('fadeInRight');
  });
  $(".ico-social").mouseleave(function(){
    $("#icon5").addClass('hidden');
	  $("#icon5").removeClass('fadeInRight');
  });
});

$(document).ready(function(){
  $("#thumb-list li").mouseenter(function(){
    $(this).addClass('current-thumb');
	  
  });
  $("#thumb-list li").mouseleave(function(){
    $(this).removeClass('current-thumb');
	 
  });
});

var cntWd, sldWd, tb;
	$(function() {
		
		cntWd = $('#aboutpage').innerWidth();
		tb = $('#thumb');
		sldWd = tb.outerWidth();
		console.log(sldWd);
		
		$('#aboutpage').mousemove(function(e)
		{
			tb.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
 		});
});


		
			var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
		menuRight = document.getElementById( 'cbp-spmenu-s2' ),
		
		showLeft = document.getElementById( 'showLeft' ),
		showRight = document.getElementById( 'showRight' ),
		
		showLeftPush = document.getElementById( 'sidemenu' ),
		showRightPush = document.getElementById( 'showRightPush' ),
		body = document.body;



showLeftPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	 $("#sidemenu").toggleClass('cross');
	disableOther( 'showLeftPush' );
};


function disableOther( button ) {
	if( button !== 'showLeft' ) {
		classie.toggle( showLeft, 'disabled' );
	}
	if( button !== 'showRight' ) {
		classie.toggle( showRight, 'disabled' );
	}
	
	if( button !== 'showLeftPush' ) {
		classie.toggle( showLeftPush, 'disabled' );
	}
	if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
}
		
 $(function(){
    var static_image = "http://antaragni.in/mainwebsite/images/aboutlogo.png";
    var animated_image = "http://antaragni.in/mainwebsite/images/sprite.png";
    var animation_duration = 2000;
    
    pxLoader = new PxLoader();
    pxLoader.addImage(static_image);
    pxLoader.addImage(animated_image);
    
    pxLoader.addCompletionListener(function(e){
        $("#loader").animate({left:-800}, 750);
		 $('#loader').addClass('fadeOutUpBig');
    });
    
    pxLoader.addProgressListener(function (e) {
	a = e.completedCount;
b = e.totalCount;
c = a/b;
d = c*100;
console.log(d);

        $("#preloaderScreen").text(e.completedCount +"/"+ e.totalCount);
		//$("#preloaderScreen").text= d;
		
    });
    
    
        
        pxLoader.start();
});


jQuery(document).ready(function($){test =0;
	jQuery('#thumb-forward').click(function() {
	console.log("clicked");
	
     
    if (test < 1920) {
   
		test= test+240;
		$('.contentnew').mCustomScrollbar("scrollTo",test);}
				
			
	});
	jQuery('#thumb-back').click(function() {
	console.log("clicked");
	
     
    if (test > 0) {
   
		test= test-240;
		$('.contentnew').mCustomScrollbar("scrollTo",test);}
				
			
	});
	
	
});


$(document).ready(function() {
    $('#picture').mousemove(function(event) {
        $('#instructions').hide();
        
        cx = Math.ceil($(window).width() / 2.0);
        cy = Math.ceil($(window).height() / 2.0);
        dx = event.pageX - cx;
        dy = event.pageY - cy;
        
       
        
        tiltx = (dy / cy);
        tilty = - (dx / cx);
        radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        degree = (radius * 20);
        
        // 
        // 
        // x0 = Math.ceil(cx - (dx * 0.2));
        // y0 = Math.ceil(cy - (dy * 0.2));
        // x1 = event.pageX;
        // y1 = event.pageY;
        // r0 = 300;
        // r1 = 10;
        // 
        // sx = -dx * 0.03;
        // sy = -dy * 0.03;
        // b  =  (Math.abs(sx) + Math.abs(sy)) * 0.2;

        $('#picture').css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
        $('#picture').css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
        
        // $('#picture').css('-webkit-transform','rotateY(20deg)');
        
        // $('body').css('background-image', "-webkit-gradient(radial, " + x0 +" " + y0 +", "+ r0 +", "+ x1 +" "+ y1 +", "+ r1 +", from(#575757), to(#FFFFFF))");
        // $('h1').css('text-shadow', "#444 "+ sx +"px "+ sy + "px " + b + "px");
    });
});



function gotoevent(id){
          // Reove "link" from the ID
        id = id.replace("link", "");
nextid= id + 1;
pevid= id - 1;
$("#"+id).toggleClass('hidden');
$("#"+id).toggleClass('fadeOutDownBig');
$("#"+id).toggleClass('fadeInDownBig');



    }
$("#thumb-list > li ").click(function(e) { 

        e.preventDefault(); 
console.log("check");
          // Call the scroll function
        gotoevent($(this).attr("id"));           

    });


function gotothid(id){
          // Reove "link" from the ID
        id = id.replace("link", "");

$("#"+id).toggleClass('hidden');
$("#"+id).toggleClass('fadeOutDownBig');
$("#"+id).toggleClass('fadeInDownBig');



    }
            $(function() {
                $('#plx-nav > ul >li > a').bind('click',function(event){
                  gotothid($(this).attr("id"));     
                });
            });
        