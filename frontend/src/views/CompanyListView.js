import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { getCompanyList, deleteCompany } from '../actions/companyActions';

function CompanyListView({ history, match }) {
	const pageNumber = match.params.pageNumber || 1;
	const dispatch = useDispatch();

	const companyList = useSelector((state) => state.companyList);
	const { loading, error, companies, pages, page } = companyList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const companyDelete = useSelector((state) => state.companyDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = companyDelete;

	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		}

		dispatch(getCompanyList(pageNumber));
	}, [userInfo, history, dispatch, successDelete, pageNumber]);

	const deleteHandler = (id) => {
		console.log('Product deleted');
		if (window.confirm('Confirm delete company?')) {
			dispatch(deleteCompany(id));
		}
	};

	return (
		<>
			<Row className='align-items-center'>
				<Col>
					<h1>Companies</h1>
				</Col>
				<Col className='text-end'>
					<LinkContainer to='/company/add'>
						<Button className='my-3'>
							<i className='fas fa-plus'></i>Add Company
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
								<th>Name</th>
								<th>Email</th>
								<th>Logo</th>
								<th>WebsiteURL</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{companies.map((company) => (
								<tr key={company.id}>
									<td>{company.Name}</td>
									<td>{company.Email}</td>
									<td>
										<Image src={company.Logo} alt='' height={50} />
									</td>
									<td>{company.WebsiteURL}</td>
									<td>
										<LinkContainer to={`/company/edit/${company.id}`}>
											<Button variant='light' className='btn-sm'>
												<i className='fas fa-edit'></i>
											</Button>
										</LinkContainer>
										<Button
											variant='danger'
											className='btn-sm'
											onClick={() => deleteHandler(company.id)}
										>
											<i className='fas fa-trash'></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>

					<Paginate pages={pages} page={page} />
				</>
			)}
		</>
	);
}

export default CompanyListView;
