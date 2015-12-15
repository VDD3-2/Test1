$(document).ready(function() {
	$('#1elements').mouseenter(function(){
		$(this).animate({height: '+=10px'}, "fast");
	})

	$('#1elements').mouseleave(function(){
		$(this).animate({height: '-=10px'}, "fast");
	})
	
	$('#2elements').mouseenter(function(){
		$(this).animate({height: '+=10px'}, "fast");
		
	})

	$('#2elements').mouseleave(function(){
		$(this).animate({height: '-=10px'}, "fast");
	})

	$('#3elements').mouseenter(function(){
		$(this).animate({height: '+=10px'}, "fast");
	})

	$('#3elements').mouseleave(function(){
		$(this).animate({height: '-=10px'}, "fast");
	})
	
	$('#1teksts').mouseenter(function(){
		$(this).css('color', 'red');
		
	})
	
	$('#1teksts').mouseleave(function(){
		$(this).css('color', 'black');
		
	})
	
	$('#2teksts').mouseenter(function(){
		$(this).css('color', 'blue');
		
	})
	
	$('#2teksts').mouseleave(function(){
		$(this).css('color', 'black');
		
	})
	
	$('#3teksts').mouseenter(function(){
		$(this).css('color', 'green');
		
	})
	
	$('#3teksts').mouseleave(function(){
		$(this).css('color', 'black');
		
	})
	
	})