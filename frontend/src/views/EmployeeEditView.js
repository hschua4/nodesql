import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getEmployeeDetails, updateEmployee } from '../actions/employeeActions';
import { EMPLOYEE_UPDATE_RESET } from '../constants/constants';

const EmployeeEditView = ({ match, history }) => {
	const employeeId = match.params.id;

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const employeeDetails = useSelector((state) => state.employeeDetails);
	const { loading, error, employee } = employeeDetails;

	const employeeUpdate = useSelector((state) => state.employeeUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = employeeUpdate;

	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		}

		if (successUpdate) {
			dispatch({ type: EMPLOYEE_UPDATE_RESET });
			history.push('/employee/pages/1');
		} else {
			if (!employee || employee.id !== Number(employeeId)) {
				dispatch(getEmployeeDetails(employeeId));
			} else {
				setFirstName(employee.FirstName);
				setLastName(employee.LastName);
				setCompany(employee.Company);
				setEmail(employee.Email);
				setPhone(employee.Phone);
			}
		}
	}, [dispatch, history, employeeId, employee, successUpdate, userInfo]);

	// const uploadFileHandler = async (e) => {
	// 	const file = e.target.files[0];
	// 	const formData = new FormData();
	// 	formData.append('image', file);
	// 	// setUploading(true);

	// 	try {
	// 		const config = {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		};

	// 		const { data } = await axios.post('/api/upload', formData, config);

	// 		setImage(data);
	// 		setUploading(false);
	// 	} catch (error) {
	// 		console.error(error);
	// 		setUploading(false);
	// 	}
	// };

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateEmployee({
				id: employeeId,
				firstName,
				lastName,
				company,
				email,
				phone,
			})
		);
	};

	return (
		<>
			<Link to='/employee/pages/1' className='btn btn-light my-3'>
				Go Back
			</Link>

			<Container>
				<Row className='justify-content-md-center'>
					<Col xs={12} md={6}>
						<h1>Edit Employee</h1>

						{loadingUpdate && <Loader />}
						{errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

						{loading ? (
							<Loader />
						) : error ? (
							<Message variant='danger'>{error}</Message>
						) : (
							<Form onSubmit={submitHandler}>
								<Form.Group controlId='firstName'>
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter first name'
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									></Form.Control>
								</Form.Group>

								<Form.Group controlId='lastName'>
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter last name'
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									></Form.Control>
								</Form.Group>

								<Form.Group controlId='company'>
									<Form.Label>Company</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter company'
										value={company}
										onChange={(e) => setCompany(e.target.value)}
									></Form.Control>
								</Form.Group>

								<Form.Group controlId='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									></Form.Control>
								</Form.Group>

								<Form.Group controlId='phone'>
									<Form.Label>Phone</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter phone'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									></Form.Control>
								</Form.Group>

								<Button type='submit' variant='primary'>
									Update
								</Button>
							</Form>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default EmployeeEditView;
