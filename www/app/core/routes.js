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

            .state('categoryCreate', {
              url: '/categoryCreate',
              templateUrl: 'app/product/categories/categoryCreate.html',
              controller: 'CategoryCreateCtrl',
              resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
            })

            .state('categoryList', {
              url: '/categoryList',
              templateUrl: 'app/product/categories/categoryList.html',
              controller: 'CategoryListCtrl',
              resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                },
                categoryList: function($firebaseAuthService, $firebaseRef, $firebaseArray) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseArray($firebaseRef.default.child('soloPreneur').child(authData.uid)
                      .child('categoryList')).$loaded();
                  })
                },

              }
            })

            .state('categoryDetail', {
              url: '/categoryDetail/:cId',
              templateUrl: 'app/product/categories/categoryDetail.html',
              controller: 'CategoryDetailCtrl',
              resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
            })

            .state('categoryUpdate', {
              url: '/categoryUpdate/:cId',
              templateUrl: 'app/product/categories/categoryUpdate.html',
              controller: 'CategoryUpdateCtrl',
              resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
            })

            .state('productCreate', {
              url: '/productCreate/:cId',
              templateUrl: 'app/product/products/productCreate.html',
              controller: 'ProductCreateCtrl',
              resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
            })

            .state('productDetail', {
              url: '/productDetail/:pId',
              templateUrl: 'app/product/products/productDetail.html',
              controller: 'ProductDetailCtrl',
              resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
            })

            .state('productUpdate', {
              url: '/productUpdate/:pId',
              templateUrl: 'app/product/products/productUpdate.html',
              controller: 'ProductUpdateCtrl',
              resolve: {
                user: function($firebaseAuthService, $firebaseRef, $firebaseObject) {
                  return $firebaseAuthService.$requireAuth().then(function(authData){
                    return $firebaseObject($firebaseRef.default.child('userProfile').child(authData.uid)).$loaded();
                  })
                }
              }
            })




            ;
	        $urlRouterProvider.otherwise('categoryList');
    }]);
})();
