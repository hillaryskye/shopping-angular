app.controller("ShoppingController", ["$scope", "ShoppingService", function($scope, ShoppingService) {
  console.log('second from controllers')
  $scope.checkoutCounter = 0;
  $scope.quantity = '1';
  $scope.bag = 0;
  $scope.teaData = ShoppingService.teaList;
  console.log('three')

  $scope.addTea = function(tea, quantity) {
    console.log('4th from controllers')

    console.log('quantity', quantity)
    $scope.checkoutCounter++
    console.log('counter', $scope.checkoutCounter)
    tea.quantity = quantity
    ShoppingService.addTea(tea)
  }

}]);


  app.controller("CheckoutController", ["$scope", "ShoppingService", function($scope, ShoppingService) {
    console.log('from checkout controller')
    $scope.cartData = ShoppingService.cart
    console.log('service', ShoppingService.cart)
    console.log('cart', $scope.cartData)
    $scope.cartData.total = ShoppingService.cart.price
    console.log('price', $scope.cartData.price)

    // $scope.checkout = function(teaList, item) {
    //   console.log('checkout')
    //   ShoppingService.checkout(item)
    //   }

      $scope.removeTea = function(tea) {
        console.log('remove')
        ShoppingService.removeTea(tea)
      }

    $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.cartData.length; i++){
        var item = $scope.cartData[i];
        total += (item.price * item.quantity);
        console.log('total', total)
        }
        return total;
      }
    }]);



    // $http.post('shopping.json', newTea)
    //   .then(function(response) {
    //       $scope.results = response;
    //       // console.log('results', $scope.results);
    //   }, function(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   console.log('error in the post request');
    // });
