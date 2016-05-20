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
          if (window.AdMob) AdMob.showInterstitial();
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
                               .child(categoryId)).$remove().then(function(){
                                 $ionicHistory.goBack();
                               });
      },

      productCreate: function(userId, name, description, price, units, categoryId){
        var productList = $firebaseArray($firebaseRef.default.child("soloPreneur").child(userId)
                                          .child("productList"));

        return productList.$add({
          name: name,
          description: description,
          price: price,
          units: units,
          categoryId: categoryId,
        }).then(function(){
          if (window.AdMob) AdMob.showInterstitial();
          $ionicHistory.goBack();
        });
      },

      productList: function(userId, categoryId){
        return $firebaseArray($firebaseRef.default.child("soloPreneur").child(userId).child("productList")
          .orderByChild("categoryId").equalTo(categoryId));
      },

      productDetail: function(userId, productId){
        return $firebaseObject($firebaseRef.default.child("soloPreneur").child(userId).child("productList")
                               .child(productId));
      },

      productDelete: function(userId, productId){
        return $firebaseObject($firebaseRef.default.child("soloPreneur").child(userId).child("productList")
                               .child(productId)).$remove();
      },

    }

  }
})();
