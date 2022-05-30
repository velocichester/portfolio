//AOS.init();

jQuery(document).ready(function (){

	"use strict";

	jQuery(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {
		if (jQuery(window).width() > 768){
		jQuery('.js-fullheight').css('height', jQuery(window).height());
		jQuery('.js-fullheight').css('max-height', (jQuery(window).height())/2);
		} else {
			jQuery('.js-fullheight').css('height', jQuery(window).height());
		}
		jQuery(window).resize(function(){
			jQuery('.js-fullheight').css('height', jQuery(window).height());
			jQuery('.js-fullheight').css('max-height', (jQuery(window).height())/2);
		});

	};
    console.log("done");
	fullHeight();

	var counter = function() {
		
		jQuery('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = jQuery.animateNumber.numberStepFactories.separator(',')
				jQuery('.number').each(function(){
					var $this = jQuery(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();
	
	var contentWayPoint = function() {
		var i = 0;
		jQuery('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('ftco-animated') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .ftco-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint(); 
});