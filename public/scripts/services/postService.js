angular.module('app').factory('PostFactory', function ($firebaseObject, $firebaseRef, $firebaseArray) {
    
    _getPost = function (key) {
        const ref = firebase.database().ref('posts').child(key);
        return $firebaseObject(ref);
    };

    _getAllPosts = function () {
        return $firebaseArray($firebaseRef.posts);
    };

    return {
        getPost: _getPost,
        getAllPosts: _getAllPosts,
    };
});