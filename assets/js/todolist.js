//toggle off todo list
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed").toggleClass("togglechecked");
});

//delete todo list
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
});

//create a new todo from text input
$("input[type=text]").keypress(function(e){
	if(e.which === 13){
		//grab the todo text from the input
		var text = $(this).val();

		//clear the input
		$(this).val("");

		//append a new li to the ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + text + "</li>");
	}
})

//toggle text input
$(".fa-plus").click(function(){
	$("input[type=text]").fadeToggle();
});