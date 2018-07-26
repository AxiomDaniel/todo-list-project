// Add strikethrough effect when you click on a todo item.
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completedToDo')
});


// Removes item when you click on the X
$('ul').on("click", 'li span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
  event.stopPropagation();
});


//Really interesting things going on here:
//1. event.stopPropagation is a way to prevent event bubbling.
//    The span X lives inside the li, so if you click the X, it triggers the X event, then it triggers the li event. This might cause complications in the future. So its best to add stopPropagation to make things run cleaner.
//2. .parent() function. Suppose you didn't include that and only wrote $(this). It would only remove the X, but it won't remove the actual todo item.
//3. $(this).remove() is nested within the .fadeOut function for $(this).parent(). Meaning that that $(this) is actually referring to the parent, not the X anymore. That's why we can use $(this).
//REVISION #1: Since I'll be adding new todo items, and each item has to have a span for deleting. We have to use on('click') instead of .click because .click snapshots by on is dynamic.
//USING DYNAMIC ON. Even On function has its limitations. It can only run on elements that exists on the page when it was first run. So we have to set it on the parent element 'ul' that exists when the page is first rendered. Next, we specify as the second argument the element that is being clicked for the event to trigger. and the third arg is the function.


//Add a new todo by by typing in action item into textbox and clicking enter
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let newToDo = $(this).val();
    $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + newToDo + "</li>");
    $(this).val("");
  }
})

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle()
})