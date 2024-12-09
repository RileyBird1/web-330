/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Riley
  Date: 12/8/24
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {name:"Dave", specialty:"turkey", weakness:"chicken", restaurantLocation:"Toronto"},
  {name:"Chester", specialty:"fish", weakness:"napkins", restaurantLocation:"Alaska"},
  {name:"Harold", specialty:"forks", weakness:"spoons", restaurantLocation:"Timbuktu"}
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let chef1 = chefs[0];
      let message1 = `${chef1.name} specializes in ${chef1.specialty}, hates doing ${chef1.weakness}, and works in ${chef1.restaurantLocation}`;
      let randomNumber = Math.floor(Math.random()*2);
      console.log(randomNumber);
      if (randomNumber == 0) {
        console.log(message1);
        resolve(message1);
      } else {
        reject(`Failed to retrieve Chef1.`);
      }
    }, 2000);
    });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let chef2 = chefs[1];
      let message2 = `${chef2.name} specializes in ${chef2.specialty}, hates doing ${chef2.weakness}, and works in ${chef2.restaurantLocation}`;
      let randomNumber = Math.floor(Math.random()*2);
      console.log(randomNumber);
      if (randomNumber == 0) {
        console.log(message2);
        resolve(message2);
      } else {
        reject(`Failed to retrieve Chef2.`);
      }
      console.log(message2);
      resolve(message2);
    }, 3000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let chef3 = chefs[2];
      let message3 = `${chef3.name} specializes in ${chef3.specialty}, hates doing ${chef3.weakness}, and works in ${chef3.restaurantLocation}`;
      let randomNumber = Math.floor(Math.random()*2);
      console.log(randomNumber);
      if (randomNumber == 0) {
        console.log(message3);
        resolve(message3);
      } else {
        reject(`Failed to retrieve Chef3.`);
      }
      console.log(message3);
      resolve(message3);
    }, 1000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(result.value);
      document.getElementById(`chef${index+1}`).innerHTML = result.value;
    } else {
      console.log("An error occurred:", result.reason);
      document.getElementById(`chef${index+1}`).innerHTML = result.reason;
    }
  });
});