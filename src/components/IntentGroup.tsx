import React, { useMemo } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IntentCard from './IntentCard'
import { IIntentsData } from '../types/IIntentData';
import useStyles from '../styles/intentGroup'

interface IIntentGroupProps {
  intents: IIntentsData[],
  onSelectUnselectAll: React.MouseEventHandler,
  isAllSelected: boolean,
  onIntentSelect: (intentId: string) => boolean,
};


// This acts on all the intents for either selecting them all or deselect them all
const IntentGroup: React.FC<IIntentGroupProps> = (props: IIntentGroupProps): React.ReactElement => {

  const classes = useStyles();

  let selectedCount: number = 0;
  const { intents, onSelectUnselectAll, isAllSelected, onIntentSelect } = props;

  const intentCards: React.ReactElement[] = useMemo(() => (
    intents && intents.map((intent: IIntentsData) => {
      if (intent.isSelected) selectedCount++;

      return <IntentCard key={intent.id} intent={intent} onIntentSelect={onIntentSelect} />
    })
  ), [intents, onIntentSelect, selectedCount]);

  return (
    <div className={classes.intentGroupCont} >

      <Typography variant='h4' className={classes.groupDescription} >Select your intents here.</Typography>
      <div className={classes.buttonAndSelectedCountCont} style={{ textAlign: "center" }}>
        <Button variant="outlined" color="primary" onClick={onSelectUnselectAll}
          className={classes.selectUnselectButton}>
          {isAllSelected ? 'Unselect All' : 'Select All'}
        </Button>
        {selectedCount ? <Typography variant='subtitle1'>{selectedCount} selected</Typography> : null}
      </div>
      <section className={classes.intentCardsCont}>
        {intentCards}
      </section>
    </div>
  );
}

export default IntentGroup;