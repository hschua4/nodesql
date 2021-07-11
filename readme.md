# Submission for Backend Assessment

## Prerequisite

Make sure to have the following installed:

1. Node.js
1. XAMPP

## Setting up the project

### Project files and dependencies

1. Clone the project into your project directory
1. Using the terminal, make sure to navigate into the project directory
1. Install frontend dependency (may take a while):

```bash
cd frontend
npm install
```

1.Install backend dependency:

```bash
cd ../backend
npm install
```

### Database

1. Go to /backend/config/config.json file
1. Change the database credentials for "development", i.e "username" & "password" to match yours
1. Next, launch XAMPP and start Apache and MySQL
1. While still inside the /backend directory, create the database:

```bash
npx sequelize db:create
```

1. Database migrations:

```bash
npx sequelize db:migrate
```

1. Seeding the database:

```bash
npx sequelize db:seed:all
```

### Running the app

1. In the /backend directory, run:

```bash
npm run dev
```

1. The app should be running on localhost:3000
1. You should be seeing the screen below:
   ![Login Page](https://github.com/hschua4/nodesql/blob/frontend/public/nodesql1.jpg?raw=true)
1. Use the following credential to log in:
   Email Address: admin@admin.com
   Password: password
