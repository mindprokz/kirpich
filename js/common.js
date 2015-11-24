jQuery.fn.Upload_image = function (name_dataset) {
	for (var i = 0; i < this.length; i += 1) {
		if(this[i].hasAttribute('data-' + name_dataset)){
			this[i].setAttribute( 'src', this[i].getAttribute( 'data-' + name_dataset) );
			this[i].removeAttribute('data-'+ name_dataset);
		}
	};
	return this;
}

$(document).ready(function() {
	$('img').Upload_image('url'); // Загрузка картинок по data атрибуту

	$(".fancybox_").fancybox();

	$('#main_video').fancybox({
		'transitionIn' : 'elastic',
		'autoScale' : false,
		
	});
	$(".fancybox").click(function() {
		$(".fancybox").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: document.documentElement.clientWidth > 700 ? '80%' : '90%',
			height: document.documentElement.clientWidth > 700 ? '80%' : '50%',
			autoSize: false,
			closeClick: false,
			openEffect: 'fade',
			closeEffect: 'elastic',
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
	});
	document.querySelector('#icon__close').removeAttribute('style');
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));
	new WOW().init();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});
	function initialize() {     
	var myLatlng = new google.maps.LatLng(51.160429, 71.464038);
	var myCenterMarker = new google.maps.LatLng(51.160501,71.403796),
		myCenterMarker_2 = new google.maps.LatLng(51.194426,71.516421);
	var myOptions = {
		zoom: 12,
		center: myLatlng,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

	var marker = new google.maps.Marker({
		position: myCenterMarker,
		map: map,
		icon: 'img/marker_1.png',
		title:"Кирпичный завод" 
	});

	var marker = new google.maps.Marker({
		position: myCenterMarker_2,
		map: map,
		icon: 'img/marker_2.png',
		title:"Кирпичный завод" 
	});
};
	//Инициализация карты
	initialize();

	//click on button will open form
	document.querySelectorAll('.button')[0].addEventListener('click',function(){

		document.querySelector('#form_network').classList.remove('form_close');
		document.querySelector('#form_network').classList.add('form_open');
		document.querySelector('#form_network').classList.add('animated');

		setTimeout(function(){
			document.querySelector('#form_network').classList.remove('animated');
		},400);
	});
	document.querySelectorAll('.button')[1].addEventListener('click',function(){

		document.querySelector('#form_network').classList.remove('form_close');
		document.querySelector('#form_network').classList.add('form_open');
		document.querySelector('#form_network').classList.add('animated');

		setTimeout(function(){
			document.querySelector('#form_network').classList.remove('animated');
		},400);
	});
	//closer in form
	document.querySelector('#icon__close').addEventListener('mouseover',function(){

		document.querySelector('#form_network').setAttribute('style','opacity: .5;');

	});
	document.querySelector('#icon__close').addEventListener('mouseout',function(){

		document.querySelector('#form_network').setAttribute('style','opacity: 1;');

	});
	document.querySelector('#icon__close').addEventListener('click',function(){

		document.querySelector('#form_network').classList.add('form_close');
		document.querySelector('#form_network').classList.remove('form_open');
		document.querySelector('#form_network').classList.remove('animated');

	});

;(function($){
   $(document).on('click', 'a[href^=#]', function () {
        $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 152 }, 1000 );
        return false;
    });
})(jQuery);
	setInterval(function(){
		if(window.pageYOffset > 300){
			document.querySelector('#top_header2').classList.remove('closed_menu');
			document.querySelector('#top_header2').classList.add('opened_menu');
		}else{
			document.querySelector('#top_header2').classList.add('closed_menu');
			document.querySelector('#top_header2').classList.remove('opened_menu');
		};
	},200);

//Слайдер
document.querySelector('.wrap_center').setAttribute('style','left: 0px;');

var _slider = {
	_pos : 1,
	get pos(){
		return this._pos;
	},
	set pos(value){
		if (value === 1){
			document.querySelector('.wrap_center').setAttribute('style','left: 0px;');
			this._pos = 1;
		}
		if (value === 2){
			document.querySelector('.wrap_center').setAttribute('style','left: -1116px;');
			this._pos = 2;
		}
	}
}

// Нажатие на левую стреклу
document.querySelector('.arrow_left').addEventListener('click',function () {
	_slider.pos = 1;
});
// Нажатие на правую кнопку
document.querySelector('.arrow_right').addEventListener('click',function () {
	_slider.pos = 2;
});