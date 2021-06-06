import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

  console.log('intents', intents);
  return (
    <section className={classes.intentsCont}>
      IntentGroup
    </section>
  );
}

export default Intents;