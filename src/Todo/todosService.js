(function () {
	angular.module('getErDone')
		.service('todosService', function ($q, $window) {
			var data = {
				completed: 0,
				todos: []
			};

			var completed;
			var localStorageKey = "getErDone";

			this.addTodo = function (todo) {
				var tempId;

				if(data.todos.length > 0){
					tempId = data.todos[data.todos.length - 1].id + 1
				}else{
					tempId = 1;
				}

				todo.id = tempId;
				data.todos.push(todo);
				updateCompleted();
				//this.updateLocalStorage();
			};

			this.getCompleted = function() {
				return completed;
			};

			this.getTodoData = function () {
				var deferred = $q.defer();
				// var ls = $window.localStorage;
				// var lsData;

				// if(data.todos){
				// 	deferred.resolve(todos);
				// }else{
				// 	if(ls){
				// 	lsData = ls.getItem(localStorageKey);
				// 	if(lsData){
				// 		todos = JSON.parse(lsData);
				// 		updateCompleted();
				// 	}else{
				// 		todos = [];
				// 		this.updateLocalStorage();
				// 		this.completed = 0;
				// 		}
				// 	}else{
				// 		todos = [];
				// 		this.completed = 0;
				// 	}

				// 	deferred.resolve(todos);
				// }

				setTimeout(function () {
					deferred.resolve(data);
				}, 2000);

				
				return deferred.promise;
			};

			this.removeTodo = function (todoIndex) {
				data.todos.splice(todoIndex, 1);
				updateCompleted();
				//this.updateLocalStorage();			
			};

			this.toggleComplete = function(index) {
				updateCompleted();
				//this.updateLocalStorage();
			};

			this.updateLocalStorage = function() {
				var data = JSON.stringify(todos);
				$window.localStorage.setItem(localStorageKey, data);
			};

			function updateCompleted() {
				var tot = 0;
				data.todos.forEach(function(todo) {
					if(todo.completed){ tot++; }
				});
				data.completed = tot;
			}

		});
})();