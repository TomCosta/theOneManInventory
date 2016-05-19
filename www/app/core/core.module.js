(function(){
  'use strict';

  angular
    .module('app.core', [
            'ionic',
            'ngCordova',
            'firebase',
            'ngMessages',
    ]);

    angular
    	.module('app.core')
    	.run(['$ionicPlatform', '$rootScope', '$state',
    	     function($ionicPlatform, $rootScope, $state) {
    	     	$ionicPlatform.ready(function() {
					    if(window.cordova && window.cordova.plugins.Keyboard) {
					      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
					      cordova.plugins.Keyboard.disableScroll(true);
					    }
					    if(window.StatusBar) {
					      StatusBar.styleDefault();
					    }
					  });

            /*
				    Cath the stateError for un-authenticated users
				    */
				    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error){
    	     		if (error === "AUTH_REQUIRED") {
    	     			$state.go('login');
    	     		};
    	     	});
			}])
      .config(function($firebaseRefProvider) {
        $firebaseRefProvider.registerUrl('https://solo-intentory.firebaseio.com/');
      });

})();
