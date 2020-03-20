exports.up = function(knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments();
			tbl.string('name', 50).notNullable();
			tbl.string('description', 255);
			tbl.boolean('completed').notNullable().defaultTo(false);
		})
		.createTable('resources', (tbl) => {
			tbl.increments();
			tbl.string('name', 50).notNullable().unique();
			tbl.string('description', 255);
		})
		.createTable('tasks', (tbl) => {
			tbl.increments();
			tbl.string('description', 50).notNullable();
			tbl.string('notes', 255);
			tbl.boolean('completed').notNullable().defaultTo(false);
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		})
		.createTable('project-resources', (tbl) => {
			tbl.primary([ 'project_id', 'resource_id' ]);
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('resources')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
        })
        .createTable("contexts", table => {
            table.increments();
            table.string("name", 64)
        })
        .createTable("tasks-contexts", table => {
            table.increments();
            table.integer("task_id")
                .unsigned()
                .references("id")
                .inTable("tasks")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
            table.integer("context_id")
                .unsigned()
                .references("id")
                .inTable("contexts")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks-contexts')
        .dropTableIfExists('contexts')
		.dropTableIfExists('project-resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects');
};
