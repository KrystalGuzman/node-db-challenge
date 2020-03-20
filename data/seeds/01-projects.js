exports.seed = function(knex) {
	return knex('projects').insert([
		{ name: 'brush teeth', description: 'Teaching how to brush teeth' },
		{ name: 'wash hands', description: 'Teaching how to wash hands' },
		{ name: 'make sandwich', description: 'Teaching how to make a sandwich' }
	]);
};
