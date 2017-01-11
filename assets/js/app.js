$(document).ready(function(){
	$('#read-less').hide();
	$('#first').hide();

	$('#second-read-less').hide();
	$('#second').hide();

	$('#third-read-less').hide();
	$('#third').hide();	


	$('#fourth-read-less').hide();
	$('#fourth').hide();	


	$('#fifth-read-less').hide();
	$('#fifth').hide();	

// First paragraph
	$('#read-more').click(function(){
		$('#first').show();
		$('#read-more').hide();
		$('#read-less').show();
	});

		$('#read-less').click(function(){
		$('#first').hide();
		$('#read-more').show();
		$('#read-less').hide();
	});

// Second paragraph
	$('#second-read-more').click(function(){
		$('#second').show();
		$('#second-read-more').hide();
		$('#second-read-less').show();
	});

		$('#second-read-less').click(function(){
		$('#second').hide();
		$('#second-read-more').show();
		$('#second-read-less').hide();
	});

// Third paragraph
	$('#third-read-more').click(function(){
		$('#third').show();
		$('#third-read-more').hide();
		$('#third-read-less').show();
	});

		$('#third-read-less').click(function(){
		$('#third').hide();
		$('#third-read-more').show();
		$('#third-read-less').hide();
	});

// Fourth paragraph
	$('#fourth-read-more').click(function(){
		$('#fourth').show();
		$('#fourth-read-more').hide();
		$('#fourth-read-less').show();
	});

		$('#fourth-read-less').click(function(){
		$('#fourth').hide();
		$('#fourth-read-more').show();
		$('#fourth-read-less').hide();
	});

// Fifth paragraph
	$('#fifth-read-more').click(function(){
		$('#fifth').show();
		$('#fifth-read-more').hide();
		$('#fifth-read-less').show();
	});

		$('#fifth-read-less').click(function(){
		$('#fifth').hide();
		$('#fifth-read-more').show();
		$('#fifth-read-less').hide();
	});






});