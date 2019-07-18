'use strict';

function getDogItem() {
    fetch ('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }