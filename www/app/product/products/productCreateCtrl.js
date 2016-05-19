(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('ProductCreateCtrl', ProductCreateCtrl);

  ProductCreateCtrl.$inject = ['$scope', 'user', 'ProductService', '$state'];

  function ProductCreateCtrl($scope, user, ProductService, $state){
    $scope.data = {};
    $scope.data.description = null;
    var categoryId = $state.params.cId;


    $scope.productCreate = function(productCreateForm){
      if (productCreateForm.$valid) {
        ProductService.productCreate(user.$id, $scope.data.name, $scope.data.description,
          $scope.data.price, $scope.data.units, categoryId);
      };
    };

  };
})();
