exports.seed = function(knex) {
	return knex('project-resources').insert([
		//brush teeth
		{ project_id: 1, resource_id: 1 },
		{ project_id: 1, resource_id: 2 },
		{ project_id: 1, resource_id: 3 },
		//wash hands
		{ project_id: 2, resource_id: 3 },
		{ project_id: 2, resource_id: 4 },
		//make sandwich
		{ project_id: 3, resource_id: 5 },
		{ project_id: 3, resource_id: 6 }
	]);
};
