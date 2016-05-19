(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('CategoryDetailCtrl', CategoryDetailCtrl);

  CategoryDetailCtrl.$inject = ['$scope', 'user', 'ProductService', '$state', '$ionicHistory'];

  function CategoryDetailCtrl($scope, user, ProductService, $state, $ionicHistory){

    var currentCategory = ProductService.categoryDetail(user.$id, $state.params.cId).$loaded()
      .then(function(currentCategory){
      $scope.currentCategory = currentCategory;
      $scope.productList = ProductService.productList(user.$id, currentCategory.$id);
    });


  };
})();
