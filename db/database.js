require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// Database connection setup using environment variables
const sequelize = new Sequelize(process.env.JAWSDB_CONNECTION_STRING);

// Function to store exercise plan
const storeExercisePlan = (userId, exercisePlan) => {
  exercisePlan.forEach(plan => {
    sequelize.query('INSERT INTO exercise_plans (user_id, exercise_details) VALUES (?, ?)', {
      replacements: [userId, JSON.stringify(plan)],
      type: Sequelize.QueryTypes.INSERT,
    }).then(result => {
      console.log('Exercise plan stored for user:', userId);
    }).catch(err => {
      console.error('Error storing exercise plan:', err);
    });
  });
};

// Function to store meal plan
const storeMealPlan = (userId, mealPlan) => {
  Object.entries(mealPlan).forEach(([day, meals]) => {
    sequelize.query('INSERT INTO meal_plans (user_id, day, meal_details) VALUES (?, ?, ?)', {
      replacements: [userId, day, JSON.stringify(meals)],
      type: Sequelize.QueryTypes.INSERT,
    }).then(result => {
      console.log('Meal plan stored for user:', userId);
    }).catch(err => {
      console.error('Error storing meal plan:', err);
    });
  });
};

sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  });

module.exports = { storeExercisePlan, storeMealPlan };