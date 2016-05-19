(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('CategoryListCtrl', CategoryListCtrl);

  CategoryListCtrl.$inject = ['$scope', 'user', 'ProductService', '$state'];

  function CategoryListCtrl($scope, user, ProductService, $state){

    $scope.categoryList = ProductService.categoryList(user.$id);
    

  };
})();