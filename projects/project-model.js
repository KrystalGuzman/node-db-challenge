const db = require('../data/db-config');

module.exports = {
	getProjects,
	addProject,
	getProjectByID,

	getResources,
	addResource,
	getResourceByID,

	getTasks,
	addTask,
	getTaskByID,

	getTasksByProjectID,
	getResourcesByProjectID
};

// retrieve a list of all projects
function getProjects() {
	return db('projects');
}
// add a project to the db
function addProject(project) {
	return db('projects').insert(project).then((ids) => {
		const [ id ] = ids;
		return getProjectByID(id);
	});
}
// get a project by ID
function getProjectByID(id) {
	return db('projects').first().where({ id });
}

// retrieve a list of all resources
function getResources() {
	return db('resources');
}
// add a resource to the db
function addResource(resource) {
	return db('resources').insert(resource).then((ids) => {
		const [ id ] = ids;
		return getResourceByID(id);
	});
}
// get a resource by ID
function getResourceByID(id) {
	return db('resources').first().where({ id });
}

// retrieve a list of all tasks
function getTasks() {
	return db('tasks')
		.join('projects', 'project_id', '=', 'projects.id')
		.select(
			'tasks.id as task_id',
			'tasks.description as task_description',
			'tasks.notes as task_notes',
			'tasks.completed as task_completed',
			'projects.id as project_id',
			'projects.name as project_name',
			'projects.description as project_description'
		)
		.orderBy('project_id');
}
// add a task to the db
function addTask(task) {
	return db('tasks').insert(task).then((ids) => {
		const [ id ] = ids;
		return getTaskByID(id);
	});
}
// get a task by ID
function getTaskByID(id) {
	return db('tasks').first().where({ id });
}

// get all tasks with the same project ID
function getTasksByProjectID(project_id) {
	return db('tasks').where({ project_id });
}
// get all resources with the same project ID
function getResourcesByProjectID(project_id) {
	return db('resources').where({ project_id });
}
