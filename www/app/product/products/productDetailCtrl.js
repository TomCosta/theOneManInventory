(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('ProductDetailCtrl', ProductDetailCtrl);

  ProductDetailCtrl.$inject = ['$scope', 'user', 'ProductService', '$state', '$cordovaSocialSharing'];

  function ProductDetailCtrl($scope, user, ProductService, $state, $cordovaSocialSharing){

    $scope.currentProduct = ProductService.productDetail(user.$id, $state.params.pId);

    $scope.shareWhatsapp = function(){
      var message = $scope.currentProduct.name + '\n\n' + $scope.currentProduct.description + '\n\nPrice: $' +
        $scope.currentProduct.price;

      $cordovaSocialSharing.shareViaWhatsApp(message, null, null)
        .then(function(result) {
          if (window.AdMob) AdMob.showInterstitial();
        }, function(err) {
          // An error occurred. Show a message to the user
        });
    };

    $scope.shareEmail = function(){
      var message = $scope.currentProduct.name + '\n\n' + $scope.currentProduct.description + '\n\nPrice: $' +
        $scope.currentProduct.price;

      $cordovaSocialSharing.shareViaEmail(message, 'Info about ' + $scope.currentProduct.name, null, null, null, null)
        .then(function(result) {
          if (window.AdMob) AdMob.showInterstitial();
        }, function(err) {
          // An error occurred. Show a message to the user
        });
    };

  };
})();
