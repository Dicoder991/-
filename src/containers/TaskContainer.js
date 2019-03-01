import {connect} from 'react-redux';
import * as initialActions from '../actions/initial_action';
import { bindActionCreators } from 'redux';
import TaskComponent from '../components/TaskComponent';


const mapStateToProps = ({ initial_reducer }) => ({
    value: initial_reducer.value,
    initial_reducer: initial_reducer.initial_reducer_items
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(initialActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);
