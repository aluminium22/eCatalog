import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

class BreadCrumbs extends React.Component {

  generateBreadcrumbList(classes) {
    return this.props.categoryData.superCategories.map(supCat =>
      <Typography className={classes.breadCrumbItem} key={supCat.categoryId} variant="subheading" color="textSecondary">
        > {supCat.name}
      </Typography>
    );
  }
  render(){
    const { classes } = this.props
    return(
      <AppBar className={classes.appBarSub} position="fixed" color='inherit'>
        <Toolbar className={classes.appBarSubToolbar}>
          <Typography className={classes.breadCrumbItem} variant="subheading" color="textSecondary">
            Matco ECatalog
          </Typography>{this.generateBreadcrumbList(classes)}
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(BreadCrumbs);
