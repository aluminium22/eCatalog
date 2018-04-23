import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';


import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import styles from './styles';

class Topbar extends React.Component {

render(){
  const { classes } = this.props;
  return(
    <AppBar className={classes.appBar} position="sticky">
     <Toolbar>
       <IconButton
         className={classes.menuButton}
         onClick={this.props.toggleDrawer}
         color="inherit"
         aria-label="Menu">
         <MenuIcon />
       </IconButton>
       <img
         className={classes.headerLogo}
         src={this.props.img}
        />
       <Button
         className={classes.CategoryButton}
         variant="raised"
         color="primary">
         {this.props.categoryName}
         <CloseIcon />
       </Button>
       <TextField
         className={classes.input}
           placeholder="Search Catalog"
           id="bootstrap-input"
           InputProps={{
             disableUnderline: true,
             classes: {
               root: classes.bootstrapRoot,
               input: classes.bootstrapInput,
             },
           }}
           InputLabelProps={{
             shrink: true,
             className: classes.bootstrapFormLabel,
           }}
         />
         <IconButton className={classes.searchIcon} aria-label="Delete">
           <SearchIcon />
         </IconButton>
     </Toolbar>
   </AppBar>
  )
}

}

export default withStyles(styles)(Topbar);
