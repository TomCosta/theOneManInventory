(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('ProductUpdateCtrl', ProductUpdateCtrl);

  ProductUpdateCtrl.$inject = ['$scope', '$state', 'user', 'ProductService', '$ionicHistory'];

  function ProductUpdateCtrl($scope, $state, user, ProductService, $ionicHistory){
    var product = $state.params.pId;

    $scope.currentProduct = ProductService.productDetail(user.teamId, productId);

    $scope.productUpdate = function(productUpdateForm){
      if (productUpdateForm.$valid) {
        $scope.currentProduct.$save().then(function(){
          $ionicHistory.goBack();
        });
      };
    };

  };
})();
