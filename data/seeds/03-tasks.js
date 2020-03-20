exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			description: 'put toothpaste on toothbrush',
			notes: 'uncap toothpaste',
			completed: 1,
			project_id: 1
		},
		{
			description: 'scrub teeth with toothbrush',
			notes: 'spit toothpaste out',
			completed: 1,
			project_id: 1
		},
		{
			description: 'rinse mouth with water',
			notes: 'gargle and spit in sink',
			completed: 0,
			project_id: 1
		},

		{
			description: 'turn on faucet',
			notes: 'let water run',
			completed: 0,
			project_id: 2
		},
		{
			description: 'get soap',
			notes: 'put in hands',
			completed: 0,
			project_id: 2
		},
		{
			description: 'scrub hands',
			notes: 'turn off water',
			completed: 0,
			project_id: 2
		},
		{
			description: 'lay out bread',
			notes: 'open and close bag of bread',
			completed: 0,
			project_id: 3
		},
		{
			description: 'put ham on top of bread',
			notes: 'open and close bag of ham',
			completed: 0,
			project_id: 3
		},
		{
			description: 'close sandwich',
			notes: 'enjoy sandwich',
			completed: 0,
			project_id: 3
		}
	]);
};
