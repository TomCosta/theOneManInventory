(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('CategoryUpdateCtrl', CategoryUpdateCtrl);

  CategoryUpdateCtrl.$inject = ['$scope', '$state', 'user', 'ProductService', '$ionicHistory'];

  function CategoryUpdateCtrl($scope, $state, user, ProductService, $ionicHistory){
    var categoryId = $state.params.cId;

    $scope.currentCategory = ProductService.categoryDetail(user.$id, categoryId);

    $scope.categoryUpdate = function(categoryUpdateForm){
      if (categoryUpdateForm.$valid) {
        $scope.currentCategory.$save().then(function(){
          $ionicHistory.goBack();
        });
      };
    };

  };
})();
