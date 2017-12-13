console.log('Hey this is js');


const music = $('.music');
// const beer = $('.beer');

$('button').on('click', function () {
  
  
  music.toggleClass('hidden')
  
  music.animate({
  	width: "100%",
  	opacity: ".1"
  }
  	, 1000);

music.toggleClass('hidden');

});



// const projects = () =>{

// 	if(music === true){
		
// 		music.toggleClass('hidden');
// 	}
// };
