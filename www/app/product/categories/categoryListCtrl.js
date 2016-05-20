(function(){
  'use strict';

  angular
      .module('app.product')
      .controller('CategoryListCtrl', CategoryListCtrl);

  CategoryListCtrl.$inject = ['$scope', 'user', 'categoryList', '$state'];

  function CategoryListCtrl($scope, user, categoryList, $state){

    $scope.categoryList = categoryList;


  };
})();
