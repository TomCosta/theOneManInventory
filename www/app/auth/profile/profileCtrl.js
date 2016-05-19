(function(){
	'use strict';

	angular
			.module('app.auth')
			.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['$scope', 'user', 'AuthService', '$state'];

	function ProfileCtrl($scope, user, AuthService, $state){
		// Creating an empty object called data and binding it to the $scope.
    $scope.data = {};
		// Creating a userProfile object that will hold the userProfile.userId node
    $scope.userProfile = AuthService.userProfileData(user.uid);

		/**
		 * This function will call our service and log the user out.
		 */
		$scope.logoutUser = function(){
			AuthService.logoutUser();
		};

		/**
		 * This function will get the oldPassword and newPassword values from the form and then pass them
		 * to our changePassword() function inside the auth service.
		 */
    $scope.changePassword = function(changePasswordForm){
      if (changePasswordForm.$valid) {
        var oldPassword = $scope.data.oldPassword;
        var newPassword = $scope.data.newPassword;
        AuthService.changePassword(user.password.email, oldPassword, newPassword);
      }
    };

		/**
		 * This will take the user's old email, the new email he wants and the user password and pass it to our
		 * changeEmail() function inside the auth service.
		 *
		 * Then it's going to change the email in our userProfile variable (which points to the userProfile
		 * node in Firebase) and it's going to save that new value.
		 */
    $scope.changeEmail = function(changeEmailForm){
      if (changeEmailForm.$valid) {
        AuthService.changeEmail(user.password.email, $scope.data.newEmail, $scope.data.password);
        $scope.userProfile.email = $scope.data.newEmail;
        $scope.userProfile.$save();
      };
    };
	};
})();
