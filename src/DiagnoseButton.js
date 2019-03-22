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
    backgroundColor: '#FA8072'
  });

const DiagnoseButton = ({diagnoseClick, showingDiagnoses, backToSymptomSelect}) => {


    return (
        <div style={{padding: "40px"}}>
            {showingDiagnoses ? (
                <div onClick={backToSymptomSelect}>
                    <Fab variant="extended" aria-label="Delete" color="#FA8072" className={styles.fab}>
                      Back to symptom select
                    </Fab>
                </div>)
                :
                <div onClick={diagnoseClick}>
                      <Fab variant="extended" color="#FA8072" aria-label="Delete" className={styles.fab}>
                        Diagnose
                      </Fab>
                </div>
            }
        </div>
    )

}

export default DiagnoseButton

