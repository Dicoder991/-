import { connect } from 'react-redux';
import * as initialActions from '../actions/initial_action';
import { bindActionCreators } from 'redux';
import MainAppComponent from '../components/MainAppComponent';


const mapStateToProps = ({ initial_reducer}) => ({
    initial_reducer: initial_reducer.initial_reducer_items,
    val: initial_reducer.val,
    list: initial_reducer.list
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(initialActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainAppComponent);
