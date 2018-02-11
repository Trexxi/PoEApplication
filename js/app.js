var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl : "pages/mainpage.html"

        })
        .when("/gallery",{
            templateUrl : "pages/gallery.html"

        })
        .when("/characters",{
            templateUrl : "pages/characters.html"

        })
    .when("/newc",{
        templateUrl : "pages/newcharacterpage.html"

    });
});
