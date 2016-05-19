(function(){
  'use strict';

  angular
      .module('app.product')
      .factory('ProductService', ProductService);

  function ProductService($firebaseObject, $firebaseArray, $state, $firebaseRef, $ionicHistory){

    return {
      categoryCreate: function(userId, name, description){
        var categoryList = $firebaseArray($firebaseRef.default.child("soloPreneur").child(userId)
                                          .child("categoryList"));

        return categoryList.$add({
          name: name,
          description: description
        }).then(function(){
          $ionicHistory.goBack();
        });
      },

      categoryList: function(userId){
        return $firebaseArray($firebaseRef.default.child("soloPreneur").child(userId).child("categoryList"));
      },

      categoryDetail: function(userId, categoryId){
        return $firebaseObject($firebaseRef.default.child("soloPreneur").child(userId).child("categoryList")
                               .child(categoryId));
      },

      categoryDelete: function(userId, categoryId){
        return $firebaseObject($firebaseRef.default.child("soloPreneur").child(userId).child("categoryList")
                               .child(categoryId)).$remove();        
      },
      
    }
      
  }
})();
