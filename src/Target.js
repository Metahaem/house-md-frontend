
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ImageAvatar from './Avatar'
import bullseye from './bullseye.png'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Target(props) {
  const { classes} = props;
  return (
    <div>

      <IconButton color="secondary" className={classes.button} aria-label="Select a body part">
        <ImageAvatar photo={bullseye} />
      </IconButton>
  
    </div>
  );
}

Target.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Target);




