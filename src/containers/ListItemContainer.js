import {connect} from 'react-redux';
import * as initialActions from '../actions/initial_action';
import { bindActionCreators } from 'redux';
import ListItemComponent from '../components/ListItemComponent';


const mapStateToProps = ({ list_reducer, initial_reducer, val }) => ({
    list_reducer: list_reducer.list_reducer_items,
    initial_reducer: initial_reducer.initial_reducer_items,
    val: initial_reducer.val
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(initialActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);
