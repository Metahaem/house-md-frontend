import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


function SymptomChip(props) {
  const { classes, handleDelete, symptom } = props;
  return (
    <div className={classes.root}>
      <Chip
        label={"Symptom Naaame"}
        onDelete={handleDelete}
        className={classes.chip}
      />
    </div>
    )
}

export default SymptomChip