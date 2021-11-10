// get width & height of random pane
var pane_width = $(".random-pane").width() - $(".random-item").width();
var pane_height = $(".random-pane").height() - $(".random-item").height();

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

// SLIDING DOOR


$(".sliding-panel").click(function(){
  if ( $(this).hasClass("isOpen") ) {
    $(this).animate({
      right: '-300px'
    });
  } else {
    $(this).animate({
      right: '0'
    });
  }
  $(this).toggleClass("isOpen");
});

$(".about-menu").click(function(){
  if ( $(".sliding-panel").hasClass("isOpen") ) {
    $(".sliding-panel").animate({
      right: '-300px'
    });
  } else {
    $(".sliding-panel").animate({
      right: '0'
    });
  }
  $(".sliding-panel").toggleClass("isOpen");
});
