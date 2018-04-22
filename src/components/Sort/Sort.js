import React from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

class Sort extends React.Component {

  render(){
    return(
      <div>
        <RadioGroup
            name="gender2"
            value={this.props.sortSelection}
            onChange={this.props.onSortChange}
          >
            {this.props.sortMap.sortSelections.map(selection =>(
              <FormControlLabel key={selection.type} value={selection.type} control={<Radio color="primary" />} label={selection.type} />
            ))}
          </RadioGroup>
      </div>
    )
  }
}


export default Sort;
