// import React from 'react';


// function sortByFrequency(array) {
    //     var frequency = {};

    //     array.forEach(function(value) { frequency[value] = 0; });
    
    //     var uniques = array.filter(function(value) {
        //         return ++frequency[value] == 1;
        //     });
        
        //     return uniques.sort(function(a, b) {
            //         return frequency[b] - frequency[a];
            //     });
            // }
            
            // const DiagnosesDisplayer = ({diagnoses, selectedSymptoms}) => {
                
                //     return (
                    //         <div>
                    //             {diagnoses.map(diag => {
                        //                 return <DiagnosisCard key={diag.id} diagnosis={diag} selectedSymptoms={selectedSymptoms} />
                        //             })}
                        //         </div>
                        //     )        
                        // }
                        
                        // export default DiagnosesDisplayer
                        
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DiagnosisCard from './DiagnosisCard'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#C1D7F8',
  },
  gridList: {
    width: 950,
    height: 650,
  },
});

function DiagnosesDisplayer(props) {
  const { classes, diagnoses, selectedSymptoms, issueClick } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={480} className={classes.gridList} cols={3}>
        {diagnoses.map(diag => (
                      <GridListTile key={diag.id} >
                        <DiagnosisCard key={diag.id} diagnosis={diag} selectedSymptoms={selectedSymptoms} issueClick={issueClick} />
                    </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

DiagnosesDisplayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiagnosesDisplayer);