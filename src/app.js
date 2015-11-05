(function () {
	angular.module('getErDone', ['ui.router', 'ngAnimate'])
		.run(function($rootScope, todosService) {
			
			$rootScope.$watch(function () {
				console.log('digest run');
			});
		});
})();
//add checkbox and have it update completed value
//get data to update outside of directive

//does digest get called anytime a service method is called? 
//even if digest is called from service, how will it update in controller view if there is no watcher?
//replace with real hhttp and use httpBackend
//new todos should be added to the top of the list. 
//add drag and drop with ability to change real order.
//optimze digest when typing new todo
//set up testing and write one test.