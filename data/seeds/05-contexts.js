exports.seed = function(knex) {

  return knex("contexts").insert([

      { name: "bedroom"},
      { name: "bathroom"},
      { name: "kitchen"},
      { name: "dining room"}

  ]);
};