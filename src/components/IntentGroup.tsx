import React, { useMemo } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import IntentCard from './IntentCard'
import { IIntentsData } from '../types/IIntentData';

interface IIntentGroupProps {
  intents: IIntentsData[],
  onSelectUnselectAll: React.MouseEventHandler,
  isAllSelected: boolean,
  onIntentSelect: (intentId: string) => boolean,
};

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    intentGroupCont: {
      display: 'flex',
      flexDirection: 'column'
    },
    intentCardsCont: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      '&:after': {
        content: '""',
        flex: 'auto',
      },
    },
    selectUnselectButton: {
      width: '140px',
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: '10px',
      '&:hover': {
        border: `2px solid ${theme.palette.primary.main}`,
      }
    },
    groupDescription: {
      textAlign: 'left',
      padding: '2px 8px',
    },
    buttonAndSelectedCountCont: {
      width: '235px',
      display: 'flex',
      alignItems: 'center',
      padding: '8px 0 14px 8px',
      justifyContent: 'space-between',
    }
  })
);

const IntentGroup: React.FC<IIntentGroupProps> = (props: IIntentGroupProps): React.ReactElement => {

  const classes = useStyles();

  let selectedCount: number = 0;
  const { intents, onSelectUnselectAll, isAllSelected, onIntentSelect } = props;
  
  const intentCards: React.ReactElement[] = useMemo(() => (
    intents && intents.map((intent: IIntentsData) => {
      if(intent.isSelected) selectedCount++;
  
      return <IntentCard key={intent.id} intent={intent} onIntentSelect={onIntentSelect} />
    })
  ), [intents, onIntentSelect, selectedCount]);

  return (
    <section className={classes.intentGroupCont}>
      <Typography variant='h5' className={classes.groupDescription}>General Intents</Typography>
      <Typography variant='subtitle1' className={classes.groupDescription}>Common Intents for users</Typography>
      <div className={classes.buttonAndSelectedCountCont}>
        <Button variant="outlined" color="primary" onClick={onSelectUnselectAll} 
          className={classes.selectUnselectButton}>
          {isAllSelected ? 'Unselect All' : 'Select All'}
        </Button>
        {selectedCount ? <Typography variant='subtitle1'>{selectedCount} selected</Typography> : null}
      </div>
      <section className={classes.intentCardsCont}>
        {intentCards}
      </section>
    </section>
  );
}

export default IntentGroup;