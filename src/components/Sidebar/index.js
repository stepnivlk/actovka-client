import { connect } from 'react-redux';
import { isAuthenticatedMapper } from '../../data/stateMappers';
import Sidebar from './Sidebar';

export default connect(isAuthenticatedMapper)(Sidebar);
