(function(){
  'use strict';

  angular
    .module('app', [

            /*
            This is the place for the core and shared modules
            */
            'app.core',

            /*
            This is the place for the features modules, like auth.
            */
            'app.auth',
            'app.product',
]);

})();
