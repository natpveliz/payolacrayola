$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 16000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  startVisible: true,
  pauseOnHover: true
});
$('.marquee2').marquee({
	//duration in milliseconds of the marquee
	duration: 16000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'right',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  startVisible: true,
  pauseOnHover: true
});

// when you click on an opened modal, it will 
// remove the .visible class from that modal
$(".modal").on("click",function() {
    $(this).removeClass("visible");
});

// when you click on btn1 it will add the 
// .visible class to modal1
$(".btn1").on("click",function() {
    $('.modal1').addClass("visible");
    
    // we could also have it toggle to add and remove 
    // when clicked again with this line:
    // $('.modal1').toggleClass("visible");
});

// when you click on btn2 it will add the 
//.visible class to modal2
$(".btn2").on("click",function() {
    $('.modal2').addClass("visible");
    
    // we could also have it toggle to add and remove 
    // when clicked again with this line:
    // $('.modal2').toggleClass("visible");
});

$(".btn3").on("click",function() {
    $('.modal3').addClass("visible");
    
    // we could also have it toggle to add and remove 
    // when clicked again with this line:
    // $('.modal1').toggleClass("visible");
});

// when you click on btn2 it will add the 
//.visible class to modal2
$(".btn4").on("click",function() {
    $('.modal4').addClass("visible");
    
    // we could also have it toggle to add and remove 
    // when clicked again with this line:
    // $('.modal2').toggleClass("visible");
});

$(".btn5").on("click",function() {
    $('.modal5').addClass("visible");
    
    // we could also have it toggle to add and remove 
    // when clicked again with this line:
    // $('.modal1').toggleClass("visible");
});

// when you click on btn2 it will add the 
//.visible class to modal2
$(".btn6").on("click",function() {
    $('.modal6').addClass("visible");
    
    // we could also have it toggle to add and remove 
    // when clicked again with this line:
    // $('.modal2').toggleClass("visible");
});