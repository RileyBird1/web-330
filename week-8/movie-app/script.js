/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Riley
  Date: 12/15/24
  Filename:  script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {title: 'The Hunt for Red October', director: 'John McTiernan', releaseYear: '1990', synopsis: `Based on the popular Tom Clancy novel, this suspenseful movie tracks Soviet submarine captain Marko Ramius (Sean Connery) as he abandons his orders and heads for the east coast of the United States. Equipped with innovative stealth technology, Ramius' submarine, "Red October," is virtually invisible. However, when an American sub briefly detects the Russians' presence, CIA agent Jack Ryan (Alec Baldwin) sets out to determine Ramius' motives, fearing he may launch an attack on the U.S.`},
  {title: 'The Bourne Identity', director: 'Doug Liman', releaseYear: '2002', synopsis: `The story of a man (Matt Damon), salvaged, near death, from the ocean by an Italian fishing boat. When he recuperates, the man suffers from total amnesia, without identity or background... except for a range of extraordinary talents in fighting, linguistic skills and self-defense that speak of a dangerous past. He sets out on a desperate search-assisted by the initially rebellious Marie (Franka Potente) - to discover who he really is, and why he's being lethally pursued by assassins.`},
  {title: 'Oceans Eleven', director: 'Steven Soderbergh', releaseYear: '2001', synopsis: `Dapper Danny Ocean is a man of action. Less than 24 hours into his parole from a New Jersey penitentiary, the wry, charismatic thief is already rolling out his next plan. He follows three rules: do not hurt anybody, do not steal from anyone who does not deserve it, and play the game like you have got nothing to lose. With those in mind, Danny works to orchestrate the most sophisticated, elaborate casino heist in history, targeting three establishments owned by the man who is dating his ex-wife.`}
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const result = movies.find(( movie ) => movie.title === title);
      if (result == undefined) {
        reject("Failed to find movie.");
      } else {
        resolve(result);
      }
    }, 1000);
  });
}

async function displayMovie(title) {
  try {
    const movieResult = await fetchMovie(title);
    //console.log(movieResult);
    document.getElementById("movie-title").innerHTML = movieResult.title;
    document.getElementById("movie-director").innerHTML = movieResult.director;
    document.getElementById("movie-year").innerHTML = movieResult.releaseYear;
    document.getElementById("movie-synopsis").innerHTML = movieResult.synopsis;
    document.getElementById("error-message").innerHTML = "";
    console.log("Movie displayed successfully!");
  } catch (error) {
    document.getElementById("error-message").innerHTML = error;
    document.getElementById("movie-title").innerHTML = "";
    document.getElementById("movie-director").innerHTML = "";
    document.getElementById("movie-year").innerHTML = "";
    document.getElementById("movie-synopsis").innerHTML = "";
    console.error("An error occurred:", error);
  }
 }

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault();
  console.log(event);
  const movieInput = document.getElementById("title-input");
  const value = movieInput.value;
  await displayMovie(value);
});