angular.module('app').controller('editController', function ($scope, PostFactory, $route, $routeParams, $location, $firebaseAuth) {

    const auth = $firebaseAuth();

    auth.$onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
        } else {
            console.log("Signed out");
        }
    });

    $scope.post = PostFactory.getPost($routeParams.id);

    $scope.updatePost = function (newPost) {
       var post = PostFactory.getPost(newPost.$id);
       post.$loaded().then(function () {
        post.name = newPost.name;
        post.cpf = newPost.cpf;
        post.$save().then(function () {
            $location.path('/')
        });
       });
       
        $scope.post = {};
    }

});