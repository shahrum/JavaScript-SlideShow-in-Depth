
$(function(){
	var menus=$('menu.social li a'),
		dly=100,
		due=300;
	menus.each(function(){
		var that=this;
		setTimeout(function(){
			$(that).animate({
				top:-20
			},due)
		},dly+=200);
		$(that).mouseover(function  () {
			$(that).animate({
				top:-10				

			},100)
		});
		$(that).mouseout(function  () {
			$(that).animate({
				top:-20

			},100,'swing')
		})

	
	});

});




