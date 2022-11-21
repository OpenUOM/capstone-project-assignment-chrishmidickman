exports.seed = function(knex) {
  return knex('student').del()
    .then(function () {
      return knex('student').insert([{"age": 10, "hometown": "Colombo", "id": 20001, "name": "Supun Mihiranga"},
                                     {"age": 9, "hometown": "Galle", "id": 20002, "name": "Sandun Perera"},
                                     {"age": 10, "hometown": "Kandy", "id": 20003, "name": "Isuri De Silva"}
        
      ]);
    });
};
