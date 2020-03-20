const express = require('express');
const projects = require('./project-model');
const router = express.Router();

//server running
router.get('/', (req, res) => res.status(200).json({ message: 'server running' }));

// GET a list of projects
router.get('/projects', (req, res) => {
	projects
		.getProjects()
		.then((projects) => res.status(200).json(projects))
		.catch((error) => res.status(500).json({ message: 'Could not get projects from server.' }));
});

// GET a project by ID
router.get('/projects/:id', (req, res) => {
	projects
		.getProjectByID(req.params.id)
		.then((projects) => {
			let booleanText = projects.completed ? 'true' : 'false';
			let projectDataFormatted = { ...projects, completed: booleanText };
			res.status(200).json(projectDataFormatted);
		})
		.catch((error) =>
			res.status(500).json({ message: 'Could not get project #' + req.params.id + ' from server.' })
		);
});

// GET a list of resources
router.get('/resources', (req, res) => {
	projects
		.getResources()
		.then((resources) => res.status(200).json(resources))
		.catch((error) => res.status(500).json({ message: 'Could not get resources from server.' }));
});

// GET a resource by ID
router.get('/resources/:id', (req, res) => {
	projects
		.getResourceByID(req.params.id)
		.then((resource) => res.status(200).json(resource))
		.catch((error) =>
			res.status(500).json({ message: 'Could not get resource #' + req.params.id + ' from server.' })
		);
});

// GET a list of tasks
router.get('/tasks', (req, res) => {
	projects
		.getTasks()
		.then((tasks) => res.status(200).json(tasks))
		.catch((error) => res.status(500).json({ message: 'Could not get tasks from server.' }));
});

// GET a task by ID
router.get('/tasks/:id', (req, res) => {
	projects
		.getTaskByID(req.params.id)
		.then((task) => {
			let booleanText = task.completed ? 'true' : 'false';
			let taskDataFormatted = { ...task, completed: booleanText };
			res.status(200).json(taskDataFormatted);
		})
		.catch((error) => res.status(500).json({ message: 'Could not get task #' + req.params.id + ' from server.' }));
});

// POST a project to the database
router.post('/projects', (req, res) => {
	if (!req.body || !req.body.name) {
		res.status(400).json({ message: 'Project name is required.' });
	} else {
		projects
			.addProject(req.body)
			.then((project) => res.status(200).json(project))
			.catch((error) => res.status(500).json({ message: 'Could not add project to server.' }));
	}
});

// POST a resource to the database
router.post('/resources', (req, res) => {
	if (!req.body || !req.body.name) {
		res.status(400).json({ message: 'Resource name is required.' });
	} else {
		projects
			.addResource(req.body)
			.then((resource) => res.status(200).json(resource))
			.catch((error) => res.status(500).json({ message: 'Could not add resource to server.' }));
	}
});

// POST a task to the database
router.post('/tasks', (req, res) => {
	if (!req.body || !req.body.description) {
		res.status(400).json({ message: 'Task description is required.' });
	} else {
		projects
			.addTask(req.body)
			.then((task) => res.status(200).json(task))
			.catch((error) => res.status(500).json({ message: 'Could not add task to server.' }));
	}
});

// GET a list of contexts
router.get("/contexts", (req, res) => {
    projects.getContexts()
        .then(contexts => {
            res.status(200).json(contexts);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get contexts from server."})
        })
})

// POST a context to the database
router.post("/contexts", (req, res) => {
    projects.addContext(req.body)
        .then(context => {
            res.status(200).json(context);
        })
        .catch(error => {
            res.status(500).json({message: "Could not add context to server."})
        })
})

// GET a Context by ID
router.get('/contexts/:id', (req, res) => {
	projects
		.getContextByID(req.params.id)
		.then((context) => res.status(200).json(context))
		.catch((error) =>
			res.status(500).json({ message: 'Could not get context #' + req.params.id + ' from server.' })
		);
});

module.exports = router;
