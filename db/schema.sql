DROP DATABASE IF EXISTS ivbrgbe7yof6ra9w;
CREATE DATABASE ivbrgbe7yof6ra9w;

USE ivbrgbe7yof6ra9w;

CREATE TABLE user_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    dietPlan VARCHAR(64) NOT NULL,
    exercisePlan VARCHAR(64) NOT NULL
);


CREATE TABLE exercise_plans (
    plan_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    exercise_details TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_table(id)
);

CREATE TABLE diet_plans (
    plan_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    diet_details TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_table(id)
);