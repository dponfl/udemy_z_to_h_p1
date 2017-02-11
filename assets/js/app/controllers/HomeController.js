"use strict";

(function () {
  angular.module('Project')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'Post'];
  function HomeController($scope, Post) {
    $scope.posts = Post.query();

    $scope.post = '';
    
    $scope.sendPost =function (post) {
      let thisPost = new Post ({post: post});
      
      thisPost.$save().then(function (newPost) {
        $scope.posts.push(newPost);
        $scope.post = '';
      })
    }
    
    $scope.removePost = function (post, $index) {
      if (!confirm('Are you sure?')) return;
      post.$remove().then(function () {
        $scope.posts.splice($index, 1);
      })
    }
  }
})();