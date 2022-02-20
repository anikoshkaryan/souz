var swiper30 = new Swiper("#reviews .g-modal-reviews__swiper", {
	slidesPerView: 'auto',
	pagination: {
		el: ".g-modal-reviews__swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".g-modal-reviews__swiper-btnNext",
		prevEl: ".g-modal-reviews__swiper-btnPrev",
	},
});


$('#reviews .g-modal-reviews__close').on('click', function() {
	$('#reviews .g-modal-reviews').css('display', 'none')
});

$('#reviews .g-item-reviews').on('click', function(e) {
	e.preventDefault();
	$('#reviews .g-modal-reviews').css('display', 'flex')
});




$(document).on('change','#fileinput_form', function () {
  $('#principe .instruction-principe__li').each(function(i) {
    $(this).attr('data-id', '#instruction-principe-img-num-' + (i + 1))
  })
})
  $('#principe .instruction-principe__li').on('click', function() {
    $('#principe .instruction-principe__li').removeClass('_active')
    $('#principe .instruction-principe__img-num').removeClass('_active')
    $(this).addClass('_active')
    $($(this).attr('data-id')).addClass('_active')
  })
  
  $('#principe .instruction-principe__img-window-close').on('click', function() {
    $('#principe .instruction-principe__li').removeClass('_active')
    $('#principe .instruction-principe__img-num').removeClass('_active')
  })




  $('#principe .instructionVideo-principe__item-video').on('click', function() {
    if(!$(this).hasClass('_active')) {
      $('#principe .instructionVideo-principe__item-video').removeClass('_active')
      $(this).addClass('_active')
      $('#principe .instructionVideo-principe__item-video video').trigger('pause');
      $(this).children('video').trigger('play');
    }
    else {
      $(this).removeClass('_active')
      $(this).children('video').trigger('pause');
    }
  })


  $('#principe .video-principe__right').on('click', function() {
    if(!$(this).hasClass('_active')) {
      $(this).addClass('_active')
      $('video').trigger('pause')
      $(this).children('video').trigger('play')
    }
    else {
      $(this).removeClass('_active')
      $('video').trigger('pause')
    }
  })









  var svg ;

function drawProgress(where, end){ 
// d3.select("svg").remove() 
//   if(svg){
//   svg.selectAll("*").remove();
  
// }
var wrapper = document.getElementById(where);
var start = 0;
 
var colours = {
  fill: '#003594',
  track: '#E1E7F0',
  text: '#00C0FF',
  stroke: '#FFFFFF',
}

var radius = 90;
var border = 5;
var strokeSpacing = 4;
var endAngle = Math.PI * 2;
var formatText = d3.format('.0%');
var boxSize = radius * 2;
var count = end;
var progress = start;
var step = end < start ? -0.01 : 0.01;

//Define the circle
var circle = d3.svg.arc()
  .startAngle(0)
  .innerRadius(radius)
  .outerRadius(radius - border);

//setup SVG wrapper
svg = d3.select(wrapper)
  .append('svg')
  .attr('width', boxSize)
  .attr('height', boxSize);

  
// ADD Group container
var g = svg.append('g')
  .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

//Setup track
var track = g.append('g').attr('class', 'radial-progress');
track.append('path')
  .attr('fill', colours.track)
  .attr('stroke', colours.stroke)
  .attr('stroke-width', strokeSpacing + 'px')
  .attr('d', circle.endAngle(endAngle));

//Add colour fill
var value = track.append('path')
  .attr('fill', colours.fill)
  .attr('stroke', colours.stroke)
  .attr('stroke-width', strokeSpacing + 'px');

//Add text value
var numberText = track.append('text')
  .attr('fill', colours.text)
  .attr('text-anchor', 'middle')
  .attr('dy', '.5rem'); 

  //update position of endAngle
  value.attr('d', circle.endAngle(endAngle * end));
  //update text value
  numberText.text(formatText(end));
  
}

// $('#submitClick').click(function(){
//   var val = parseInt($('#percent').val());
//    drawProgress(val/100)
// })
 


function _setStepProgressId() {
	$('.steps-principe__steps-progress').each(function(i) {
		$(this).attr('id', 'radialprogress-' + i)
	})
}

function stepsSlide(to) {
	$('#principe .steps-principe__slider').each(function(i) {
		$(this).removeClass('_active').css('display', 'none')
		if(to == i) {
			$(this).addClass('_active').fadeIn(300).css('display', 'grid')
		}
	})
}

_setStepProgressId()


$('#principe .steps-principe__slider').each(function( i ) {
	if(i > 0) {
		
		$(this).children('.steps-principe__slider-left').children('.steps-principe__buttons').children('.steps-principe__btn-prev').attr('data-slide-to', i - 1)
	}
	else {
		$(this).children('.steps-principe__slider-left').children('.steps-principe__buttons').children('.steps-principe__btn-prev').attr('data-slide-to', 0)
	}

	if(i < $('#principe .steps-principe__slider').length - 1) {
		$(this).children('.steps-principe__slider-left').children('.steps-principe__buttons').children('.steps-principe__next').attr('data-slide-to', i + 1)
	}
	else {
		$(this).children('.steps-principe__slider-left').children('.steps-principe__buttons').children('.steps-principe__next').attr('data-slide-to', $('#principe .steps-principe__slider').length - 1)
	}
	
})

$('#principe .steps-principe__slider').removeClass('_active')
$('#principe .steps-principe__slider').css('display', 'none')


	$('#principe .steps-principe__slider').first().addClass('_active')
	$('#principe .steps-principe__slider').first().fadeIn(300)





	

function principeStepsInit() {
	let id = $('#principe .steps-principe__slider._active').children('.steps-principe__slider-left').children('.steps-principe__steps-block').children('.steps-principe__steps-progress').attr('id')
	var count = $('#principe .steps-principe__slider').length;
	var step = 100/count;
	drawProgress(id, step/100 * $('#principe .steps-principe__slider._active').index())


	
	$('#principe .steps-principe__pagination-item').each(function(i) {
		if(i == $('#principe .steps-principe__slider._active').index()) {
			$('#principe .steps-principe__pagination-item').removeClass('_active')
			$(this).addClass('_active')
		}
	})
}

principeStepsInit()

$('#principe .steps-principe__buttons button').on('click', function() {
	stepsSlide($(this).attr('data-slide-to'))
	principeStepsInit()
})


var swiper50 = new Swiper("#production .slider-production__swiper", {
	slidesPerView: 'auto',
	spaceBetween: 30,
	navigation: {
		nextEl: ".slider-production__btn-next",
		prevEl: ".slider-production__btn-prev",
	},
	// breakpoints: {
	// 	768: {
	// 		slidesPerView: 3,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	}
	// }
});


$('#principe .instruction-principe__li').each(function(i) {
  $(this).attr('data-id', '#instruction-principe-img-num-' + (i + 1))
})

$('#principe .instruction-principe__li').on('click', function() {
  $('#principe .instruction-principe__li').removeClass('_active')
  $('#principe .instruction-principe__img-num').removeClass('_active')
  $(this).addClass('_active')
  $($(this).attr('data-id')).addClass('_active')
})

$('#principe .instruction-principe__li').mouseenter(function() {
  $('#principe .instruction-principe__li').addClass('_hide')
  $($(this).attr('data-id')).addClass('_hover')
})

$('#principe .instruction-principe__li').mouseleave(function() {
  $('#principe .instruction-principe__li').removeClass('_hide')
  $('#principe .instruction-principe__img-num').removeClass('_hover')
})

$('#principe .instruction-principe__img-window-close').on('click', function() {
  $('#principe .instruction-principe__li').removeClass('_active')
  $('#principe .instruction-principe__img-num').removeClass('_active')
})












var swiper20 = new Swiper(".videos-benefits__swiper", {
	slidesPerViews: 1,
	spaceBetween: 30,
	pagination: {
		el: ".videos-benefits__swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".videos-benefits__swiper-button-next",
		prevEl: ".videos-benefits__swiper-button-prev",
	},
});

$('#benefits .videos-benefits__swiper-slide-left._vid').on('click', function() {
	if($(this).hasClass('_active')) {
		$(this).removeClass('_active')
		$(this).children('video').trigger('pause')
	}
	else {
		$('video').trigger('pause')
		$('#benefits .videos-benefits__swiper-slide-left._active').removeClass('_active')
		$(this).addClass('_active')
		$(this).children('video').trigger('play')
	}
});







