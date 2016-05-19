(function(){
  'use strict';

  angular
    .module('app.core')
    .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
        function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        	$stateProvider
	        	.state('login', {
	        		url: '/login',
	        		templateUrl: 'app/auth/login/login.html',
	        		controller: 'LoginCtrl',
	        	})

	        	.state('signup', {
	        		url: '/signup',
	        		templateUrl: 'app/auth/signup/signup.html',
	        		controller: 'SignupCtrl',
	        	})

	        	.state('passwordResetForm', {
	        		url: '/passwordResetForm',
	        		templateUrl: 'app/auth/login/passwordResetForm.html',
	        		controller: 'PasswordResetCtrl',
	        	})

            .state('profile', {
	        		url: '/profile',
	        		templateUrl: 'app/auth/profile/profile.html',
	        		controller: 'ProfileCtrl',
	        		resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
	        	})

            .state('changeEmail', {
	        		url: '/changeEmail',
	        		templateUrl: 'app/auth/profile/changeEmail.html',
	        		controller: 'ProfileCtrl',
	        		resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
	        	})

            .state('changePassword', {
	        		url: '/changePassword',
	        		templateUrl: 'app/auth/profile/changePassword.html',
	        		controller: 'ProfileCtrl',
	        		resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
	        	})




            ;
	        $urlRouterProvider.otherwise('profile');
    }]);
})();
