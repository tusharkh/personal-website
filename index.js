/**
 * Name: Tushar Khurana
 * Date: April 22nd 2020
 * Section: CSE 154 AG
 * TA: Kyle Christian Roland
 *
 * Javascript file for creative project 2. This file handles header resizing,
 * makes the header invisble upon scrolling down, and makes it visible upon
 * scrolling up. It also handles event responses for a search bar. Note the
 * search bar does not actually work, but it provides the basis for how
 * search results will be shown when searching is intergrated into the site.
 */
"use strict";

(function() {

  // global variable
  let scrollPosition = 0;
  const SCROLL_TRIGGER = 100;

  /**
   * Initialize event handlers when the window is loaded
   */
  window.addEventListener('load', init);

  /**
   * Adds event listeners for scrolling (for header resizing, hidding and making it visible
   * on upscroll) and to the search bar
   */
  function init() {
    window.addEventListener('scroll', resizeHeader);
    window.addEventListener('scroll', hideHeader);
    window.addEventListener('scroll', showHeaderOnUpscroll);
    window.addEventListener('scroll', removeSearchResults);
    id('search').addEventListener('input', showSearchResults);
  }

  /** Resizes header when the user scrolls past the top of the body */
  function resizeHeader() {
    let header = qs('header');
    let newScrollPosition = document.documentElement.scrollTop;
    if (newScrollPosition > SCROLL_TRIGGER) {
      header.classList.add('small');
    } else {
      header.classList.remove('small');
    }
  }

  /** Hides header when the user scrolls past the top of the body */
  function hideHeader() {
    let header = qs('header');
    let newScrollPosition = document.documentElement.scrollTop;
    if (newScrollPosition > SCROLL_TRIGGER) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  }

  /** Makes header visible when user scrolls up */
  function showHeaderOnUpscroll() {
    let header = qs('header');
    let newScrollPosition = document.documentElement.scrollTop;
    if (newScrollPosition > SCROLL_TRIGGER && newScrollPosition < scrollPosition) {
      header.classList.remove('hidden');
    }
    scrollPosition = newScrollPosition;
  }

  /**
   * Created a search drop when the user types a search query
   * @param {event} event - The search input event to be handled
   */
  function showSearchResults(event) {
    let searchBox = id('search-results-box');
    if (event.target.value !== '') {
      if (!searchBox) {
        searchBox = gen('div');
        searchBox.id = 'search-results-box';
        /*
         * add each result that shows up in the search. Search is not implemented yet,
         * so these results are examples
         */
        addResult('Home', 'A picture that represents when I\'m...', 'index.html', searchBox);
        addResult('CV', 'Wrote technical research and...', 'cv.html', searchBox);

        let mainContainer = id('main-flex-container');
        document.body.insertBefore(searchBox, mainContainer);
      }
    } else if (searchBox) {
      searchBox.remove();
    }
  }

  /**
   * Internal helper function for adding a search result to the search box
   * @param {string} page - Page where content is located
   * @param {string} content - Snippet of relevant content
   * @param {string} linkLocation - relative link to the page
   * @param {element} searchBox - Searchbox container
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
   * Removes search drop when the user scrolls
   */
  function removeSearchResults() {
    let searchBox = id('search-results-box');
    if (searchBox) {
      searchBox.remove();
    }
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
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();

