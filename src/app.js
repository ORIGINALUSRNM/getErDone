(function () {
	angular.module('getErDone', ['ui.router'])
		.run(function($rootScope, todosService) {
			$rootScope.data = {};

			todosService.getAll().then(function(data) {
				$rootScope.data.todos = data;
			});
		});
})();
//get data to update outside of directive