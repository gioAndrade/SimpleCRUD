angular.module('app').controller('postController', function ($scope, PostFactory,$firebaseAuth, $route, $location) {

    const auth = $firebaseAuth();

    auth.$onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
        } else {
            console.log("Signed out");
        }
    });

    $scope.posts = PostFactory.getAllPosts();
    ar = PostFactory.getAllPosts();
    console.log($scope.posts);

    ar.$loaded().then(function () {
        //console.log(ar.length);
    })

    $scope.createPost = function (post) {
        PostFactory.getAllPosts().$add(post);
        $scope.post = {};
    };

    $scope.deletePost = function (post) {
        PostFactory.getPost(post.$id).$remove();
    }

    $scope.signOut = function () {
        user = auth.$getAuth();
        console.log(user);
        auth.$signOut();
        $location.path('/login');

    }
});