/*-----------------------------------------------------------------------------------*/
/*	Header
/*-----------------------------------------------------------------------------------*/

/* Starting Animation on Load */
$('<img/>').attr('src', 'http://placehold.it/1920x1080/1a1a1a/F4594E&amptext=1920x1080').load(function() {
	jQuery('#logo').fadeIn(600, function() {
		jQuery('h1').animate({opacity: '1', 'padding-top': '0'}, 500,function() {
			jQuery('h2').animate({opacity: '1', 'padding-top': '0'}, 500,function() {
				if(jQuery(window).width()<767){	
					jQuery('#explore').animate({opacity: '1', 'margin-top': '2em'}, 1000);
				} else {
					jQuery('#explore').animate({opacity: '1', 'margin-top': '4em'}, 1000);
				}
			});
		});
	});
});

textCenter();

	function textCenter()
{
	$('.text-container').css({
        position:'absolute'
    });

    $('.text-container').css({
 
        left: ($(window).width() - $('.text-container').outerWidth())/2,
        top: ($(window).height() - $('.text-container').outerHeight())/2

    });

}
	
jQuery(document).ready(function() {

	/*-----------------------------------------------------------------------------------*/
	/*	Navigation
	/*-----------------------------------------------------------------------------------*/
	
	var animate='down';
	
	jQuery(window).bind('scroll', function () {
	
		/* Animation for Top Navigation */
		var scrollTop = jQuery(window).scrollTop();
		
		if (scrollTop > jQuery('#services').offset().top-60 && animate == 'down') {
			animate='up';
			jQuery('#top-bar').stop().animate({top:'0'}, 300);
		} else if(scrollTop < jQuery('#services').offset().top-60 && animate == 'up'){
			animate='down';
			jQuery('#top-bar').stop().animate({top:'-75px'}, 300);
		}
		
		/* Update Section on Top-Bar */
		jQuery('section').each(function(){
			if (scrollTop > jQuery(this).offset().top-60){
				var section = jQuery(this).attr('id');
				$("#top-navigation ul li").each(function(){
					if(section == jQuery(this).find('a').attr('href').replace("#","") && jQuery(this).not('.active')){
						$("#top-navigation ul li").removeClass('active');
						jQuery(this).addClass('active');
					}
				});
			}
		});
	});
	
	/* Responsive Menu Click */
	jQuery('#menu-mobile').click(function(){
		if ( jQuery("#top-navigation ul").is(":visible") ) {
		    jQuery("#top-navigation ul").slideUp(500);
		   	jQuery('#menu-mobile').removeClass('active');
		} else { 
		   	jQuery("#top-navigation ul").slideDown(500);
		   	jQuery('#menu-mobile').addClass('active');
		}
	});
	
	/* On Resize show menu on desktop if hidden */
	jQuery(window).resize(function() {
		textCenter();
	    if(jQuery(window).width()>992){	
			if (jQuery("#top-navigation ul").is(":hidden") ) {
			    jQuery("#top-navigation ul").show();
			   	jQuery('#menu-mobile').removeClass('active');		
			}
	    } else {
	    	if (jQuery("#top-navigation ul").is(":visible") ) {
			    jQuery("#top-navigation ul").hide();
			   	jQuery('#menu-mobile').removeClass('active');		
			}


	    }
	});
	
	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll - Navigation + .scroll items
	/*-----------------------------------------------------------------------------------*/
	
	jQuery('#top-navigation li').bind('click',function(event){
	    var anchor = jQuery(this).find('a');
	    
	    jQuery('#top-navigation li').removeClass('active');
	    jQuery(this).addClass('active');
	
	    jQuery('html, body').stop().animate({
	        scrollTop: jQuery(anchor.attr('href')).offset().top-50
	    }, 1500,'easeInOutExpo');
	    
	    /* If Mobile hide menu on select */
	    if(jQuery(window).width()<=767){	
		    jQuery("#top-navigation ul").slideUp(500);
			jQuery('#menu-mobile').removeClass('active');
	    }
	    
	    event.preventDefault();
	});
	
	jQuery('.scroll').bind('click',function(event){
	    var anchor = jQuery(this);
	
	    jQuery('html, body').stop().animate({
	        scrollTop: jQuery(anchor.attr('href')).offset().top-50
	    }, 1500,'easeInOutExpo');
	    
	    /* If Mobile hide menu on select */
	    if(jQuery(window).width()<=767){	
		    jQuery("#top-navigation ul").slideUp(500);
			jQuery('#menu-mobile').removeClass('active');
	    }
	    
	    event.preventDefault();
	});
	

	/*-----------------------------------------------------------------------------------*/
	/*	Services
	/*-----------------------------------------------------------------------------------*/
	
	var curSkills="branding";
	
	/* Services Animations */
	jQuery('.service').click(function(){
		jQuery('.service').removeClass('active');
		jQuery(this).addClass('active');
		var target = jQuery(this).attr('id');
		jQuery("#"+curSkills+"-skills").slideUp(750, 'easeInOutExpo',function(){jQuery("#"+target+"-skills").slideDown(750, 'easeInOutExpo')});
		curSkills =jQuery(this).attr('id');
		jQuery('html, body').stop().animate({
		    scrollTop: jQuery('#services-list').offset().top-100
		}, 1000,'easeInOutExpo');
		
		jQuery("#"+target+"-skills .expand").each(function() {
			jQuery(this).css({width:0}).animate({width:jQuery(this).attr('data-width')}, 2000);
		});
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Ecologie
	/*-----------------------------------------------------------------------------------*/
	
	var curSkills="branding";
	
	/* Services Animations */
	jQuery('.ecologie').click(function(){
		jQuery('.ecologie').removeClass('active');
		jQuery(this).addClass('active');
		var target = jQuery(this).attr('id');
		jQuery("#"+curSkills+"-skills").slideUp(750, 'easeInOutExpo',function(){jQuery("#"+target+"-skills").slideDown(750, 'easeInOutExpo')});
		curSkills =jQuery(this).attr('id');
		jQuery('html, body').stop().animate({
		    scrollTop: jQuery('#services-list').offset().top-100
		}, 1000,'easeInOutExpo');
		
		jQuery("#"+target+"-skills .expand").each(function() {
			jQuery(this).css({width:0}).animate({width:jQuery(this).attr('data-width')}, 2000);
		});
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Contacts
	/*-----------------------------------------------------------------------------------*/	
		
	/* Validation Form with AJAX while typing for inputs */
	jQuery('input').bind('input propertychange', function() {
		jQuery(this).parent().find('.error').remove();
		jQuery(this).parent().find('.valid').remove();
	    if( jQuery(this).attr('id') == 'email' ){
			var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if (jQuery(this).val() == "" || jQuery(this).val() == " ") {
				jQuery(this).after("<span class='error'></span>");
				jQuery(this).parent().find('.error').fadeIn('slow');
			} else if (!checkEmail.test(jQuery(this).val())) { 
				jQuery(this).after("<span class='error'></span>");
				jQuery(this).parent().find('.error').fadeIn('slow');
			} else {
				jQuery(this).after("<span class='valid'></span>");
				jQuery(this).parent().find('.valid').fadeIn('slow');	
			}    
	    } else {
			if(jQuery(this).val() == "" || jQuery(this).val() == " "){
				jQuery(this).after("<span class='error'></span>");
				jQuery(this).parent().find('.error').fadeIn('slow');			   
			} else {
				jQuery(this).after("<span class='valid'></span>");
				jQuery(this).parent().find('.valid').fadeIn('slow');	
			}
	    }
	});
	
	/* Validation Form with AJAX while typing for textarea */
	jQuery('textarea').bind('input propertychange', function() {
		jQuery(this).parent().find('.error').remove();
		jQuery(this).parent().find('.valid').remove();	
		if(jQuery(this).val() == "" || jQuery(this).val() == " "){
			jQuery(this).after("<span class='error'></span>");
			jQuery(this).parent().find('.error').fadeIn('slow');			   
		} else {
			jQuery(this).after("<span class='valid'></span>");
			jQuery(this).parent().find('.valid').fadeIn('slow');	
		}
	});	
	
	
	/* Validation Form with AJAX on Submit */
	jQuery('#submit').click(function(){
		jQuery('span.error').fadeOut('slow');
		jQuery('span.valid').fadeOut('slow');
		jQuery('#thanks').hide();
		jQuery('#error').hide();
		jQuery('#timedout').hide();
		jQuery('#state').hide();
		
		var error = false;
		
		var name = jQuery('#name').val(); 
		if(name == "" || name == " ") {
			jQuery('#name').after("<span class='error'></span>");
			jQuery('#name').parent().find('.error').fadeIn('slow');
			error = true; 
		} else {
			jQuery('#name').after("<span class='valid'></span>");
			jQuery('#name').parent().find('.valid').fadeIn('slow');			
		}
		
		var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
		var email = jQuery('#email').val();
		if (email == "" || email == " ") {
			jQuery('#email').after("<span class='error'></span>");
			jQuery('#email').parent().find('.error').fadeIn('slow');
			error = true;
		} else if (!checkEmail.test(email)) { 
			jQuery('#email').after("<span class='error'></span>");
			jQuery('#email').parent().find('.error').fadeIn('slow');
			error = true;
		} else {
			jQuery('#email').after("<span class='valid'></span>");
			jQuery('#email').parent().find('.valid').fadeIn('slow');			
		}
		
		var message = jQuery('#message').val(); 
		if(message == "" || message == " ") {
			jQuery('#message').after("<span class='error'></span>");
			jQuery('#message').parent().find('.error').fadeIn('slow');
			error = true; 
		} else {
			jQuery('#message').after("<span class='valid'></span>");
			jQuery('#message').parent().find('.valid').fadeIn('slow');			
		}
		
		if(error == true) {
			jQuery('#error').fadeIn('slow');
			setTimeout(function() {
			    jQuery('#error').fadeOut('slow');
			}, 3000);
			return false;
		}
		
		var data_string = jQuery('#contact-form').serialize();
		
		jQuery.ajax({
			type: "POST",
			url: "lib/sendMail.php",
			data: {name:name,email:email,message:message}, 
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					jQuery('#timedout').fadeIn('slow');
					setTimeout(function() {
					    jQuery('#timedout').fadeOut('slow');
					}, 3000);
				}
				else {
					jQuery('#state').fadeIn('slow');
					jQuery("#state").html('The following error occured: ' + error + '');
					setTimeout(function() {
					    jQuery('#state').fadeOut('slow');
					}, 3000);
				}
			},
			success: function() {
				jQuery('span.valid').remove();
				jQuery('#thanks').fadeIn('slow');
				jQuery('input').val('');
				jQuery('textarea').val('');
				setTimeout(function() {
				    jQuery('#thanks').fadeOut('slow');
				}, 3000);
			}
		});
		
		return false;
	});
});