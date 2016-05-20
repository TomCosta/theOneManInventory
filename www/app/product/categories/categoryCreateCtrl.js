(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('CategoryCreateCtrl', CategoryCreateCtrl);

  CategoryCreateCtrl.$inject = ['$scope', 'user', 'ProductService', '$state', '$ionicHistory'];

  function CategoryCreateCtrl($scope, user, ProductService, $state, $ionicHistory){
    $scope.data = {};
    $scope.data.description = null;



    $scope.categoryCreate = function(categoryCreateForm){
      if (categoryCreateForm.$valid) {
        ProductService.categoryCreate(user.$id, $scope.data.name, $scope.data.description);
      };
    };

  };
})();
