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
    /* future */
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