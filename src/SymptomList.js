import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageAvatar from './Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Legs from './Images/Legs.png'
import Head from './Images/Head.png'
import Arms from './Images/Arms.png'
import Pelvis from './Images/Pelvis.png'
import Stomach from './Images/Stomach.png'
import Chest from './Images/Chest.png'

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


const getImage = (category) => {
    if (category==="Head") {
        return Head
    }
    else if (category==="Pelvis") {
        return Pelvis
    }
    else if (category==="Legs") {
        return Legs
    }
    else if (category==="Arms") {
        return Arms
    }
    else if (category==="Chest") {
        return Chest
    }
    else if (category==="Stomach") {
        return Stomach
    }

}

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
                      <ListItemAvatar>
                          <ImageAvatar photo={getImage(symptom.category)} />
                      </ListItemAvatar>
                      <ListItemText 
                      />
                        <Typography variant="body2">{symptom.name} </Typography>
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