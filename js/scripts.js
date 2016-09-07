$("#codeTabs a").click(function (e) {
	e.preventDefault();
	$(this).tab("show");
});


$('.code-block').each(function(index){
	if (index < 10) {
		$(this).find('h4').text("0"+index + ". " + $(this).find('h4').text());
	} else {
		$(this).find('h4').text(index + ". " + $(this).find('h4').text());
	}
});