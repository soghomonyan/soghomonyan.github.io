jQuery(document).ready(function($) {
	$('body').css('background','#d2d2d2');
	$('body').css('overflow','hidden');
	var top = 0, left = 0;
	var randomPosition;

	var screenHeight = screen.height;
	var screenWidht = screen.width;

	$('.yes').click(function() {
		$('.bl h1').remove();
		$('.bl .yes').remove();
		$('.bl .no').remove();
		$('.bl').css({
			'background': '#BA5370',
			'height':'inherit',
			'padding':'5%',
			'boxShadow':'7px 8px 15px black'

	});
		$('.bl').html('<h1 style="color:white;">Մենք վստահ էինք, որ դուք կնտրեք հենց այս պատասխանը:</h1>');
		setTimeout(function(){
			$('.block').hide();
			$('body').css('overflow','auto');
		},3000);
	});
	

	$('.no').mouseenter(function() {
		randomPosition = Math.round(Math.random()*200);
		if(randomPosition<=80)
			randomPosition+=40;
		if(top-randomPosition==0 || top-randomPosition>0 && (screenWidht>=left+100 && left >=0)){
			top-=randomPosition;
			if(screenWidht<=left+100)
				left-=randomPosition;
			else if(0>left-100)
				left+=randomPosition;

			
		}else if(screenHeight>=top+randomPosition && screenHeight-100>top+randomPosition){
			top+=randomPosition;
			if(screenWidht<=left+100)
				left-=randomPosition;
			else if(0>left-100)
				left+=randomPosition;
		}
		
		$('.no').css('top',top+'px');
		$('.no').css('left',left+'px');
	});
});