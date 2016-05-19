(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('ProductDetailCtrl', ProductDetailCtrl);

  ProductDetailCtrl.$inject = ['$scope', 'user', 'ProductService', '$state', '$ionicHistory'];

  function ProductDetailCtrl($scope, user, ProductService, $state, $ionicHistory){

    $scope.currentProduct = ProductService.productDetail(user.$id, $state.params.pId);


  };
})();
