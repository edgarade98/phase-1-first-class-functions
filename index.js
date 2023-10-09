function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback(); 
    } else {
      console.error('The argument is not a function.');
    }
  }

function returnsANamedFunction() {
    function namedFunction() {
      
    }
    return namedFunction;
  }

function returnsAnAnonymousFunction() {
    return function() {
      
    };
  }
  