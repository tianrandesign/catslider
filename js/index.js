$(document).ready(function() {
	// ----------------------------------- bodymovin
	var animData = {
		wrapper: $('#animationWindow')[0],
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: 'data.json'
	};
	var anim = bodymovin.loadAnimation(animData);
	// ----------------------------------- slider
	// cashed selected objects
	var $contain = $('.slideholder');
	var $mark = $('.mark', $contain);
	var $bar = $('.bar', $contain);
	// vars
	var barSpace = $bar.outerWidth() - $mark.outerWidth();
	var percentage = 0;
	
	$mark.draggable({
	  drag: function(event, ui) {
	    var markLeft = $mark.position().left;
	    var dif = barSpace - markLeft;
	    percentage  = dif / barSpace;
	    var frame = Math.round(percentage * 120);
//		if ($('.mark').is('.ui-draggable-dragging')) {
     // bar is being dragged
		anim.goToAndStop(300-frame, true);
	    console.log(300-frame);	    
//		  120 is the total frame of awake svg , 180+120=300
	  },
	  containment: 'parent',

//	playSegments allow for infinite looping if the loop param is set to true
		
		
	});
	
});