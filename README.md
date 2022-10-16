# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm install react-scripts`
`npm install package.json`
`npm start`

Then the front-end of the project will run on [http://localhost:3000](http://localhost:3000).
You can view it in your browser.

Then in the directory "backend", you can run:
`npm install package.json`
`npm run start`
Then the back-end of the project will run on [http://localhost:4000](http://localhost:4000).

I use the local mongoDB database, which is run on [mongodb://localhost:27017](mongodb://localhost:27017).


## Walkthrough

User input validation
![image 1](./images/1.png)

Register a math course
![image 2](./images/2.png)

The backend will check the course capacity.
If there are seats to register, we update the number of registered people. (MongoDB database: course_register_system.courses)
We also register the people in the course. (MongoDB database: course_register_system.registration)
The registered/capacity is now updated to 14/100. 
There are 14 people registered to the math course.
![image 3](./images/3.png)

Another students want to register the math course.
![image 4](./images/4.png)

The registered/capacity is now updated from 14/100 to 15/100.
![image 5](./images/5.png)

Some student want to register to the art course.
![image 6](./images/6.png)

The art course is at its capacity. We cannot register the course for them.
![image 7](./images/7.png)

The backend API, shows the mongoDB database course_register_system.courses
![image 8](./images/8.png)

The backend API, shows the mongoDB database course_register_system.registration
![image 9](./images/9.png)

MongoDB Compass local databases
![image 9](./images/10.png)
![image 9](./images/11.png)