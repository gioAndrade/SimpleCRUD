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

  app.config(function ($firebaseRefProvider, $routeProvider) {
      $firebaseRefProvider.registerUrl({
       default: config.databaseURL,
        posts: `${config.databaseURL}/posts`
      });

      $routeProvider
        .when('/', { templateUrl:'../partials/post.html', controller:'postController'})
        .when('/post/:id', { templateUrl:'../partials/edit-page.html', controller:'editController'});

});