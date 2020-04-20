/**
 * Name: Tushar Khurana
 * Date: April 22nd 2020
 * Section: CSE 154 AG
 * TA: Kyle Christian Roland
 *
 * -- your description of what this file does here --
 * Javascript file for creative project 2. This file handles header resizing,
 * makes the header invisble upon scrolling down, and makes it visible upon
 * scrolling up. It also handles event responses for a search bar.
 * Do not keep comments from this template in any work you submit (functions included under "Helper
 * functions" are an exception, you may keep the function names/comments of id/qs/qsa/gen)
 */
"use strict";

(function() {

  // global variable
  let scrollPosition = 0;

  /**
   * Function to call when the window is loaded
   */
  window.addEventListener("load", init);

  /**
   * Adds event listeners for scrolling (for header resizing) and to the search bar
   */
  function init() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
    window.addEventListener('scroll', resizeAndHideHeader);
    window.addEventListener('scroll', makeHeaderVisible);
    id('search').addEventListener('input', showSearchResults);
  }

  /**
   *  Resizes header and makes it invisible when the user scrolls past the top of the body
   * @listens window:scroll
   */
  function resizeAndHideHeader() {
    const SCROLL_TRIGGER = 100;
    let header = qs('header');
    let newScrollPosition = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (newScrollPosition > SCROLL_TRIGGER) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  /**
   * Makes header visible when user scrolls up
   * @listens window:scroll
   */
  function makeHeaderVisible() {
    const SCROLL_TRIGGER = 100;
    let header = qs('header');
    let newScrollPosition = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (newScrollPosition > SCROLL_TRIGGER && newScrollPosition < scrollPosition) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
    scrollPosition = newScrollPosition;
  }

  /**
   * Created a search drop when the user types a search query
   */
  function showSearchResults(e) {
    let searchBox = id('search-results-box');
    if (e.target.value) {
      if (!searchBox) {
        searchBox = gen('div');
        searchBox.id = 'search-results-box';

        addResult('Home', 'A picture that represents when I\'m...', 'index.html', searchBox);
        addResult('CV', 'Wrote technical research and...',
                  'cv.html', searchBox);

        let mainContainer = id('main-flex-container');
        document.body.insertBefore(searchBox, mainContainer);
      }
    } else {
      if (searchBox) {
        searchBox.remove();
      }
    }
  }

  /**
   * Interal helper function for adding a search result to the search box
   * @param {string} page - Page where content is located
   * @param {string} content - Snippet of relevant content
   * @param {string} linkLocation - relative link to the page
   * @param {div:element} searchBox - Searchbox container
   */
  function addResult(page, content, linkLocation, searchBox) {
        let pageName = gen('span');
        pageName.classList.add('search-result-page-name');
        pageName.appendChild(document.createTextNode(page));
        let pageContent = gen('span');
        pageContent.classList.add('search-result-page-content');
        pageContent.appendChild(document.createTextNode(content));
        let searchResult = gen('div');
        searchResult.classList.add('search-result');
        searchResult.appendChild(pageName);
        searchResult.appendChild(pageContent);
        let link = gen('a');
        link.href = linkLocation;
        link.appendChild(searchResult);
        searchBox.appendChild(link);

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

