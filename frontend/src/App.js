import LoginView from './views/LoginView';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import CompanyListView from './views/CompanyListView';
import CompanyEditView from './views/CompanyEditView';
import CompanyAddView from './views/CompanyAddView';

function App() {
	return (
		<Router>
			<Header />
			<main className='pt-4'>
				<Container>
					<Route path='/' component={LoginView} exact />
					<Route
						path='/company/pages/:pageNumber'
						component={CompanyListView}
						exact
					/>
					<Route path='/company/edit/:id' component={CompanyEditView} exact />
					<Route path='/company/add' component={CompanyAddView} exact />
				</Container>
			</main>
		</Router>
	);
}

export default App;
