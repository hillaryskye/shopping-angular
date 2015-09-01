app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'ShoppingController'
      })
      .when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'CheckoutController'
      })
      .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'ShoppingController'
      })
      // // use the HTML5 History API
        $locationProvider.html5Mode(true);
});
