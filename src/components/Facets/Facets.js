import React from 'react';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Checkbox from 'material-ui/Checkbox';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';

class Facets extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(facetIndex,optionIndex,e){
    e.stopPropagation();
    this.props.handleChange(facetIndex,optionIndex);
  }

  isSelected = (facet) => {
    function hasEnabled(options){
      let count = 0;
      options.map( option => {
        if(option.enabled){
          count ++
        }
      })
      return count;
    }
    if(hasEnabled(facet.options)){
      return  <DoneIcon style={{color: 'rgb(0,89,163)' }} className={this.props.classes.doneIcon} />
    }
  }

  render(){
    return(
      <div>
        {
          this.props.filterList.map( (facet, indexf) => (
            <ExpansionPanel key={facet.name} defaultExpanded={false}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                {this.isSelected(facet)}<Typography >{facet.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormGroup row>
                  {
                    facet.options.map( (option, index) => (
                      <FormControlLabel key={option.name}
                         control={
                           <Checkbox
                             checked={option.enabled}
                             onChange={(e) => this.props.handleChange(indexf,index, e)}
                             color="primary"
                           />
                         }
                         label={option.name}
                       />
                    ))
                  }
                </FormGroup>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        }
      </div>
    )
  }
}


export default Facets;
