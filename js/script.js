// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates temperature for F to C
 */
function calcTempF () {
  // get user input
	let fahrenheit = parseFloat(document.getElementById('fahrenheit').value)


  // calculate the temperature
  let tempF = fahrenheit + 2 

  // display the results
  document.getElementById('tempF').innerHTML = "The temperature is " + tempF.toFixed(2) + "°, in celsius."
}

/**
 * This function calculates temperature for C to F
 */
function calcTempC () {
  // get user input
	let celsius = parseFloat(document.getElementById('celsius').value)


  // calculate the temperature
  let tempC = 5/9 * (celsius - 32) 

  // display the results
  document.getElementById('tempC').innerHTML = "The temperature is " + tempC.toFixed(2) + "°, in fahrenheit."
}