const express = require('express');
const app = express();
const { sequelize, Users } = require('./models');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

// app.get('/', async (req, res) => {
// 	const users = await Users.findAll();
// 	res.send(users);
// });

// app.post('/login', async (req, res) => {
// 	// const { email, password } = req.body;
// 	const email = 'admin@admin.com';
// 	try {
// 		const user = await Users.findOne({ where: { email } });
// 		res.send(user);
// 	} catch (error) {
// 		return res.status(500).json({ error: 'Something went wrong...' });
// 	}
// });
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/employee', employeeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

try {
	sequelize.authenticate();
	console.log('DB connected...');
} catch (error) {
	console.error('Unable to connect to the database');
}
