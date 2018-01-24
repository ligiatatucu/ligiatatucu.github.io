$(document).ready(function(){
	$('body').on('submit', '#searchForm', function(e){
		let searchText=$('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
});

//function onclick

function movieClicked(id) {
	sessionStorage.setItem('movieId', id);
	$.mobile.changePage('test.html');
	//console.log(id);
}

//GET MOVIES FROM ObBD API

function getMovies(searchText) {
	$.ajax({
		method:"GET",
		url:"http://www.omdbapi.com/?apikey=5c85a2b2&s=" +searchText
		
	}).done(function(data){
		let movies=data.Search; //put the array in the variable
		let output='';
		
		$.each(movies,function(index, movie){
			output +=`
				<li>
					<a onclick="movieClicked('${movie.imdbID}')"  href="#">
					<img src="${movie.Poster}">
					<h2>${movie.Title}</h2>
					<p>Release Year: ${movie.Year}</p>
					</a>
				</li>
			`;
		});
		$("#movies").html(output).listview('refresh');
	});
}