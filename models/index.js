const User = require('./User');
const Exercise = require('./exercise'); // Represents exercise_plans
const Nutrition = require('./Nutrition'); // Represents diet_plans

// Define model associations here
User.hasMany(Exercise, { foreignKey: 'userId', onDelete: 'CASCADE' });
Exercise.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Nutrition, { foreignKey: 'userId', onDelete: 'CASCADE' });
Nutrition.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  User,
  Exercise,
  Nutrition
};