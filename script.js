'use strict';

function getDogImage(numberPics, breed) {
    fetch('https://dog.ceo/api/breed/'+breed+'/images/random/' + numberPics) //update fetch to handle multiple//
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    const numOfPics = responseJson.message.length;
    $('.results').remove();
    $('.user-input').after('<section class="results"></section>');
    if (responseJson.status === 'success'){
    	for (let i=0; i < numOfPics; i++){
	        let currentImg = responseJson.message[i];
	        console.log(currentImg);
	        $('.results').append(`<img src=${currentImg}></img>`);
	    }
    }else{
    	$('.results').append(`<h5>Search Again, we don't have that breed</h5>`);
    }
    
}

function clearResults() {
    $('.user-input').on('click', '#clear-results', function() {
        $('.results').remove();
    })
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const numberPics = parseInt($('.numberPics').val());
    const breed = $('.breed').val();
    if (numberPics > 0 && numberPics < 51){
		getDogImage(numberPics, breed);
    }else{
    	console.log("Incorrect number");
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  clearResults();
});