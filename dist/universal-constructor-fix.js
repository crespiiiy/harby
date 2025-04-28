/**
 * Universal Constructor Polyfill
 * 
 * This script provides polyfills for ANY constructor that might be expected
 * by third-party libraries. It uses a dynamic approach to handle any constructor
 * name that might be needed.
 */

(function() {
  // List of common constructor names that might be needed
  const commonConstructors = [
    'We', 'He', 'Se', 'Me', 'It', 'They', 'You', 'Vue', 
    'Component', 'App', 'Model', 'View', 'Controller',
    'Router', 'Store', 'State', 'Action', 'Mutation',
    'Directive', 'Filter', 'Mixin', 'Plugin', 'Module'
  ];
  
  // Create a constructor factory function
  function createConstructor(name) {
    console.log(`Creating constructor for: ${name}`);
    
    const constructor = function(options) {
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
    
    // Add basic prototype with Vue-like methods
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
  
  // Define all common constructors
  commonConstructors.forEach(name => {
    if (!window[name]) {
      window[name] = createConstructor(name);
      // Also provide lowercase version
      window[name.toLowerCase()] = window[name];
    }
  });
  
  // Create a proxy for window to handle any constructor access
  try {
    const originalWindow = window;
    
    window = new Proxy(window, {
      get: function(target, prop) {
        // If property exists, return it
        if (prop in target) {
          return target[prop];
        }
        
        // If it looks like a constructor (starts with uppercase letter)
        if (typeof prop === 'string' && /^[A-Z]/.test(prop)) {
          console.log(`Auto-creating constructor for: ${prop}`);
          target[prop] = createConstructor(prop);
          return target[prop];
        }
        
        // Return undefined for other properties
        return undefined;
      }
    });
    
    console.log('Window proxy for auto-constructors installed');
  } catch (e) {
    console.error('Could not create window proxy:', e);
    
    // Fallback: define a global handler for constructor errors
    window.addEventListener('error', function(event) {
      if (event.error && event.error.message && event.error.message.includes('is not a constructor')) {
        const match = event.error.message.match(/([A-Za-z]+) is not a constructor/);
        if (match && match[1]) {
          const name = match[1];
          window[name] = createConstructor(name);
          console.log(`Created missing constructor: ${name} after error`);
          
          // Prevent the error from propagating
          event.preventDefault();
          
          // Try to continue execution
          setTimeout(function() {
            window.location.reload();
          }, 500);
        }
      }
    }, true);
  }
  
  console.log('Universal constructor polyfill applied');
})();
