import { connect } from 'react-redux';
import { isAuthenticatedMapper } from '../../data/stateMappers';
import Navbar from './Navbar';

export default connect(isAuthenticatedMapper)(Navbar);
