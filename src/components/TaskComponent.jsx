import React from 'react';

const TaskComponent = ({ initial_reducer }) => (
 
        <ul>
            <li> { initial_reducer.value } </li>
        </ul>    
);


export default TaskComponent;