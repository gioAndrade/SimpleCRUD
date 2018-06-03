var config = {
  apiKey: "AIzaSyBscoFT26KLbJ5iONNwCakX_byI1zKOWOM",
  authDomain: "tlist-new.firebaseapp.com",
  databaseURL: "https://tlist-new.firebaseio.com",
  projectId: "tlist-new",
  storageBucket: "tlist-new.appspot.com",
  messagingSenderId: "126210836757"
};

firebase.initializeApp(config);

var app = angular.module('app', ['ngRoute', 'firebase']);

app.run(["$rootScope", "$location", function ($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function (event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

app.config(function ($firebaseRefProvider, $routeProvider) {
  $firebaseRefProvider.registerUrl({
    default: config.databaseURL,
    posts: `${config.databaseURL}/posts`
  });

  $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html',
      controller: 'postController',
      resolve: {
        "currentAuth": ["Auth", function (Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .when('/login', { templateUrl: '../partials/login.html', controller: 'loginController' })
    .when('/post/:id', {
      templateUrl: '../partials/edit-page.html',
      controller: 'editController',
      resolve: {
        "currentAuth": ["Auth", function (Auth) {
          return Auth.$requireSignIn();
        }]
      }
    });

});

app.factory("Auth", ["$firebaseAuth",
  function ($firebaseAuth) {
    return $firebaseAuth();
  }
]);