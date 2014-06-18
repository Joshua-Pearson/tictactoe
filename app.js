var app = angular.module("TicApp", []);

app.controller("TicCtrl", ["$scope", 
  function($scope) {
    
    $scope.squares = ["","","","","","","","",""];
    $scope.isPlayed = false;
    $scope.winner = false;
    $scope.draw = false;
    
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

    $scope.move = function() {
      if (turnCount < 10 && this.isPlayed == false) {
        if (turnCount % 2 !== 0) {
          $scope.currentPlayer = playerOne;
        } else {
          $scope.currentPlayer = playerTwo;
        }
        turnCount ++;
        this.isPlayed = true;
        this.square = $scope.currentPlayer.value;
        $scope.currentPlayer.squares.push(this.$index);
        checkForWin();
      } else {
        console.log("Illegal Move");
      }
    };

    var checkForWin = function() {
      for (var i = 0; i < winningArrays.length; i++) {
        if (_.intersection($scope.currentPlayer.squares, winningArrays[i]).length === 3) {
          $scope.winner = true;
        }
      }
      if (turnCount === 10 && $scope.winner == false) {
        $scope.draw = true;
      }
    };
  }
]);