import React from 'react';
import FormControl from '@material-ui/core/FormControl';


const ListItemComponent = listComponent => {
    const { initial_reducer } = listComponent;
   return(
    <div>
    <FormControl>
     {initial_reducer.map((init, i) => <li key={i}> {init} </li> )}  
    </FormControl>
    </div>
   );
};

export default ListItemComponent;