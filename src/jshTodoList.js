(function () {
	angular.module('getErDone')
		.directive('jshTodoList', function () {
			return {
				restrict: 'EA',
				templateUrl: 'jshTodoList.tpl.html',
				controllerAs: 'vm',
				controller: function (todosService) {
					var vm = this;

					vm.todo = '';
					vm.addTodo = addTodo;
					vm.removeTodo = removeTodo;
					
					todosService.getAll().then(todoGetAllSuccess, todoGetError);

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

					function removeTodo(index) {
						todosService.removeTodo(index);
					}

					function todoGetAllSuccess(data) {
						vm.todos = data;
					}

					function todoGetError(error) {

					}
				},
				link: function () {
					
				}
			};
		});
})();