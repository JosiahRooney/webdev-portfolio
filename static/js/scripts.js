$("#codeTabs a").click(function (e) {
	e.preventDefault();
	$(this).tab("show");
});


$('.code-block').each(function(index){
	if (index < 10) {
		$(this).find('h3').text("0"+index + ". " + $(this).find('h3').text());
	} else {
		$(this).find('h3').text(index + ". " + $(this).find('h3').text());
	}
});

$('.mobile-button').click(function(){
	if ( $('.navbar-nav').hasClass('closed') ) {
		$('.navbar-nav').removeClass('closed');
	} else {
		$('.navbar-nav').addClass('closed');
	}
});

$('.hover-info').hover(function(){
	var info = $(this).data('hover');
	$(this).append('<div class="hover-info-after">' + info + '</div>');
}, function() {
	$('.hover-info-after').remove();
});