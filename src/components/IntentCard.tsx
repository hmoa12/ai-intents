import React, { MouseEvent, useState, useCallback } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IntentDetails from './IntentDetails';
import { IIntentsData } from '../types/IIntentData';
import useStyles from '../styles/card'

interface IIntentCardProps {
  key: string,
  intent: IIntentsData,
  onIntentSelect: (intentId: string) => boolean | null
}
// More information about each intent.
const IntentCard: React.FC<IIntentCardProps> = (props: IIntentCardProps): React.ReactElement => {

  const classes = useStyles();
  const { intent, onIntentSelect } = props;


  const [openDetails, setOpenDetails] = useState<boolean>(false);

  // The two following functions open and close details for intent
  const onDetailsOpen: React.MouseEventHandler<HTMLButtonElement> = useCallback((event: MouseEvent): boolean => {
    event.stopPropagation();
    setOpenDetails(true);

    return true;
  }, []);

  const onDetailsClose: React.MouseEventHandler<HTMLButtonElement> = useCallback((event: MouseEvent): boolean => {
    event.stopPropagation();
    setOpenDetails(false);

    return true;
  }, []);

  return (
    <>
      <Card className={intent.isSelected ? `${classes.intentCardCont} ${classes.intentCardSelected}` : classes.intentCardCont} elevation={3}
        onClick={() => onIntentSelect(intent.id)}>
        <CardContent className={classes.intentCardContentCont}>
          <Typography variant="h5">{intent.name}</Typography>
          <Typography variant="subtitle1">{intent.description}</Typography>
          <hr />
          <Typography variant="subtitle1">Expression</Typography>
          <Typography variant="subtitle2">Client: {intent.trainingData.expressions && intent.trainingData.expressions[0].text}</Typography>
          <Typography variant="subtitle2">AI Bot: {intent.reply.text}</Typography>
        </CardContent>
        <div className={classes.detailsAddCont}>
          <CardActions>
            <Button onClick={onDetailsOpen} className={classes.detailsButton}>
              <Typography variant="h6" color='primary'>•••</Typography>
            </Button>
          </CardActions>
          <button className={intent.isSelected ? `${classes.selectIntentButton} ${classes.intentButtonSelected}`
            : classes.selectIntentButton}>ADD
          </button>
        </div>
      </Card>
      <IntentDetails
        openDetails={openDetails}
        onDetailsClose={onDetailsClose}
        reply={intent.reply.text}
        expressions={intent.trainingData}
      />
    </>
  );
}

export default IntentCard;