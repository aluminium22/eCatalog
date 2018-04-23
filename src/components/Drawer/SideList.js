import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Button from 'material-ui/Button';

import styles from './styles'

const SideList = (props) =>{

  const { classes } = props
  const generateCategoriesList = () => {
    return props.sideListCategories.map(subCat =>
      <ListItem key={subCat.categoryId} className={classes.stretch}>
        <Button style={{backgroundColor: subCat.color }} className={classes.stretch} variant="raised" color="primary">
          {subCat.name}
        </Button>
      </ListItem>
    );
  }
  return(
    <div className={classes.list}>
       <div className={classes.demo}>
         <List className={classes.stretch}>
           {generateCategoriesList()}
         </List>
       </div>
    </div>
  )
};

export default withStyles(styles)(SideList);
