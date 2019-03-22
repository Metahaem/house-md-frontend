import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import SymptomChip from './SymptomChip'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: '#BDFACB',
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class SymptomList extends React.Component {

  render() {
    const { classes, symptoms } = this.props;
    return (
      <div className={classes.root}>
            <Typography variant="subtitle1" className={classes.title}>
              Matching Symptoms:
            </Typography>
            <div className={classes.demo}>
              <List >
                  {symptoms.map (symptom => {
                    return <div key={symptom.id}>
                    <ListItem >
                      <SymptomChip 
                            key={symptom.id}
                            symptom={symptom} 
                            symptomDelete={null}
                            location="sidebar"
                      />
                    </ListItem>
                    </div>
                  })}
              </List>
            </div>
      </div>
    );
  }
}

SymptomList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SymptomList);