import { connect } from 'react-redux';
import NotificationBar from './NotificationBar';

const mapStateToProps = ({ notificationEvent}) => ({ notificationEvent });

export default connect(mapStateToProps)(NotificationBar);
