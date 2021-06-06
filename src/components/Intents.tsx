import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IntentGroup from './IntentGroup'
import IntentsData from '../assets/intents.json';

import { IIntentsData } from '../types/IIntentData';

const useStyles = makeStyles({
  intentsCont: {
    padding: 12
  },
});

const Intents: React.FC = (): React.ReactElement => {

  const classes = useStyles();

  const [intents, setIntents] = useState<IIntentsData[]>([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  const addStateAttributesToIntentsData: Function = (intentsData: IIntentsData[]): boolean => {
    /* Here, I have added isSelected key which is part of my intent state to my intents data. Depending 
    on use case, we can add more state values to data or can have it as part of data from API/JSON */
    const intentDataWithIsSelectedKey = intentsData.map(intent => ({
        ...intent,
        isSelected: false
    }));

    setIntents([...intentDataWithIsSelectedKey]);

    return true;
  };

  useEffect(() => {
    addStateAttributesToIntentsData(IntentsData);
  }, []);

  const onSelectUnselectAll: React.MouseEventHandler<HTMLButtonElement> = (): boolean => {
    const modifiedIntents = intents.map(intent => ({
      ...intent,
      isSelected: !isAllSelected
    }));

    setIsAllSelected(!isAllSelected);
    setIntents([...modifiedIntents]);

    return true;
  }

  const onIntentSelect = (intentId: string): boolean => {
    const modifiedIntents = intents.map(intent => {
      if(intent.id === intentId) {
        return {
          ...intent,
          isSelected: !intent.isSelected
        }
      } else {
        return {
          ...intent
        }
      }
    });
    setIntents([...modifiedIntents]);

    return true;
  }

  /* todo - I would say that component IntentGroup is not of much signficance with the amount of data I have right now
    for this app. My Intents can be based on different groups like E-commerce, Airline etc or may be different language. In future,
    if I have that data with I would be utlizing this component in a better way and down below I could have a list of groups.

    As of now, I am just managing the state here and asuming that all my intents belong to one group */

  /* todo - I will be implementing Intent search, Filter functionalities later on. */
  return (
    <section className={classes.intentsCont}>
      <IntentGroup 
        intents={intents} 
        onSelectUnselectAll={onSelectUnselectAll} 
        isAllSelected={isAllSelected} 
        onIntentSelect={onIntentSelect} />
    </section>
  );
}

export default Intents;