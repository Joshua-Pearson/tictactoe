var app = angular.module("TicApp", []);

app.controller("TicCtrl", ["$scope", 
  function($scope) {

    $scope.squares = ["-","-","-","-","-","-","-","-","-"];

    function Player(playerNumber, value) {
      this.playerNumber = playerNumber;
      this.value = value;
    };
    var playerOne = new Player("One", "X");
    var playerTwo = new Player("Two", "O");
    playerOne.squares = [];
    playerTwo.squares = [];

    var turnCount = 1;
    $scope.currentPlayer = playerOne;
    $scope.isPlayed = false;

    $scope.move = function() {
      if (turnCount < 10 && this.isPlayed == false && turnCount % 2 !== 0) {
        turnCount ++;
        console.log(this.$index)
        this.isPlayed = true;
        this.square = $scope.currentPlayer.value;
        playerOne.squares.push(this.$index);
        $scope.currentPlayer = playerTwo;
        console.log($scope.currentPlayer);
      } else if (turnCount < 9 && this.isPlayed == false && turnCount % 2 === 0) {
        turnCount ++;
        this.isPlayed = true;
        console.log(this.$index)
        this.square = $scope.currentPlayer.value;
        playerTwo.squares.push(this.$index);
        console.log(playerTwo.squares.indexOf)
        $scope.currentPlayer = playerOne;
      } else {
        console.log("Illegal Move");
      }
      checkForWin();
    };

    var checkForWin = function() {
      // if (playerOne.squares
    };

    $scope.newGame = function() {
      playerOne.squares = [];
      playerTwo.squares = [];
      turnCount = 1;
      $scope.currentPlayer = playerOne;
      $scope.isPlayed = false;  
      $scope.squares = ["-","-","-","-","-","-","-","-","-"];    
    };
  }
]);