/**
 * Constructor Polyfill
 *
 * This script provides polyfills for various constructors that might be expected
 * by third-party libraries. It helps prevent errors like:
 * - "He is not a constructor"
 * - "We is not a constructor"
 * - "vm is not a constructor"
 */

(function() {
  // Define a constructor factory function to create consistent constructors
  function createConstructor(name) {
    var constructor = function(options) {
      if (!(this instanceof constructor)) {
        return new constructor(options);
      }

      // Basic implementation
      this.options = options || {};
      this.data = typeof this.options.data === 'function'
        ? this.options.data()
        : (this.options.data || {});

      // Copy properties
      Object.assign(this, this.data);

      // Initialize if needed
      if (typeof this.options.created === 'function') {
        this.options.created.call(this);
      }

      return this;
    };

    // Add basic prototype
    constructor.prototype = {
      $emit: function() {},
      $on: function() {},
      $nextTick: function(cb) { setTimeout(cb, 0); },
      $set: function(obj, key, val) {
        if (obj && typeof obj === 'object') {
          obj[key] = val;
        }
      },
      $delete: function(obj, key) {
        if (obj && typeof obj === 'object' && key in obj) {
          delete obj[key];
        }
      },
      $watch: function() { return function() {}; },
      $forceUpdate: function() {},
      $destroy: function() {},
      $mount: function() { return this; }
    };

    return constructor;
  }

  // Create and assign all needed constructors
  window.vm = createConstructor('vm');
  window.He = createConstructor('He');
  window.We = createConstructor('We');

  // Also provide lowercase versions
  window.he = window.He;
  window.we = window.We;

  // Provide Vue-like constructor
  window.Vue = createConstructor('Vue');

  console.log('Constructor polyfills applied (vm, He, We, Vue)');
})();
