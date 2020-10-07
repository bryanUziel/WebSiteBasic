$(document).ready(function(){
  if(window.location.href.indexOf('index') > -1){
	  //Slider		
	  $('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200
	  });	
  	

	  //Posts
	  var post = [
	  		{
	  			title: 'Prueba titulo 1',
	  			date: 'publicado el día '+moment().date()+' de '+ moment().format("MMMM")+" del "+moment().format("YYYY"),
	  			content: 'Lorem ipsum <strong>1</strong> dolor sit amet, consectetur adipiscing elit. Nulla non aliquam urna, eu aliquam odio. Duis consectetur ligula non leo efficitur, ac laoreet ligula varius. Nulla gravida, metus eget suscipit ornare, massa lacus volutpat est, quis facilisis turpis ligula eu massa. Curabitur consequat semper ex. Cras sed sapien nec mi viverra vestibulum. Duis dignissim felis nec vehicula fringilla. Suspendisse ante quam, venenatis quis faucibus eu, imperdiet at elit. Nunc aliquam, sapien ac placerat rhoncus, lacus mauris bibendum turpis, a ultricies odio ante vel nibh.'
	  		},
	  		{
	  			title: 'Prueba titulo 2',
	  			date: 'publicado el día '+moment().date()+' de '+ moment().format("MMMM")+" del "+moment().format("YYYY"),
	  			content: 'Lorem ipsum <strong>2</strong> dolor sit amet, consectetur adipiscing elit. Nulla non aliquam urna, eu aliquam odio. Duis consectetur ligula non leo efficitur, ac laoreet ligula varius. Nulla gravida, metus eget suscipit ornare, massa lacus volutpat est, quis facilisis turpis ligula eu massa. Curabitur consequat semper ex. Cras sed sapien nec mi viverra vestibulum. Duis dignissim felis nec vehicula fringilla. Suspendisse ante quam, venenatis quis faucibus eu, imperdiet at elit. Nunc aliquam, sapien ac placerat rhoncus, lacus mauris bibendum turpis, a ultricies odio ante vel nibh.'
	  		},
			{
	  			title: 'Prueba titulo 3',
	  			date: 'publicado el día '+moment().date()+' de '+ moment().format("MMMM")+" del "+moment().format("YYYY"),
	  			content: 'Lorem ipsum <strong>3</strong> dolor sit amet, consectetur adipiscing elit. Nulla non aliquam urna, eu aliquam odio. Duis consectetur ligula non leo efficitur, ac laoreet ligula varius. Nulla gravida, metus eget suscipit ornare, massa lacus volutpat est, quis facilisis turpis ligula eu massa. Curabitur consequat semper ex. Cras sed sapien nec mi viverra vestibulum. Duis dignissim felis nec vehicula fringilla. Suspendisse ante quam, venenatis quis faucibus eu, imperdiet at elit. Nunc aliquam, sapien ac placerat rhoncus, lacus mauris bibendum turpis, a ultricies odio ante vel nibh.'
	  		}  		
	  	];

	  	
	  	post.forEach((item,index) => {
	  		var publicacion = `
					<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer más</a>
					</article>
	  		`;
	  		//console.log(publicacion);
	  		$('#post').append(publicacion);
	  	});
	} 	
  	//Selector de temas
  	var theme = $('#theme');
  	$('#to-green').click(function(){
  		theme.attr("href","Css/Green.css");
  	});
  	$('#to-blue').click(function(){
  		theme.attr("href","Css/Blue.css");
  	});
  	$('#to-red').click(function(){
  		theme.attr("href","Css/Red.css");
  	});  	
  	//Scroll "Ir arriba"
 	$('.arriba').click(function(){
 		$('html,body').animate({
  			scrollTop: 0
  		},500);
 	});
 	//login falso
 	$('#login form').submit(function(){
 		let nombre = $('#form_name').val();
 		localStorage.setItem("form_name",nombre);
 	});
 	var nombre = localStorage.getItem("form_name");
 	if(nombre != null && nombre != 'undefined'){
 		$('#about p').html("<Strong>Bienvenido, "+nombre+"</Strong>");
 		$('#about p').append("<br><a href='#' id='logout'>Cerrar Sesión</a>");
 		$('#login').hide();
 		$('#logout').click(function(){
 			localStorage.clear();
 			location.reload();
 		});
 	}
 	//acordeon
 	if(window.location.href.indexOf('about') > -1){
 		$('#acordeon').accordion();
 		//Cambiar color acordeon
 		
 	}

 	//Reloj
 	if(window.location.href.indexOf('reloj') > -1){
 		setInterval(function(){
 			var reloj = moment().format("hh:mm:ss");
 			$('#reloj').html(reloj);
 		},1000);
 	}
 	//Validacion
 	if(window.location.href.indexOf('contacto') > -1){
 		$("form input[name='date']").datepicker();
 		$.validate({
 			lang: 'es'
 		});
 	}
});