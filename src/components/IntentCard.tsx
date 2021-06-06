import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { IIntentsData } from '../types/IIntentData';

interface IIntentCardProps {
  key: string,
  intent: IIntentsData,
  onIntentSelect: (intentId: string) => boolean
}

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    intentCardCont: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: '0 1 calc(25% - 1em)',
      margin: 5,
      minWidth: '275px',
      minHeight: '275px',
      borderRadius: 30,
      border: `2px solid #fff`,
      cursor: 'pointer',
      '&:hover': {
        boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2)`,
      },
      '@media (max-width: 420px)': {
        flex: '0 1 calc(100%)'
      },
    },
    intentCardSelected: {
      border: `2px solid ${theme.palette.primary.main}`
    },
    intentCardContentCont: {
      textAlign: 'left',
      padding: 22,
    },
    selectIntentButton: {
      width: '60px',
      border: `0 solid ${theme.palette.primary.main}`,
      cursor: 'pointer',
      height: '60px',
      outline: 'none',
      fontSize: '40px',
      textAlign: 'center',
      borderRadius: '26px 0',
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
    intentButtonSelected: {
      color: 'white',
      backgroundColor: `${theme.palette.primary.main}`
    },
    detailsAddCont: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    detailsButton: {
      paddingLeft: 14,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: 'transparent',
      }
    },
  })
);

const IntentCard: React.FC<IIntentCardProps> = (props: IIntentCardProps): React.ReactElement => {

  const classes = useStyles();

  const { intent, onIntentSelect } = props;

  return (
    <Card className={intent.isSelected ? `${classes.intentCardCont} ${classes.intentCardSelected}` : classes.intentCardCont} elevation={3}
      onClick={() => onIntentSelect(intent.id)}>
      <CardContent className={classes.intentCardContentCont}>
        <Typography variant="h5">{intent.name}</Typography>
        <Typography variant="subtitle1">{intent.description}</Typography>
        <hr/>
        <Typography variant="subtitle1">Expression</Typography>
        <Typography variant="subtitle2">User: {intent.trainingData.expressions && intent.trainingData.expressions[0].text}</Typography>
        <Typography variant="subtitle2">AI Bot: {intent.reply.text}</Typography>
      </CardContent>
      <div className={classes.detailsAddCont}>
        <CardActions>
          <Button className={classes.detailsButton}>
            <Typography variant="h6" color='primary'>Details</Typography>
          </Button>
        </CardActions>
        <button className={intent.isSelected ? `${classes.selectIntentButton} ${classes.intentButtonSelected}` 
          : classes.selectIntentButton}>+
        </button>
      </div>
    </Card>
    );
}

export default IntentCard;
