describe('todoService', function () {

	var todoService;

	beforeEach(module('getErDone'));
	beforeEach(function() {

		inject(function($injector) {
			todoService = $injector.get('todosService');
		});

	});

	it('it should be defined', function() {
		expect(todoService).toBeDefined();
	});

	describe('getTodoData', function() {

		it('should return todo data', function() {
			var todoData = todoService.getTodoData();
			expect(todoData.todos).toBeDefined();
		});

	});

});