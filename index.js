$(function()   {
	var $tvShowsContainer = $('#app-body').find('div.tv-shows')


	/*  Esta funcion muestra los shows */

	function renderShows(shows) {
				/* para quitar el spinner de cargando */
				$tvShowsContainer.find('.loader').remove();
				/* para quitar el spinner de cargando */

			shows.forEach(function(show) {
			var article = template
				.replace(':name:', show.name)
				.replace(':summary:', show.summary)
				.replace(':img:', show.image ? show.image.medium : '' )
				.replace(':img alt:', show.name + " Logo Opps!")
			/*  Efectos antes de mostrar los contenedores */
				var $article = $(article)
			/*   aquí vamos a cambiar app-body por lo que está en el template meidiante article*/
				/*  $tvShowsContainer.append($(article))  */
				$article.hide();
				$tvShowsContainer.append($article.show()) 
				})
	}



	/**
	*  Submit search form
	*/
	$('#app-body')
		.find('form')
		.submit(function onsubmit (ev) {  /* el onsubmit no es necesario puede ser funciona anonima*/
			ev.preventDefault(); /* para que no recargue la pantalla*/
			console.log('submit')
			console.log(this)
			var busqueda = $(this)
			    .find('input[type="text"]')
			    .val();


			    /* la siguiente linea borra los shows mostrados al principio para poder mostrar los buscados*/
			    $tvShowsContainer.find('.tv-show').remove()	
				/* para ..... */
				var $loader = $('<div class="loader">');
				$loader.appendTo($tvShowsContainer);


			    $.ajax({
			    	url: 'http://api.tvmaze.com/search/shows',
			    	data: { q: busqueda},
			    	success: function (respuesta, textStatus, xhr ) {
			    		$loader.remove();
			    		var shows = respuesta.map(function(el) {
			    		return el.show;
			    		})
			    		renderShows(shows);
			    	}
			    });
			    /*alert('se ha buscado: ' + busqueda );*/
		})

/*    AQUI VAMOS A REALIZAR UN TEMPLATE de lo que se va a mostrar */

	var template = '<article class="tv-show"> '+
					'<div class="left img-container">  '+
					'<img src=":img:" alt=":img alt:"> '+
					'</div>'+
					'<div class="right info"> '+
					'<h1>:name:</h1>'+
					'<p>:summary:</p>'+
					'</div>'+
				    '</article>';

/*    AQUI VAMOS A REALIZAR UN TEMPLATE de lo que se va a mostrar */



if (!localStorage.shows) {
		/*   Este ajax lo utilizo para traer información de la api de Tvmaze   */
		$.ajax({
			url: 'http://api.tvmaze.com/shows',
			success: function(shows, textStatus, xhr) {

				/* para quitar el spinner de cargando */
					$tvShowsContainer.find('.loader').remove();
				/* para quitar el spinner de cargando */

					/* para local storage */
					localStorage.shows = JSON.stringify(shows);
					renderShows(shows);	 // funcion que arma los shows
			} // de la funcion success ....
		})   // cierra ajax
} else {
		renderShows(JSON.parse(localStorage.shows));	 // funcion que arma los shows
	}  // del else











})   /* Este es del inicio de la función  */

console.log(this)











/*ESTOS SON EVENTOS DE PRACTICA*/


$(function() {
	$('h1').addClass('danger');


	setTimeout(function() {
		$('h1').removeClass('danger');
	}, 1500)
	})



	$(function() {
	var a = $('<a>', {
		href: 'http://platzi.com',
		target: '_blank',
		html: 'Ir a Platzi'
		})

	$('#app-body').append(a);

	});


	$("p").on ({
		"click": function() 
			{ console.log("hicieron click"); 
			},
		"mouseover": function() 
		    { console.log("pasaron el mouse");
		}   
	});
	



