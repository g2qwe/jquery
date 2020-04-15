function addTodoItem() {
	var todoItem = $("#newItem").val();
	$("#todoList").append("<li> <input type='checkbox'" + 
						   " name='itemDone'" + 
						   " class='itemDone'" + todoItem + "' /> </li>"
						);
	
   $("#newItem").val("");
  }
    
  $(function() {
   
	 $("#addItem").on('click', function(e){
	   e.preventDefault();
	   addTodoItem()
	 });
  
  });

function randomColor(){
    red = Math.round(Math.random()*255);
    blue = Math.round(Math.random()*255);
    green = Math.round(Math.random()*255);
    return "rgb("+red+","+green+","+blue+")";
}

function onReady(){
    $("#box").on("click", function(){
        $(this).css("background", randomColor());
    })
}
$(document).ready(onReady);