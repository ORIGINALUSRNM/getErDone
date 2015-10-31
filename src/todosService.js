(function () {
	angular.module('getErDone')
		.service('todosService', function ($q, $window) {
			var todos;
			var localStorageKey = "getErDone";

			this.addTodo = function (todo) {
				var tempId;

				if(todos.length > 0){
					tempId = todos[todos.length - 1].id + 1
				}else{
					tempId = 1;
				}

				todo.id = tempId;
				todos.push(todo);
				this.updateLocalStorage();
			};

			this.getAll = function () {
				var deferred = $q.defer();
				var ls = $window.localStorage;
				var lsData;

				if(ls){
					lsData = ls.getItem(localStorageKey);
					if(lsData){
						todos = JSON.parse(lsData);
					}else{
						todos = [];
						this.updateLocalStorage();
					}
				}else{
					todos = [];
				}

				deferred.resolve(todos);

				return deferred.promise;
			};

			this.removeTodo = function (todoIndex) {
				todos.splice(todoIndex, 1);
				this.updateLocalStorage();			};

			this.updateLocalStorage = function() {
				var data = JSON.stringify(todos);
				$window.localStorage.setItem(localStorageKey, data);
			};

		});
})();