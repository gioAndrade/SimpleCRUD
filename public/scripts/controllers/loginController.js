angular.module('app').controller('loginController', function ($scope, $firebaseAuth, $location, $route) {

    const auth = $firebaseAuth(); 

    $scope.signIn = function (login) {
        auth.$signInWithEmailAndPassword(login.email, login.pass)
            .then(function (firebaseUser) {
                $location.path('/');
            }).catch(function (error) {
                console.log(error);
                $scope.loginError = true;
            });
    };

    $scope.addUser = function (user) {
        auth.$createUserWithEmailAndPassword(user.email, user.pass)
            .then(function (firebaseUser) {
                console.log( " created successfully!");
                $location.path('/');
            }).catch(function (error) {
                console.error("Error: ", error);
            });
    }
});