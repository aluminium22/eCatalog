import React from 'react';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

const ItemsContainer = ( props )=> {
   const{ classes } = props
    return(
      <div className={classes.itemsContainer}>
        {props.children}
      </div>
    )
}

export default withStyles(styles)(ItemsContainer);
