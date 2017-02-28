(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['authService', '$scope', '$firebaseArray'];

  function HomeController(authService, $scope, $firebaseArray) {

  	//$scope.namesteve = '';
    var vm = this;
    vm.authService = authService;

    $scope.beername = '';
	$scope.beerBrand = '';
	$scope.beerLocation = '';
	$scope.beerAbv = '';
	$scope.beerPrice = '';

 	var config = {
        apiKey: "AIzaSyATy2w_DYnzXGwslkgilOhsJkh2Q-yfaB0",
	    authDomain: "appauth-f0e3c.firebaseapp.com",
	    databaseURL: "https://appauth-f0e3c.firebaseio.com",
	    storageBucket: "appauth-f0e3c.appspot.com",
	    messagingSenderId: "218512066700"
      };
      firebase.initializeApp(config);

  	var rootRef = firebase.database().ref();

	// Bind the goods
	$scope.beersSaved = $firebaseArray(rootRef);

	$scope.removeBeer = function (beer) {
		$scope.beersSaved.$remove(beer);
	};

	$scope.clearform = function() {
		$scope.beername = '';
		$scope.beerBrand = '';
		$scope.beerLocation = '';
		$scope.beerAbv = '';
		$scope.beerPrice = '';
	};

	$scope.addBeer = function (beername, beerBrand, beerLocation, beerAbv, beerPrice) {
		
		console.log(beername + beerBrand);
		
		if(!beername.length || !beerBrand.length) {
			console.log('caught in if');
			return;
		}
		$scope.beersSaved.$add({
			beer: beername,
			brand: beerBrand,
			location: beerLocation,
			abv: beerAbv,
			price: beerPrice
		});

		$scope.clearform();
	};


  }

}());
