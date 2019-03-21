import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SymptomList from './SymptomList';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 500,
    background: '#DDC5E7'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 0px',
    transform: 'scale(0.2)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },

};

class DiagnosisCard extends Component {

    render() {

        const {diagnosis, classes, selectedSymptoms, issueClick} = this.props
        const symptomIdsOfDiagnosis = diagnosis.diagnoses.map(diag => diag.symptom_id)
        const matchingSymptoms = selectedSymptoms.filter(symp => symptomIdsOfDiagnosis.includes(symp.id))

      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
                {diagnosis.name}
            </Typography>
            <SymptomList symptoms={matchingSymptoms} />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={(e) => issueClick(e, diagnosis)}>Learn More</Button>
          </CardActions>
        </Card>
      );
    }
}

DiagnosisCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiagnosisCard);

