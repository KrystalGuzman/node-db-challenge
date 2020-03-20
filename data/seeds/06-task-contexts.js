exports.seed = function(knex) {

  return knex("tasks-contexts").insert([

      { "task_id": 1, "context_id": 2},
      { "task_id": 2, "context_id": 2},
      { "task_id": 2, "context_id": 3},
      { "task_id": 3, "context_id": 3}
      
  ]);
};