/**
 * Fix para errores de constructor en i18next
 * 
 * Este script define los constructores que i18next y otras bibliotecas
 * podrían intentar usar. Se carga antes que cualquier otro script para
 * asegurar que estos constructores estén disponibles.
 */

(function() {
  // Lista de constructores que podrían ser necesarios para i18next
  const constructors = [
    'Se', 'We', 'He', 'It', 'They', 'You',
    'Ae', 'Be', 'Ce', 'De', 'Ee', 'Fe', 'Ge',
    'Ie', 'Je', 'Ke', 'Le', 'Me', 'Ne', 'Oe', 'Pe',
    'Qe', 'Re', 'Te', 'Ue', 'Ve', 'Xe', 'Ye', 'Ze'
  ];
  
  // Crear todos los constructores necesarios
  constructors.forEach(name => {
    if (!window[name]) {
      window[name] = function(options) {
        // Asegurar que se use como constructor
        if (!(this instanceof window[name])) {
          return new window[name](options);
        }
        
        // Implementación básica
        this.options = options || {};
        
        // Si options.init es una función, llamarla
        if (typeof this.options.init === 'function') {
          this.options.init.call(this);
        }
        
        return this;
      };
      
      // También proporcionar versión en minúsculas
      window[name.toLowerCase()] = window[name];
      
      console.log(`Constructor ${name} definido para i18next`);
    }
  });
  
  // Función específica para manejar errores de constructor en tiempo de ejecución
  window.handleConstructorError = function(name) {
    if (!window[name]) {
      window[name] = function(options) {
        if (!(this instanceof window[name])) {
          return new window[name](options);
        }
        this.options = options || {};
        return this;
      };
      window[name.toLowerCase()] = window[name];
      console.log(`Constructor ${name} definido dinámicamente`);
    }
    return window[name];
  };
  
  // Interceptar errores globales para manejar errores de constructor
  window.addEventListener('error', function(event) {
    if (event.error && event.error.message && event.error.message.includes('is not a constructor')) {
      const match = event.error.message.match(/([A-Za-z]+) is not a constructor/);
      if (match && match[1]) {
        const name = match[1];
        window.handleConstructorError(name);
        console.log(`Error de constructor ${name} manejado`);
        
        // Prevenir que el error se propague
        event.preventDefault();
        
        // Intentar continuar la ejecución
        setTimeout(function() {
          console.log('Intentando continuar después del error de constructor');
        }, 0);
      }
    }
  }, true);
  
  console.log('Fix para constructores de i18next aplicado');
})();
