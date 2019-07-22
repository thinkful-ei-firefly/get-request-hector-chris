"use strict";

function watchUserInput() {
  $("#dog-num-form").submit(e => {
    e.preventDefault();
    let userNumInput = $("#num-dog").val();
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log("App loaded");
  watchUserInput();
});

function getDogImage(numInput) {
  if (numInput < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert("Something went wrong. Try again later."));
  } else if (numInput > 50) {
    return alert("Please choose a number equal or less than 50");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert("Something went wrong. Try again later."));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").html("");
  responseJson.message.forEach(renderedImg => {
    $(".results").append(`<img src="${renderedImg}" class="results">`);
  });

  $(".results").removeClass("hidden");
}
