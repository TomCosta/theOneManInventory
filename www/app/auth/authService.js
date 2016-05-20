(function(){
	'use strict';

	angular
			.module('app.auth')
      /**
       * AuthService is going to handle all of our auth functions, so we don't need to write them inside the controllers.
       */
			.factory('AuthService', AuthService);

	function AuthService($firebaseAuth, $firebaseObject, $firebaseArray, $state, $firebaseRef){

    var authUser = $firebaseAuth($firebaseRef.default);

		return {
			/*
				The function receives an email, password, name and creates a new user
				After the user is created it stores the user details in the DB.
			*/
			signupEmail: function(newEmail, newPassword, newFullName){

        /**
         * Here we're using angular-fire $createUser to create a new user, just passing the email, password and
         * full name.
         *
         * After that we're creating the record in the DB in a "userProfile" node, remember,
         * creating a user doesn't show him/her in the DB, so we need to create that record ourselves.
         *
         * And then we are catching any errors that might happen :P
         */
				authUser.$createUser({
					email: newEmail,
					password: newPassword,
					fullName: newFullName,
				}).then(function(authData){
            authUser.$authWithPassword({
              "email": newEmail,
              "password": newPassword
            }).then (function(authData){
                $firebaseRef.default.child("userProfile").child(authData.uid).set({
                name: newFullName,
                email: newEmail,
                signupDate: Firebase.ServerValue.TIMESTAMP
              });
              $state.go('categoryList');
            });
				}).catch(function(error){
						switch (error.code) {
				      case "EMAIL_TAKEN":
				        alert("Someone's using that email!");
				        break;
				      case "INVALID_EMAIL":
				        alert("That is not an email address!");
				        break;
				      default:
				        alert("Error creating user:", error);
				    }
				});
			},

      /**
       * Here we are login our user in, we user angular-fire $authWithPassword assing the email and password.
       * After that we send the user to our dashboard.
       */
			loginUser: function(email, password){
				authUser.$authWithPassword({
					"email": email,
					"password": password
				}).then (function(authData){
					$state.go('categoryList');
				}).catch(function(error){
					console.log(error);
				});
			},

			logoutUser: function(){
				authUser.$unauth();
				$state.go('login');
			},

      /**
       * This one explain itself, if the user doesn't remember his password he'll click in the "forgot you password?"
       * link and we need to send him a token so he can log in again
       *
       * NOTE: This doesn't send a reset password link, this sends a token he can use as a password to log in and
       * change his password to something he remembers.
       */
			resetPassword: function(resetEmail){
				authUser.$resetPassword({
					email: resetEmail
				}).then(function(){
					alert("Just sent you an email!");
					$state.go('login');
				}).catch(function(error){
					console.log(error);
				});
			},

			/**
			 * This is going to take the user's email + oldPassword + newPassword and change the Password
			 * used for login.
			 * After changing the password it's going to redirect the user to the profile page.
			 */
			changePassword: function(email, oldPassword, newPassword){
				authUser.$changePassword({
					email: email,
					oldPassword: oldPassword,
					newPassword: newPassword
				}).then(function(){
					alert('Password Changed!');
					$state.go('profile');
				}).catch(function(error){
					console.log(error);
				});
			},

			/**
			 * This is going to take the user's oldEmail + newEmail + password and change the email
			 * used for login.
			 *
			 * Remember, afeter changing the login email we also need to update the userProfile.userId node
			 * I'm going to handle this in the controller using the userProfileData function below.
			 */
			changeEmail: function(oldEmail, newEmail, password){
				authUser.$changeEmail({
					oldEmail: oldEmail,
					newEmail: newEmail,
					password: password
				}).then(function(){
						alert('You changed your email');
						if (window.AdMob) AdMob.showInterstitial();
						$state.go('profile');
				}).catch(function(error){
					console.log(error);
				});
			},

		}

	}
})();
