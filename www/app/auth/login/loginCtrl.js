(function(){
	'use strict';

	angular
			.module('app.auth')
			.controller('LoginCtrl', LoginCtrl);
  /**
   * We create our controller and inject the AuthService so we can connect to Firebase.
   */
	LoginCtrl.$inject = ['$scope', '$state', 'AuthService'];

  function LoginCtrl($scope, $state, AuthService){
    // We create a variable called 'data', we asign it to an empty object and bind it to scope, to handle the form data.
		$scope.data = {};

    /**
     * Our function is pretty simple, get the username and password from the form, and send it to our auth service, that's it.
     * The auth service will take care of everything else for you!
     * @return {[type]} [description]
     */
		$scope.loginEmail = function(loginForm){
			if (loginForm.$valid) {
				var email = $scope.data.email;
				var password = $scope.data.password;
				AuthService.loginUser(email, password);
			};
		}
	}
})();
