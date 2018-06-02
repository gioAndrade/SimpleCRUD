angular.module('app').controller('postController', function ($scope, PostFactory) {


    $scope.posts = PostFactory.getAllPosts();

    $scope.createPost = function (post) {
        PostFactory.getAllPosts().$add(post);
        $scope.post = {};
    };

    $scope.deletePost = function (post) {
        PostFactory.getPost(post.$id).$remove();   
    }
});