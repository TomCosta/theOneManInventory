(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('ProductUpdateCtrl', ProductUpdateCtrl);

  ProductUpdateCtrl.$inject = ['$scope', '$state', 'user', 'ProductService', '$ionicHistory'];

  function ProductUpdateCtrl($scope, $state, user, ProductService, $ionicHistory){
    var productId = $state.params.pId;

    $scope.currentProduct = ProductService.productDetail(user.$id, productId);

    $scope.productUpdate = function(productUpdateForm){
      if (productUpdateForm.$valid) {
        $scope.currentProduct.$save().then(function(){
          $ionicHistory.goBack();
        });
      };
    };

  };
})();
