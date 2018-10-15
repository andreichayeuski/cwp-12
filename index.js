const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config);

(async () => {
	await db.sequelize.sync({force: true});
	await require('./initTables/pizzas')(db);
	await require('./initTables/weapons')(db);
	await require('./initTables/turtles')(db);

	console.log("GET TURTLES");
	(await db.turtles.findAll()).forEach((v) => {
		console.log(v.name);
	});

})();