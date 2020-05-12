app.controller('MainController', ['$scope', function ($scope) {
            $scope.todo = {
				list : ["Clean my room", "Go to store", "Study for interview"];
			}
			$scope.books = {
				list : [];
			}
            $scope.addItem = function (itemList, item) {
                itemList.push(item);
            }
        }
    ])
