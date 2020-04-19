/**
 * Name: Tushar Khurana
 * Date: April 23rd 2020
 * Section: CSE 154 AG
 * TA: Kyle Christian Roland
 *
 * -- your description of what this file does here --
 * Javascript file for creative project 2. This file handles header resizing
 * and the event responses for a search bar.
 * Do not keep comments from this template in any work you submit (functions included under "Helper
 * functions" are an exception, you may keep the function names/comments of id/qs/qsa/gen)
 */
"use strict";

(function() {

  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED HERE
  let scrollPosition = 0;

  /**
   * Function to call when the window is loaded
   */
  window.addEventListener("load", init);

  /**
   * CHANGE: Describe what your init function does here.
   */
  function init() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
    window.addEventListener('scroll', fixAndResizeHeader);
    // window.addEventListener('scroll', fixHeader);
    window.addEventListener('scroll', makeHeaderVisible);
    // scrollPosition = document.body.scrollTop;
  }

  /**
   *  Resizes header and fixes it to top of screen when the user scrolls past the top of the body
   * @listens window:scroll
   */
  function fixAndResizeHeader() {
    const SCROLL_TRIGGER = 50;
    let header = qs('header');
    let newScrollPosition = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (newScrollPosition > SCROLL_TRIGGER) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  /*
   *  Resizes the header when the user scrolls past the top of the body
   * @listens window:scroll
   */
  function makeHeaderVisible() {
    const SCROLL_TRIGGER = 500;
    let header = qs('header');
    let newScrollPosition = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (newScrollPosition > SCROLL_TRIGGER) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
    scrollPosition = newScrollPosition;
  }

  /**
   * Make sure to always add a descriptive comment above
   * every function detailing what it's purpose is
   * Use JSDoc format with @param and @return.
   */
  function exampleFunction1() {
    /* SOME CODE */
  }

  /**
   * Make sure to always add a descriptive comment above
   * every function detailing what it's purpose is
   * @param {variabletype} someVariable This is a description of someVariable, including, perhaps, preconditions.
   * @returns {returntype} A description of what this function is actually returning
   */
  function exampleFunction2(someVariable) {
    /* SOME CODE */
    return something;
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  /**
   * Note: You may use these in your code, but remember that your code should not have
   * unused functions. Remove this comment in your own code.
   */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();

