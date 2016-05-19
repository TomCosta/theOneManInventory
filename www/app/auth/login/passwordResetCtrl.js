(function(){
	'use strict';

	angular
			.module('app.auth')
			.controller('PasswordResetCtrl', PasswordResetCtrl);
  /**
   * Again, we inject our auth service
   */
	PasswordResetCtrl.$inject = ['$scope', 'AuthService'];

	function PasswordResetCtrl($scope, AuthService){
		$scope.data = {}; // Empty object to get the form data.

    /**
     * We grab our user's email from the form and send it to our service, piece of cake!
     */
		$scope.resetPassword = function(passwordResetForm){
			if (passwordResetForm.$valid) {
				var email = $scope.data.email;
				AuthService.resetPassword(email);
			};				
		};
	}
})();
