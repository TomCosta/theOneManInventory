(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('ProductDetailCtrl', ProductDetailCtrl);

  ProductDetailCtrl.$inject = ['$scope', 'user', 'ProductService', '$state',
    '$cordovaSocialSharing', '$ionicPopup', '$ionicHistory'];

  function ProductDetailCtrl($scope, user, ProductService, $state,
    $cordovaSocialSharing, $ionicPopup, $ionicHistory){

    $scope.currentProduct = ProductService.productDetail(user.$id, $state.params.pId);

    $scope.productDelete = function(productId) {
       var confirmPopup = $ionicPopup.confirm({
         title: 'Delete this product?',
         template: 'Are you sure you want to delete this product?'
       });
       confirmPopup.then(function(res) {
         if(res) {
           ProductService.productDelete(user.$id, productId).then(function(){
             $ionicHistory.goBack();
           });
         }
       });
     };

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
