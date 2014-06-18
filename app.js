var app = angular.module("TicApp", []);

app.controller("TicCtrl", ["$scope", 
  function($scope) {
    $scope.squares = ["","","","","","","","",""];
    var winningArrays = [
      [0,1,2], [0,3,6], [0,4,8],
      [1,4,7], [2,5,8], [3,4,5],
      [6,7,8], [2,4,6]
    ];

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
    $scope.winner = false;

    $scope.move = function() {
      if (turnCount < 10 && this.isPlayed == false && turnCount % 2 !== 0) {
        turnCount ++;
        this.isPlayed = true;
        this.square = $scope.currentPlayer.value;
        $scope.currentPlayer.squares.push(this.$index);
        checkForWin();
        $scope.currentPlayer = playerTwo;
      } else if (turnCount < 9 && this.isPlayed == false && turnCount % 2 === 0) {
        turnCount ++;
        this.isPlayed = true;
        this.square = $scope.currentPlayer.value;
        $scope.currentPlayer.squares.push(this.$index);
        checkForWin();
        $scope.currentPlayer = playerOne;
      } else {
        console.log("Illegal Move");
        console.log(this);
        console.log(this.isPlayed);
      }
    };

    var checkForWin = function() {
      console.log($scope.currentPlayer.squares)
      for (var i = 0; i < winningArrays.length; i++) {
        if (_.intersection($scope.currentPlayer.squares, winningArrays[i]).length === 3) {
          $scope.winner = true;
          console.log($scope.currentPlayer);
          console.log($scope.squares)
          this.isPlayed = true;
        }
      }
    };
  }
]);