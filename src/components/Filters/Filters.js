import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Facets from '../Facets/Facets';
import Sort from '../Sort/Sort';
import styles from './styles';


const Filters = ( props ) => {
   const {classes} = props
  return(
    <div className={classes.list, classes.filterPanel}>
       <div>
         <List className={classes.stretch}>
           <ExpansionPanel defaultExpanded={true}>
             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
               <Typography className={classes.heading}>Sort by</Typography>
             </ExpansionPanelSummary>
             <ExpansionPanelDetails>
               <Sort
                 sortSelection={props.sortSelection}
                 onSortChange={props.onSortChange}
                 sortMap={props.sortMap}
               />
             </ExpansionPanelDetails>
           </ExpansionPanel>
           <ExpansionPanel defaultExpanded={true}>
             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
               <Typography className={classes.heading}>Filter by Attributes</Typography>
               <Button className={classes.clearAllButton} size="small" onClick={props.onClickClearAll}>Clear All</Button>
             </ExpansionPanelSummary>
             <ExpansionPanelDetails>
               <Facets
                 filterList={props.filterList}
                 handleChange={props.facetHandleChange}
               />
             </ExpansionPanelDetails>
           </ExpansionPanel>
         </List>
       </div>
    </div>

   )
}

export default withStyles(styles)(Filters);
