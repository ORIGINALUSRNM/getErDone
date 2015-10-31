(function() {
	angular.module('getErDone')
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('todoList', {
					url: "/",
					template: "<jsh-todo-list></jsh-todo-list>"
				});

		});
})();