angular.module('app').controller('editController', function ($scope, PostFactory, $route, $routeParams, $location) {


    $scope.post = PostFactory.getPost($routeParams.id);

    $scope.updatePost = function (newPost) {
       var post = PostFactory.getPost(newPost.$id);
       post.$loaded().then(function () {
        post.title = newPost.title;
        post.text = newPost.text;
        post.$save().then(function () {
            $location.path('/')
        });
       });
       
        $scope.post = {};
    }

});