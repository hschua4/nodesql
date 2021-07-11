import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { getEmployeeList, deleteEmployee } from '../actions/employeeActions';

function EmployeeListView({ history, match }) {
	const pageNumber = match.params.pageNumber || 1;
	const dispatch = useDispatch();

	const employeeList = useSelector((state) => state.employeeList);
	const { loading, error, employees, pages, page } = employeeList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const employeeDelete = useSelector((state) => state.employeeDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = employeeDelete;

	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		}

		dispatch(getEmployeeList(pageNumber));
	}, [userInfo, history, dispatch, successDelete, pageNumber]);

	const deleteHandler = (id) => {
		if (window.confirm('Confirm delete employee?')) {
			dispatch(deleteEmployee(id));
		}
	};

	return (
		<>
			<Row className='align-items-center'>
				<Col>
					<h1>Employees</h1>
				</Col>
				<Col className='text-end'>
					<LinkContainer to='/employee/add'>
						<Button className='my-3'>
							<i className='fas fa-plus'></i>Add Employee
						</Button>
					</LinkContainer>
				</Col>
			</Row>

			{loadingDelete && <Loader />}
			{errorDelete && <Message variant='danger'>{errorDelete}</Message>}

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Table striped bordered hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Company</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{employees.map((employee) => (
								<tr key={employee.id}>
									<td>{employee.FirstName}</td>
									<td>{employee.LastName}</td>
									<td>{employee.Company}</td>
									<td>{employee.Email}</td>
									<td>{employee.Phone}</td>
									<td>
										<LinkContainer to={`/employee/edit/${employee.id}`}>
											<Button variant='light' className='btn-sm'>
												<i className='fas fa-edit'></i>
											</Button>
										</LinkContainer>
										<Button
											variant='danger'
											className='btn-sm'
											onClick={() => deleteHandler(employee.id)}
										>
											<i className='fas fa-trash'></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>

					<Paginate pages={pages} page={page} pageName={'employee'} />
				</>
			)}
		</>
	);
}

export default EmployeeListView;
