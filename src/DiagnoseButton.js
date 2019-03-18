import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

const DiagnoseButton = ({classes}) => {


    return (
        <div>
              <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                Extended
              </Fab>
        </div>
    )
}

export default DiagnoseButton
