// get width & height of random pane
var pane_width = $(".random-pane").width() - $(".stamp").width();
var pane_height = $(".random-pane").height() - $(".stamp").height();

// loop through all the items in the random-pane
$(".random-pane").children().each( function(){

  // get a random x position
  var x = Math.round(Math.random() * pane_width);
  // get a random y position
  var y =  Math.round(Math.random() * pane_height);

  // change the position of the item
  $(this).css("top",y);
  $(this).css("left",x);

  // add hover functionality, to move item to the top on hover
  $(this).on("mouseover",function(){
    // this is a small hack, removing it and adding it again moves it to the top
    $(this).parent().append(this);
  });

});


$("#left-door").click(function(){
  if ( $(this).hasClass("isOpen") ) {
    $(this).animate({
      left: '-300px'
    });
  } else {
    $(this).animate({
      left: '0'
    });
  }
  $(this).toggleClass("isOpen");
});
