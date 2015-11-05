(function () {
	angular.module('getErDone')
		.directive('jshTodoList', function () {
			return {
				restrict: 'EA',
				templateUrl: 'Todo/jshTodoList.tpl.html',
				controllerAs: 'vm',
				controller: function (todosService) {
					var vm = this;

					vm.todo = '';
					vm.data = {};
					vm.addTodo = addTodo;
					vm.completed = completed;
					vm.removeTodo = removeTodo;
					vm.toggleComplete = toggleComplete;
					
					todosService.getTodoData().then(todoGetAllSuccess, todoGetError);

					function addTodo() {
						if(vm.todo.length === 0){ 
							return false; 
						}else{
							var newTodo = {
								completed: false,
								text: vm.todo
							};

							vm.todo = '';
							todosService.addTodo(newTodo);
						}
						
					}

					function completed() {
						return todosService.getCompleted();
					}

					function removeTodo(index) {
						todosService.removeTodo(index);
					}

					function todoGetAllSuccess(data) {
						vm.data = data;
					}

					function todoGetError(error) {

					}

					function toggleComplete(index) {
						todosService.toggleComplete(index);
					}

				},
				link: function () {
					
				}
			};
		});
})();