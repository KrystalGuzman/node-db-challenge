exports.seed = function(knex) {
	return knex('resources').insert([
		{ name: 'toothbrush' },
		{ name: 'toothpaste' },
		{ name: 'sink', description: 'Vessel for water' },
		{ name: 'soap' },
		{ name: 'ham', description: 'Sandwich meat ingredient' },
		{ name: 'bread', description: 'Sandwich ingredient' }
	]);
};
