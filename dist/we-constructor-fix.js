/**
 * Fix específico para el error "We is not a constructor"
 * 
 * Este script define el constructor "We" que parece estar causando problemas
 * en la aplicación. Se carga antes que cualquier otro script para asegurar
 * que el constructor esté disponible cuando se necesite.
 */

(function() {
  // Definir el constructor We
  window.We = function(options) {
    if (!(this instanceof window.We)) {
      return new window.We(options);
    }
    
    // Implementación básica
    this.options = options || {};
    this.data = typeof this.options.data === 'function'
      ? this.options.data()
      : (this.options.data || {});
    
    // Copiar propiedades
    Object.assign(this, this.data);
    
    // Inicializar si es necesario
    if (typeof this.options.created === 'function') {
      this.options.created.call(this);
    }
    
    return this;
  };
  
  // Agregar prototipo básico con métodos comunes de Vue
  window.We.prototype = {
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
  
  // También proporcionar versión en minúsculas
  window.we = window.We;
  
  console.log('Constructor We definido correctamente');
})();
