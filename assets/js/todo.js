//Check off specific todos by clicking
$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
});


//Click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){ //Remove span and its parent(li)
        $(this).remove();
    }); 
    event.stopPropagation(); //Stops parent events from firing
});

$("input[type ='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
       var todoText = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }

});

$(".fa-plus").click(function(){
    $("input[type ='text']").fadeToggle();
});