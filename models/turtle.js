module.exports = (Sequelize, sequelize) => {
	return sequelize.define('turtles', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		color: {
			type: Sequelize.STRING
		},
		weaponId: {
			type: Sequelize.INTEGER,
			references: 'weapons',
			referencesKey: 'id'
		},
		firstFavoritePizzaId: {
			type: Sequelize.INTEGER,
			references: 'pizzas',
			referencesKey: 'id'
		},
		secondFavoritePizzaId: {
			type: Sequelize.INTEGER,
			references: 'pizzas',
			referencesKey: 'id'
		}
	});
};