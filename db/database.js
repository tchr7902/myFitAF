require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.JAWSDB_CONNECTION_STRING, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      ca: process.env.SSL_CA,
    },
  },
});

// Define ExercisePlan model
const ExercisePlan = sequelize.define('ExercisePlan', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  exercise_details: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

// Define MealPlan model
const MealPlan = sequelize.define('MealPlan', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  day: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  meal_details: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

// Function to store exercise plan
const storeExercisePlan = (userId, exercisePlan) => {
  ExercisePlan.bulkCreate(exercisePlan.map(plan => ({ user_id: userId, exercise_details: plan })))
    .then(() => console.log('Exercise plan stored for user:', userId))
    .catch(err => console.error('Error storing exercise plan:', err));
};

// Function to store meal plan
const storeMealPlan = (userId, mealPlan) => {
  const mealPlanEntries = Object.entries(mealPlan).map(([day, meals]) => ({
    user_id: userId,
    day,
    meal_details: meals,
  }));

  MealPlan.bulkCreate(mealPlanEntries)
    .then(() => console.log('Meal plan stored for user:', userId))
    .catch(err => console.error('Error storing meal plan:', err));
};