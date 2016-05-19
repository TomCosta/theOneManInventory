(function(){
	'use strict';

	angular
			.module('app.auth')
			.controller('SignupCtrl', SignupCtrl);

	SignupCtrl.$inject = ['$scope', '$state', 'AuthService'];
	function SignupCtrl($scope, $state, AuthService){
		$scope.data = {};

		$scope.createUser = function(signupForm){
			if (signupForm.$valid) {
				var newEmail = $scope.data.email;
				var newPassword = $scope.data.password;
				var newFullName = $scope.data.fullName;
				var selectedPlan = $state.params.pId;
				AuthService.signupEmail(newEmail, newPassword, newFullName, selectedPlan);
			};

		};
	}
})();
