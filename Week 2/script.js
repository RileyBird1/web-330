/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Riley
  Date: 11-9-24
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return{
    getName: function(){
      return name;
    }
  }

  return{
    getGender: function(){
      return gender;
    }
  }

  return{
    getClass: function(){
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const heroName = document.getElementById("heroName").value;

  const heroGender = document.getElementById("heroGender").value;

  const heroClass = document.getElementById("heroClass").value;
  // TODO: Create character
  // Not sure what I'm supposed to do in this step??
  // TODO: Display character information
  document.getElementById("characterOutput").innerHTML = heroName + " is a " + heroGender + " " + heroClass + ".";
});