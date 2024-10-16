/*!
  * Simple-Jekyll-Search
  * Copyright 2015-2020, Christian Fei
  * Licensed under the MIT License.
  */


// Immediately Invoked Function Expression (IIFE) to encapsulate the code and create a private scope
(function() {
  "use strict";

  // Object containing functions related to compiling templates
  var f = {
      // Function to compile a template with given data
      compile: function(r) {
          // Replace placeholders in the template with corresponding values from the data
          return i.template.replace(i.pattern, function(t, e) {
              var n = i.middleware(e, r[e], i.template); // Apply middleware to template values
              return void 0 !== n ? n : r[e] || t; // Use the replaced value or original placeholder
          });
      },
      // Function to set options for template compilation
      setOptions: function(t) {
          i.pattern = t.pattern || i.pattern; // Set pattern for placeholders
          i.template = t.template || i.template; // Set template string
          "function" == typeof t.middleware && (i.middleware = t.middleware); // Set middleware function
      }
  };

  // Default options and settings for template compilation
  const i = {
      pattern: /\{(.*?)\}/g, // Regular expression pattern to match placeholders in the template
      template: "", // Default template string
      middleware: function() {} // Default middleware function
  };

  // Function to perform case-insensitive string comparison
  var n = function(t, e) {
      var n = e.length,
          r = t.length;
      if (n < r) return !1;
      if (r === n) return t === e;
      t: for (var i = 0, o = 0; i < r; i++) {
          for (var u = t.charCodeAt(i); o < n;)
              if (e.charCodeAt(o++) === u) continue t;
          return !1;
      }
      return !0;
  };

  // Object containing functions for case-insensitive string matching
  var e = new function() {
      // Function to check if a string contains another string (case-insensitive)
      this.matches = function(t, e) {
          return n(e.toLowerCase(), t.toLowerCase());
      };
  };

  // Object containing functions for searching and matching strings with multiple words
  var r = new function() {
      // Function to check if a string contains all the words in another string (case-insensitive)
      this.matches = function(e, t) {
          return !!e && (e = e.trim().toLowerCase(), (t = t.trim().toLowerCase()).split(" ").filter(function(t) {
              return 0 <= e.indexOf(t);
          }).length === t.split(" ").length);
      };
  };

  // Object for managing search functionality
  var d = {
      // Function to add data to search index
      put: function(t) {
          if (l(t)) return a(t); // If single object, add to search index
          if (function(t) {
                  return Boolean(t) && "[object Array]" === Object.prototype.toString.call(t);
              }(t)) return function(n) {
              const r = [];
              s(); // Clear existing search index
              for (let t = 0, e = n.length; t < e; t++) l(n[t]) && r.push(a(n[t])); // Add each object to search index
              return r;
          }(t); // If array of objects, add each object to search index
          return undefined;
      },
      // Function to clear search index
      clear: s,
      // Function to search for a query string in the search index
      search: function(t) {
          return t ? function(e, n, r, i) {
              const o = [];
              for (let t = 0; t < e.length && o.length < i.limit; t++) {
                  var u = function(t, e, n, r) {
                      for (const i in t)
                          if (!function(n, r) {
                                  for (let t = 0, e = r.length; t < e; t++) {
                                      var i = r[t];
                                      if (new RegExp(i).test(n)) return !0;
                                  }
                                  return !1;
                              }(t[i], r.exclude) && n.matches(t[i], e)) return t[i];
                  }(e[t], n, r, i); // Match query string with each object property
                  u && o.push(u); // Add matched object to results array
              }
              return o;
          }(u, t, c.searchStrategy, c).sort(c.sort) : []; // Sort results and limit to search limit
      },
      // Function to set search options
      setOptions: function(t) {
          c = t || {}, c.fuzzy = t.fuzzy || !1, c.limit = t.limit || 10, c.searchStrategy = t.fuzzy ? e : r, c.sort = t.sort || o, c.exclude = t.exclude || [];
      }
  };

  // Default sorting function
  function o() {
      return 0;
  }

  // Array to store search index
  const u = [];

  // Object to store search options and settings
  let c = {};

  // Function to clear search index
  function s() {
      return u.length = 0, u;
  }

  // Function to check if an object is valid
  function l(t) {
      return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t);
  }

  // Function to add object to search index
  function a(t) {
      return u.push(t), u;
  }

  // Default search options and settings
  c.fuzzy = !1, c.limit = 10, c.searchStrategy = c.fuzzy ? e : r, c.sort = o, c.exclude = [];

  // Object for handling AJAX requests
  var p = {
      load: function(t, e) {
          const n = window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
          n.open("GET", t, !0), n.onreadystatechange = h(n, e), n.send();
      }
  };

  // Function to handle AJAX response
  function h(e, n) {
      return function() {
          if (4 === e.readyState && 200 === e.status) try {
            n(null, JSON.parse(e.responseText)); // Parse JSON response and pass it to the callback function
          } catch (t) {
              n(t, null); // Handle errors in parsing JSON
          }
      };
  }

  // Class for validating required options
  var m = function y(t) {
      if (!t || !("undefined" != typeof t.required && t.required instanceof Array)) throw new Error("-- OptionsValidator: required options missing");
      var e;
      if (!(this instanceof y)) return new y(t);
      const r = t.required;
      this.getRequiredOptions = function() {
          return r;
      }, this.validate = function(e) {
          const n = [];
          return r.forEach(function(t) {
              "undefined" == typeof e[t] && n.push(t);
          }), n;
      };
  };

  // Object for utility functions
  var w = {
      // Function to merge two objects
      merge: function(t, e) {
          const n = {};
          for (const r in t) n[r] = t[r], "undefined" != typeof e[r] && (n[r] = e[r]);
          return n;
      },
      // Function to check if a variable is a valid JSON object
      isJSON: function(t) {
          try {
              return t instanceof Object && JSON.parse(JSON.stringify(t)) ? !0 : !1;
          } catch (e) {
              return !1;
          }
      }
  };

  // Main function for SimpleJekyllSearch
  ! function(t) {
      // Default options for search functionality
      let i = {
          searchInput: null,
          resultsContainer: null,
          json: [],
          success: Function.prototype,
          searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
          templateMiddleware: Function.prototype,
          sortMiddleware: function() {
              return 0;
          },
          noResultsText: "No results found",
          limit: 10,
          fuzzy: !1,
          debounceTime: null,
          exclude: []
      }, n;

      // Function for debouncing input events
      const e = function(t, e) {
          e ? (clearTimeout(n), n = setTimeout(t, e)) : t.call();
      };

      // Required options for SimpleJekyllSearch
      var r = ["searchInput", "resultsContainer", "json"];

      // Validate required options
      const o = m({required: r});

      // Function to initialize SimpleJekyllSearch
      function u(t) {
          // Add JSON data to search index
          d.put(t);

          // Event listener for input events in search input field
          i.searchInput.addEventListener("input", function(t) {
              // Ignore certain key codes (e.g., arrow keys)
              if (-1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(t.which)) {
                  c(); // Clear previous search results
                  e(function() {
                      l(t.target.value); // Perform search with debouncing
                  }, i.debounceTime); // Apply debounce time
              }
          });
      }

      // Function to clear search results
      function c() {
          i.resultsContainer.innerHTML = "";
      }

      // Function to display search results
      function s(t) {
          i.resultsContainer.innerHTML += t;
      }

      // Function to perform search
      function l(t) {
          var e;
          // Check if search query is not empty
          (e = t) && 0 < e.length && (
              c(), // Clear previous search results
              function(e, n) {
                  var r;
                  // Perform search with given query
                  (r = d.search(e)).forEach(function(t) {
                      // Compile search result template with search result data
                      t.query = n, // Add query string to search result data
                          s(f.compile(t)); // Display compiled search result
                  });
                  // If no search results found, display no results text
                  0 === r.length && s(i.noResultsText);
              }(t, e) // Pass search query and search results to search function
          );
      }

      // Function to handle errors
      function a(t) {
          throw new Error("SimpleJekyllSearch --- " + t);
      }

      // Main SimpleJekyllSearch function
      t.SimpleJekyllSearch = function(t) {
          var n;
          // Validate required options
          0 < o.validate(t).length && a("You must specify the following required options: " + r);

          // Merge default options with user-defined options
          i = w.merge(i, t);

          // Set template options for search result compilation
          f.setOptions({
              template: i.searchResultTemplate,
              middleware: i.templateMiddleware
          });

          // Set search options and settings
          d.setOptions({
              fuzzy: i.fuzzy,
              limit: i.limit,
              sort: i.sortMiddleware,
              exclude: i.exclude
          });

          // Check if JSON data is provided as an object or a URL
          w.isJSON(i.json) ? u(i.json) : (
              n = i.json,
              p.load(n, function(t, e) {
                  t && a("failed to get JSON (" + n + ")"), // Handle errors in
                  u(e); // Add JSON data to search index
                })
            );

            // Object to expose search functionality
            t = {
                search: l
            };

            // Call success callback function if provided
            "function" == typeof i.success && i.success.call(t);

            // Return object with search function
            return t;
        }
    }(window);
})();