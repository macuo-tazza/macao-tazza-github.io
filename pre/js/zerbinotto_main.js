

jQuery(function($) {

	
	$('.pibs_nboard_subject').each(function(){
		if($(this).children('a').text().indexOf('Q') > -1){
			$(this).children('a').html($(this).children('a').text().replace('Q.','<font style="color:red">Q.</font>'));
		}
	});

	if($('.pibs_nboard_write_subject').text().indexOf('Q') > -1){
		$('.pibs_nboard_write_subject').html($('.pibs_nboard_write_subject').text().replace('Q.','<font style="color:red">Q.</font>'));
	}


	/***********************************************/
	/* 臾몄꽌�� 留곹겕 �ㅽ겕濡ㅼ븷�덈찓�댁뀡 */
	/***********************************************/
	 $(".btn_top").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);			
        });

	/***********************************************/
	/* MAIN SLIDESHOW */
	/***********************************************/
	$('.slides-container').cycle({
		 slides:"div",
		 pager:'.cycle-pager'
	});

	
	/*main*/
	/*$("#demo1").webwidget_slideshow_dot({
		slideshow_time_interval: '5000',
		slideshow_window_width: '350',
		slideshow_window_height: '230',
		slideshow_title_color: '#ffffff',
		soldeshow_foreColor: '#000',
		directory: 'http://ecopa21.pibs-app.net/wp-content/themes/ecopa21/image/'
	});

	$("#demo2").webwidget_slideshow_dot({
		slideshow_time_interval: '5000',
		slideshow_window_width: '725',
		slideshow_window_height: '230',
		slideshow_title_color: '#FFF',
		soldeshow_foreColor: '#7799BB',
		directory: 'http://ecopa21.pibs-app.net/wp-content/themes/ecopa21/image/'
	});

	$('#demo5').scrollbox({
		direction: 'h',
		distance: 134
	});
	$('#demo5-backward').click(function () {
		$('#demo5').trigger('backward');
	});
	$('#demo5-forward').click(function () {
		$('#demo5').trigger('forward');
	});*/
if($('#fullpage').length > 0){
	setTimeout(function(){
		$('#fullpage').fullpage({
			verticalCentered: true,
			anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5']
			//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE']
		});
	},0);	
}


	
	/*$('#last_photos').cycle({
		fx     : 'scrollHorz',
		speed  : '2000',
		timeout: 3000,
		prev   : '.arr_left',
		next   : '.arr_right'
	});*/


	$('.bxslider').bxSlider({
	  auto: true,
	  autoControls: true
	});


	$(document).ready(function(){
	  $('.slider4').bxSlider({
		slideWidth: 300,
		minSlides: 2,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 10
	  });
	});

	$(document).ready(function(){
	  $('.slider5').bxSlider({
		slideWidth: 300,
		minSlides: 2,
		maxSlides: 3,
		moveSlides: 2,
		slideMargin: 10
	  });
	});


	/*******************************/
	/*��*/
	/*****************************/
	$(function () {

		$(".tab_content").hide();
		$(".tab_content:first").show();

		$("ul.tabs li").click(function () {
			$("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide()
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn()
		});
	});
	$('.tabs .tab01').click(function () {
		$('.tabs_wrap hr').animate({'left':10},300);
	});
	$('.tabs .tab02').click(function () {
		$('.tabs_wrap hr').animate({'left':140},300)
	});

 /***********************************************/
	/* SIDEBAR */
	/***********************************************/
    $('ul#sidebar_menu > li > a').click(function(){
		
		var $siblings_menu = $(this).siblings('ul');
		
		//if($siblings_menu.length > 0 && $siblings_menu.is(":hidden")){

		//	$('#sidebar_menu ul').slideUp();
		//	$(this).siblings('ul').slideToggle();
		//	
		//	return false;
		//
		//}
		
	});

	$('#sidebar_menu .current_page_item').parent().show();




	/***********************************************/
	/* SIDEBAR */
	/***********************************************/
    $('ul#sidebar_menu > li > ul > li > a').click(function(){
		
		var $siblings_menu = $(this).siblings('ul');
		
		if($siblings_menu.length > 0 && $siblings_menu.is(":hidden")){

			$('#sidebar_menu ul li ul').slideUp();
			$(this).siblings('ul').slideToggle();
			
			return false;

		}
		
	});

	$('#sidebar_menu .current_page_item').parent().show();
	
		
	/***********************************************/
	/* MEDIAELEMENT (CROSSBROWSING VIDEO AND AUDIO)  */
	/***********************************************/
	$('video,audio').not('#home_video video, .widget_inner video').mediaelementplayer({
	    startVolume: 0.4
		// All options : http://mediaelementjs.com/
	});	
	
	// debug flash autoplay for the Main page video
	var home_video_width = $('#home_video').width();
	var home_video_height = $('#home_video').height();
	
	$('#home_video video').mediaelementplayer({
	    startVolume: 0.4,
		enableAutosize: true,
		success: function(mediaElement, domObject) {
			if (mediaElement.pluginType == 'flash') {
				
				// force size
				mediaElement.setVideoSize(home_video_width,home_video_height);
				
				// force autoplay
				mediaElement.addEventListener('canplay', function() {
					mediaElement.play();					
				}, false);
			}
		}
	});
	
	
	// debug flash autoplay for the Main page video widget
	// TODO BUILD A FUNCTION TO REDUCE THE DUPLICATE CODE 
	var $widget_video_container = $('.widget_inner video').parent();
	var widget_video_width = $widget_video_container.width();
	var widget_video_height = $widget_video_container.height();
	
	$('.widget_inner video').mediaelementplayer({
	    startVolume: 0.4,
		enableAutosize: true,
		success: function(mediaElement, domObject) {
			if (mediaElement.pluginType == 'flash') {
				
				// force size
				mediaElement.setVideoSize(widget_video_width,widget_video_height);
				
				// force autoplay
				mediaElement.addEventListener('canplay', function() {
					mediaElement.play();					
				}, false);
			}
		}
	});
	 
	 
	/***********************************************/
	/* FULL DROPDOWN MENU */
	/***********************************************/
	
	/* Initialize submenu width */
	function get_submenu_height(){
		var menu_height = null;
		
		$('#full_dropdown #main_menu > li').each(function(){
			var submenu_height = null; 
			
			// Set the submenu width
			submenu_height = $(this).find('ul').height();
			if(submenu_height > menu_height){
	        	menu_height = submenu_height;
			}
			
			
			
		});
		
		//Add parent menu height (42) + some padding 
		menu_height = menu_height + 52;
		 
		return menu_height;
		
	}	
		    
	function init_full_dropdown(){
		var sub_height = get_submenu_height();
		$('#full_dropdown #main_menu').hoverIntent({
			timeout: 300, // time before dropdown menu disappear
			over:function(){
				$(this).parent().stop().animate({'height':sub_height});
				$(this).stop().animate({'height':sub_height});
				$('#full_dropdown #main_menu ul').css('visibility', 'visible').stop().animate({'height':sub_height});
			},
			out:function(){
				$(this).parent().stop().animate({'height':'42px'});
				$(this).stop().animate({'height':'42px'});
				$('#full_dropdown #main_menu ul').stop().css('visibility','hidden');
			}
		});
		
		/*Keep the parent link active*/
		$('#full_dropdown #main_menu li').hover(function(){
			$(this).addClass('active');
		},function(){
			$(this).removeClass('active');
		});
		
	}
	init_full_dropdown();
	
	
	/***********************************************/
	/* INLINE DROPDOWN MENU */
	/***********************************************/
	/* Initialize submenu width */
	function set_submenu_width(){
		$('#inline_dropdown #main_menu > li').each(function(){
			
			var submenu_width = null; 
			var submenu_pos = $(this).position();
			var submenu_pos_left = parseInt(submenu_pos.left); 
			var menu_container_width = $("#main_menu_container").width();
			var submenu_right_bondary = parseInt(menu_container_width - submenu_pos_left);
						
			// Set the submenu width
			$(this).find('li').each(function(){
				submenu_width =  submenu_width + $(this).outerWidth();
			});
			
			// Set the submenu left position if exceed the wrap on the right
			if((submenu_width + submenu_pos_left) > menu_container_width){
				submenu_exceed_width = submenu_width - submenu_right_bondary;
				$(this).find('ul').css("left",-submenu_exceed_width);								
			}
			/*
			else if(submenu_width > menu_container_width){
				submenu_width = menu_container_width;
				$(this).find('ul').css("left",-submenu_pos_eft);
			}
			*/
			
			$(this).find('ul').width(submenu_width);
		
		});
	}
	
	set_submenu_width();
	
	/* Hover effect */
	$('#inline_dropdown #main_menu > li').hoverIntent({
		timeout: 100, // time before dropdown menu disappear
		over:function(){
	  	    $(this).children().next().stop().css({ visibility:'visible', opacity:'0'}).animate({opacity:'1'});
	  	},
		out:function(){
			if(jQuery.support.opacity){
				$(this).children().next().stop().animate({opacity:'0'}, function(){
					$(this).css({ visibility:'hidden'});
					
				});
			}else{
				$(this).children().next().stop().css({ visibility:'hidden'});
			}
	  	}
	});
	
	/*Keep the parent link active*/
	function set_active_class(){
		$('#inline_dropdown #main_menu li').has('ul').hover(function(){
			$(this).addClass('active');
		},function(){
			$(this).removeClass('active');
		});
	}
    
	set_active_class()
	
	/***********************************************/
	/* SINGLE DROPDOWN MENU */
	/***********************************************/
	function init_single_dropdown(){
		$('#single_dropdown #main_menu').find('ul').each(function () {
			
			$(this).parent().eq(0).hoverIntent({
				timeout: 300, // time before dropdown menu disappear
				over: function () {
					var current = $(this).find("ul");
					var child_number = current.children().length;
					var current_width = $(this).width()-2;// -2 for the border left and right
					var dropdown_height = 30*child_number ;//30 is the "li" tags height
					current.show().css({width:current_width, height:"0px"}).animate({height: dropdown_height+"px"}, {speed: 500, easing: 'easeOutBack'});
					current.prev().addClass("jquery_dropdown");
				},
				out: function () {
					var current = $(this).find("ul");
					current.fadeOut(200);
					current.prev().removeClass("jquery_dropdown");
				}
			});
		});
	
		
		/*animate dropdown items and submenu item*/
		$('#single_dropdown .submenu a').hover(
			function(){ $(this).stop().animate({textIndent: 10}, 300); }, //over
			function(){ $(this).stop().animate({textIndent: 0}, {duration: 300}); } //out
		);
	}
	init_single_dropdown();
	
	/***********************************************/
	/* MENU PARENT CLICK HOOK   */
	/***********************************************/	
	$('#main_menu > li > a').not('#main_menu > li.menu03 > a').click(function(){
		if($(this).siblings('ul').find('li').size() > 0){
			if($(window).width() > 959){
				new_link =  $(this).siblings('ul').find('li:first-child > a').attr('href');
				window.location.href = new_link; 
				return false;
			}
		}
	})


	/***********************************************/
	/* Add Photo subCategory to the main top menu  */
	/***********************************************/	
	
	var photoid = $('#main_menu_photo_categories').attr('data-photoid');
   
	if($('#main_menu_photo_categories').has('li') && $('#main_menu_container').has('#main_menu > li.page-item-'+photoid)){
		var photo_categories = $('#main_menu_photo_categories').html();
		$('#main_menu > li.page-item-'+photoid).append("<ul>"+photo_categories+"</ul>");
		set_submenu_width();
		set_active_class();
		init_full_dropdown();
		init_single_dropdown();
	}
	
	var videoid = $('#main_menu_video_categories').attr('data-videoid');
   
	if($('#main_menu_video_categories').has('li') && $('#main_menu_container').has('#main_menu > li.page-item-'+videoid)){
		var video_categories = $('#main_menu_video_categories').html();
		$('#main_menu > li.page-item-'+videoid).append("<ul>"+video_categories+"</ul>");
		set_submenu_width();
		set_active_class();
		init_full_dropdown();
		init_single_dropdown();
	}
	
	var productid = $('#main_menu_product_categories').attr('data-productid');
	
	if($('#main_menu_product_categories').has('li') && $('#main_menu_container').has('#main_menu > li.page-item-'+productid)){
		var product_categories = $('#main_menu_product_categories').html();
		$('#main_menu > li.page-item-'+productid).append("<ul>"+product_categories+"</ul>");
		set_submenu_width();
		set_active_class();
		init_full_dropdown();
		init_single_dropdown();
	}
	
	




	/***********************************************/
	/* TABS */
	/***********************************************/
	function pibs_tabs(el){
		$(el+' > div > div').hide();
		$(el+' > div > div:first').show();
		$(el+' > ul > li:first').addClass('active');
		 
		$(el+' > ul li a').click(function(){
			$(el+' > ul li').removeClass('active');
			$(this).parent().addClass('active');
			var currentTab = $(this).attr('href');
			$(el+' > div > div').hide();
			$(currentTab).show();
			return false;
		});
	}
	//Init
	pibs_tabs('#tabs_container');
		

	/***********************************************/
	/* PIBS CONTENT SLIDER */
	/***********************************************/
	//initialize		
	var slider_width = $('#pibs_slider').width();
	var first_slide_height	= $('#pibs_slides_wrap > div:first-child').height();
	var slider_length = $('#pibs_slides_wrap > div').length;
	
	$('#pibs_slides_wrap').width(slider_width*slider_length); 		
	$('#pibs_slider').css({overflow: 'hidden'});
	$('#pibs_slides_wrap').css({position : 'absolute'});
	$('#pibs_slides_wrap > div').css({
		float:'left',
	    width: slider_width	
	});
	
	//define slider height 
	$('#pibs_slider').height(first_slide_height);
			
	//menu onClick event	
	$('#pibs_slider_menu a').click(function(e){				
		e.preventDefault();	
		
		var target_index = $('#pibs_slider_menu a').index(this);
		var target_height = $('#pibs_slides_wrap > div:eq('+target_index+')').height() ;
		var offset = slider_width*target_index;
				
		//slide
		$('#pibs_slides_wrap').stop().animate({left : -offset} , 500, 'easeOutCubic');
			
		//change the height				
		$('#pibs_slider').stop().animate({height : target_height} , 500, 'easeOutExpo');
				
		//add and remove current "class"
	    $('#pibs_slider_menu a').removeClass('current');	
		$(this).addClass('current');
	});
	
	
	/***********************************************/
	/* IE SUPPORT */
	/***********************************************/
		// FIX LAST-CHILD pseudo-class
		$('#menu-top li:last-child a').css({"borderRight": "none"})
		
		
	/***********************************************/
	/* LHBoard custom js */
	/***********************************************/
		//Add click over td
		$('#lhwb_wrap #board_list td').click(function(){
			window.location = $(this).parent().find('td#lhwb_view_url a').attr("href"); 
			return false;
		});
				
		// remove first p marker if empty
		$('#the_content p:first:empty').remove(); 
		
	/***********************************************/
	/* LOGIN INPUT FOCUS */
	/***********************************************/	
	$('#user_name , #pwd').focusin(function(){
		$(this).css('backgroundPosition' , '0px -24px');
	});
	$('#user_name , #pwd').focusout(function(){
		if($(this).val().length == 0 ){
		 $(this).css('backgroundPosition' , '0px 0px');
		}
	});
	
	/***********************************************/
	/* MENU PARENT CLICK HOOK   */
	/***********************************************/		
    function menu_parent_click(){
		if($(this).siblings('ul').size() > 0){
			new_link =  $(this).siblings('ul').find('li:first-child > a').attr('href');
			window.location.href = new_link;
			return false;
		}
	}

	/***********************************************/
	/* REMEMBER MY ID
	 * required jquery.cookie plugin
	 * currently include in lhboard plugin
	 */
	/***********************************************/
	/*
	// Display username if exist
	if($.cookie('remembermeid') != undefined){
		var remember_use_name = $.cookie('remembermeid')
		$('#user_name').val(remember_use_name).css('backgroundPosition' , '0px -24px');
		$('#remembermeid').attr('checked','checked');
	}
	
	// Set Cookies if checkbox is checked
	$('#login_box_form').submit(function(){
		var use_name = $('#user_name').val();
	
		if($('#remembermeid').is(':checked')){
		   $.cookie('remembermeid', use_name , { expires: 7}); 
		}else{
		   $.cookie('remembermeid', '' , { expires: 0}); ;
		}
	});
	*/

	/***********************************************/
	/* Init small screen */
	/***********************************************/
 	 init();
	 
	 var screen_change = false;
	 var init_width = $(window).width();
	 
	 $(window).resize(function(){
	     
		 if((init_width < 959 && $(window).width() > 959) || (init_width > 959 && $(window).width() < 959)){
	        screen_change = true; 
			init_width = $(window).width();
		 }
		 
		 if(screen_change){	 
		 	init();
			screen_change = false
		 }
		 
	 });
 
    /***********************************************/
	/* small screen open event and overlay */
	/***********************************************/
	
	// Small screen menu
	$('#btn_menu').on('click',function(){
						
		 $('#main_menu_container').toggleClass('active');
		 $('body').toggleClass('open_menu');
		  $('html').toggleClass('open_menu');
		 return false;
		 
	});	
	
	// Append overlay and set click event
	$('body').prepend('<div id="smallscreen_overlay"></div>');
	$('#smallscreen_overlay').click(function(){
		$('#main_menu_container').toggleClass('active');
	    $('body').removeClass('open_menu');
		$('html').removeClass('open_menu');
	})	
	
		
	function init(){

		
		if($(window).width() < 959){
		 
		    // Kill large screen javascript 
			unbind_large_screen_js();
					 	
			
			$('#main_menu_container').height($(window).height());
			
			// Init small screen  menu
			$('#main_menu > li > a').on('click',function(){
				
				var $that = $(this);
			
				if($that.next('ul').length > 0){
				
					$('#main_menu > li > ul').stop().hide(200);
					$that.next('ul').stop().slideDown(200);
				}

				return false;
			});
			
			//Notice scroll
			/*$('#notice').cycle({
				 slides:"li",
				 fx:"scrollHorz"
			});*/
			
			// Add mobile class for pibs nboard
			$('body').addClass('mobile');	
	
		}else{
		 
		    // Kill small screen javascript 
			unbind_small_screen_js();					 		    
			
			// init the menu
			init_full_dropdown();
			init_single_dropdown();
			
			// menu prent click hook
			$('#main_menu > li > a').on('click',menu_parent_click);
			
			
			// remove mobile class for pibs nboard
			$('body').removeClass('mobile');
		}
	
	}
	
	
	function unbind_large_screen_js(){
		
		// unbind the hoverIntent
		$('#single_dropdown #main_menu').unbind("mouseenter").unbind("mouseleave");
		$('#single_dropdown #main_menu').removeProp('hoverIntent_t');
		$('#single_dropdown #main_menu').removeProp('hoverIntent_s');
		
		// unbind mouse hover
		$('#single_dropdown #main_menu li').unbind('mouseenter mouseleave');

		// remove css
		$('#single_dropdown, #single_dropdown ul').removeAttr('style');
		
		// menu prent click hook
		$('#main_menu > li > a').off('click',menu_parent_click)
		
	}	
	
	
	function unbind_small_screen_js(){
						
			// Kill dropdown on click menu
			$('#main_menu > li > a').off('click');
			
			// remove css set by js on the menu container
			$('#main_menu_container').removeAttr('style');
			$('#single_dropdown, #single_dropdown ul').removeAttr('style');
			
			// Kill Cycle notice slideshow
			$('#notice').cycle('destroy'); 
			
	}

	/***********************************************/
	/* MENU PARENT CLICK HOOK   */
	/***********************************************/	
    $('#menu_touch_primary > ul > li > a').click(function(){
		if($(this).siblings('ul').size() > 0){
			new_link =  $(this).siblings('ul').find('li:first-child > a').attr('href');
			window.location.href = new_link;
			return false;
		}
	})

	/***********************************************/
	/* SUBMENU OVERFLOW TOUCH SCROLL */
	/***********************************************/
	$('#menu_touch, #menu_touch_primary').touchscroll({direction:'x'});
  
    pibs_touchscroll_init('#menu_touch');
	pibs_touchscroll_init2('#menu_touch_primary');
	
    function pibs_touchscroll_init(menu_id){ 
		// init menu width

		var menu_width = 0;
		$(menu_id+' > ul > li').each(function() {
			menu_width += $(this).outerWidth();
		});
		$(menu_id+' > ul').width(menu_width+4); // 4px to avoid bugs on some devices (eg note3 ) 
			  
		//check if active item is visible on the screen
		// if not visible scrollLeft to the current item position
		if($(menu_id+' > ul > .current_page_parent').length > 0){
			var current_item_width = $(menu_id+' > ul > li.current_page_parent').outerWidth() ;
			var current_item_pos = $(menu_id+' > ul > li.current_page_parent').offset().left + current_item_width; 
			if(current_item_pos >= $(window).width()){
			   $(menu_id).scrollLeft($(menu_id+' > ul > li.current_page_parent').offset().left);
			}		  
		}
		
		if($(menu_id+' > ul > .current_page_item').length > 0){
			var current_item_width = $(menu_id+' > ul > li.current_page_item').outerWidth() ;
			var current_item_pos = $(menu_id+' > ul > li.current_page_item').offset().left + current_item_width; 
		  
			if(current_item_pos >= $(window).width()){
			   $(menu_id).scrollLeft($(menu_id+' > ul > li.current_page_item').offset().left);
			}		  
			
		}

		  
		if($(menu_id+' > ul > .current-cat').length > 0){
			var current_item_width = $(menu_id+' > ul > li.current-cat').outerWidth() ;
			var current_item_pos = $(menu_id+' > ul > li.current-cat').offset().left + current_item_width; 
		  
			if(current_item_pos >= $(window).width()){
			   $(menu_id).scrollLeft($(menu_id+' > ul > li.current-cat').offset().left);
			}		  
		}
	}

	/***********************************************/
	/* SUBMENU OVERFLOW TOUCH SCROLL2 */
	/***********************************************/

    function pibs_touchscroll_init2(menu_id){ // 1李� �쒕툕硫붾돱 �ъ빱��
		// init menu width

		var menu_width = 0;
		$(menu_id+' > ul > li').each(function() {
			menu_width += $(this).outerWidth();
		});
		$(menu_id+' > ul').width(menu_width+4); // 4px to avoid bugs on some devices (eg note3 ) 

		//check if active item is visible on the screen
		// if not visible scrollLeft to the current item position
		if($(menu_id+' > ul > li > ul > .current_page_parent').length > 0){
			var current_item_width = $(menu_id+' > ul > li > ul > li.current_page_parent').parent('ul').parent('li').outerWidth() ;
			var current_item_pos = $(menu_id+' > ul > li > ul > li.current_page_parent').parent('ul').parent('li').offset().left + current_item_width; 

			if(current_item_pos >= $(window).width()){
			   $(menu_id).scrollLeft($(menu_id+' > ul > li > ul > li.current_page_parent').parent('ul').parent('li').offset().left);
			}		  
		}
		
		if($(menu_id+' > ul > li > ul >  .current_page_item').length > 0){
			var current_item_width = $(menu_id+' > ul > li > ul > li.current_page_item').parent('ul').parent('li').outerWidth() ;
			var current_item_pos = $(menu_id+' > ul > li > ul >  li.current_page_item').parent('ul').parent('li').offset().left + current_item_width; 

			if(current_item_pos >= $(window).width()){
			   $(menu_id).scrollLeft($(menu_id+' > ul > li > ul > li.current_page_item').parent('ul').parent('li').offset().left);
			}		  
			
		}

		  
		if($(menu_id+' > ul > li > ul > .current-cat').length > 0){
			var current_item_width = $(menu_id+' > ul > li > ul > li.current-cat').parent('ul').parent('li').outerWidth() ;
			var current_item_pos = $(menu_id+' > ul > li > ul > li.current-cat').parent('ul').parent('li').offset().left + current_item_width; 

			if(current_item_pos >= $(window).width()){
			   $(menu_id).scrollLeft($(menu_id+' > ul > li > ul > li.current-cat').parent('ul').parent('li').offset().left);
			}		  
		}
	}

	/***********************************************/
	/* SUBMENU MENU */
	/***********************************************/	
	var window_width = $(window).width();

	test_width()

	// ScrollTo on click to the arrow
	$('#subcategory_next').click(function(){
		$('#menu_touch').animate({
			scrollLeft : "+=300"
		},500, function(){
			test_width()
		});
		return false;
	})

	$('#subcategory_prev').click(function(){
		$('#menu_touch').animate({
			scrollLeft : "-=300"
		},500, function(){
			if($('#menu_touch').scrollLeft() <= 0){
				$('#subcategory_prev').fadeOut();
				$('#subcategory_next').fadeIn();
			}else{
    			$('#subcategory_next').fadeIn();
			}
		});
		return false;
	})

	function test_width(){

	    var submenu_width = null;

		$('#menu_touch li').each(function(){
			var submenu_item_width = parseFloat($(this).outerWidth());
			submenu_width = submenu_width + submenu_item_width;
		});

		if($('#menu_touch').scrollLeft() > 0){
			$('#subcategory_prev').fadeIn();
		}
		if($('#menu_touch').scrollLeft() >= (submenu_width - window_width)){
			$('#subcategory_next').fadeOut();
		}

		if(submenu_width > window_width){
			$('#subcategory_next').show();
		}else{
		    $('#subcategory_next, #subcategory_prev').fadeOut();
		}

	}

	/***********************************************/ 
	/* ADDCLASS ON ON THE FIRST CHILD */
	/***********************************************/
	$('#position span:first-child, #pibs_slider_menu li:first-child').addClass('on');


	/***********************************************/ 
	/* Controll Photo Number */
	/***********************************************/

	$(window).resize(function(){
//		console.log($(window).width());
		showSubMenu();
		if($(window).width()<=942){
			pibs_touchscroll_init('#menu_touch');
			pibs_touchscroll_init('#menu_touch_primary');		
		}

		$('#srolling_area_last_photos').remove();

		if($('#last_photos').width()>0){
			if($(window).width()<=583){
				mainsRolling($('#last_photos').width()/3,$('#last_photos').width()/3*193/177+6);
				$('#last_photos').height($('#last_photos').width()/3*193/177+6 > 215 ? 215 : $('#last_photos').width()/3*193/177+6);
			}else if($(window).width()<=942){
				mainsRolling($('#last_photos').width()/4,$('#last_photos').width()/4*177/163+26);
				$('#last_photos').height($('#last_photos').width()/4*177/163+26 > 215 ? 215 : $('#last_photos').width()/5*177/163+26);
			}else{
				mainsRolling($('#last_photos').width()/4,215);
				$('#last_photos').height(215);
			}
		}
//		console.log($(window).width());
	}).resize();


	
	function showSubMenu(){
		if($(window).width()<=942){
			if($('#sidebar .current_page_parent').length>0){
				$('#sidebar').show();
				$('#sidebar .current_page_parent').siblings('li').each(function(){
					$(this).hide();
				});
				$('#sidebar .current_page_parent').children('a').hide();
				$('#sidebar .current_page_parent').children('ul').removeClass('children');
				$('#sidebar .current_page_parent').children('ul').addClass('sidebar_menu');
				$('#sidebar .current_page_parent').children('ul').children('li').each(function(){
					if($(this).hasClass('current_page_item')){
						$(this).children('a').css('background','#196fac');
						$(this).children('a').css('color','#fff');
					}else{
						$(this).children('a').css('background','#fff');
						$(this).children('a').css('color','#196fac');
					}
				});
			}else{
				$('#sidebar').hide();
				$('#sidebar .current_page_parent').siblings('li').each(function(){
					$(this).show();
				});
				$('#sidebar .current_page_parent').children('a').show();
				$('#sidebar .current_page_parent').children('ul').removeClass('sidebar_menu');
				$('#sidebar .current_page_parent').children('ul').addClass('children');
			}
		}else{
			$('#sidebar').show();
			$('#sidebar .current_page_parent').siblings('li').each(function(){
				$(this).show();
			});
			$('#sidebar .current_page_parent').children('a').show();
			$('#sidebar .current_page_parent').children('ul').removeClass('sidebar_menu');
			$('#sidebar .current_page_parent').children('ul').addClass('children');

			$('#sidebar .current_page_parent').children('ul').children('li').each(function(){
				if($(this).hasClass('current_page_item')){
					$(this).children('a').css('background','');
					$(this).children('a').css('color','');
				}else{
					$(this).children('a').css('background','');
					$(this).children('a').css('color','');
				}
			});
		}
	}

	function mainsRolling(wdt,hgt){
		var data2 = $('#last_photos2').html();
		var data3 = data2.split('|');
		data3.shift();
		
		// 醫뚯슦 �먮룞 �щ씪�대뱶 �뚯뒪
		var sroll = jQuery("#last_photos").srolling({
		  data : data3,
		  width: wdt,
		  height: hgt,
		  auto : true,
		  delay : 2000,
		  delay_frame : 2000,
		  move : 'left'

		});
	}
	setTimeout(function(){	
		if($('#container').children('h2').text() == '怨듭��ы빆' || $('#container').children('h2').text()=='�대┛��, 泥�냼�꾧탳��' || $('#container').children('h2').text()=='�꾨Ц援먯쑁'
		 || $('#container').children('h2').text()=='臾명솕援먯쑁' || $('#container').children('h2').text()=='�낆뼇, �꾨낫�좎껌' || $('#container').children('h2').text()=='�낆뼇, �꾨낫�꾧린'
		 || $('#container').children('h2').text()=='遊됱궗�좎껌' || $('#container').children('h2').text()=='遊됱궗�꾧린' || $('#container').children('h2').text()=='�щ뒫湲곕� �좎껌'){
			$('.pibs_nboard_file').show();
		}else{
			$('.pibs_nboard_file').hide();
		}
	}, 0)


	/*�먮떂媛ㅻ윭由� 鍮꾪쉶�먮룄 �대�吏� �щ┫�� �덈룄濡� �섏젙*/
	$('.pibs_nboard_file').each(function(){
		var a = $(this);
		var b = $(this).siblings('.pibs_nboard_subject');		
		var chks = a.find('.pibs_nboard_thumnail').attr('src');
		if(chks){
			var chk = chks.split('/');
			if(chk[chk.length-1] == 'thumb_default.jpg'){				
				if(b.find('.is_attach_image').length > 0){		
					var chks2 = b.find('.is_attach_image').text();
					console.log(chks2);
					if(chks2){
						var chk2 = chks2.split('.');
						if(chk2[chk2.length-1] == 'jpg' || chk2[chk2.length-1] == 'png' || chk2[chk2.length-1] == 'gif'){
							a.find('.pibs_nboard_thumnail').attr('src', chks2);
						}
					}
				}
			}
		}		
	});

	if($('.pibs_nboard_write_attachment').find('a').length > 0){
		if($('.pibs_nboard_write_attachment').find('a').attr('href').length > 0){
			var chks = $('.pibs_nboard_write_attachment').find('a').attr('href').split('.');
			var chk = chks[chks.length-1];
			if(chk == 'jpg' || chk == 'png' || chk == 'gif'){
				var str = "<p><img src='"+$('.pibs_nboard_write_attachment').find('a').attr('href')+"'></p>";
				$('.pibs_nboard_write_attachment').siblings('.pibs_nboard_write_content').find('td').append(str);
			}
		}
	}
	


}); //End jQuery