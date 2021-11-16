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


// RANDOM IMAGE ON REFRESH

var list = [
            // "img work/bio3.0.jpg",
            // "img crop/CB6.jpg",
            "img work/color1..jpg",
            "img work/techweek01.jpg",
            "img work/color.jpg",
            "img work/color4.jpg",];

var index = Math.floor( Math.random() * list.length );

var image_url = list[index];

// RANDOM IMAGE ON REFRESH

$("#random-image").attr("src",image_url);

var list = [
            "img work/color1.2.jpg",
            "img work/color2.jpg",
            "img work/color3.jpg",
            "img work/color4.jpg"];

var index = Math.floor( Math.random() * list.length );

var image_url = list[index];

$("#random-image2").attr("src",image_url);

// RANDOM IMAGE ON REFRESH

var list = [
            // "img work/stamp3.jpg",
            // "img work/Fibbo9.jpg",
            // "img work/bio3.jpg",
            "img work/techweek02.jpg",
            "img work/color.jpg",
            "img work/color4.jpg"];

var index = Math.floor( Math.random() * list.length );

var image_url = list[index];

$("#random-image3").attr("src",image_url);



// SLIDING DOOR

function myFunction(x) {
  if (x.matches) { // If media query matches
    $(".sliding-panel").click(function(){
      if ( $(this).hasClass("isOpen") ) {
        $(this).animate({
          right: '-34%'
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
          right: '-34%'
        });
      } else {
        $(".sliding-panel").animate({
          right: '0'
        });
      }
      $(".sliding-panel").toggleClass("isOpen");
    });
  }
  else {
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
  }
}

var x = window.matchMedia("(min-width: 1024px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
