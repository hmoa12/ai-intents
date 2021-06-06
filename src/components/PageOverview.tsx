import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import botImage from '../assets/images/bot-image.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  pageOverViewCont: {
    display: 'flex',
    padding: '12px',
    alignItems: 'center',
  },
  botImage: {
    height: '250px',
    width: '200px'
  },
  pageDescriptionCont: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginLeft: 100,
  },
  '@media (max-width: 620px)': {
    pageDescriptionCont: {
      marginLeft: 0,
      padding: 12
    },
    botImage: {
      display: 'none'
    }
  }
});

const PageOverview: React.FC = (): React.ReactElement => {

  const classes = useStyles();

  return (
    <section className={classes.pageOverViewCont}>
      {/* todo - As of now, I have simply used a bot image depecting somewhat the purpose of webpage.I could have 
       used an image where intent and user relationship can be depcited in a better way. A web designer could be of help here :) */}
      <div className={classes.botImage}>
        <img src={botImage} alt='bot' className={classes.botImage}></img>
      </div>
      <section className={classes.pageDescriptionCont}>
        <Typography variant='h5'>Pre trained Intents</Typography>
        <Typography variant='subtitle1' gutterBottom>For humans, conversation comes naturally, but for bots, it’s harder.</Typography>
        <Typography variant='subtitle1' gutterBottom>In order to understand what the user wants to express, our AI Bot is trained to recognize different intents. 
          For every intent the AI Bot gets a list of user messages (we call them expressions) as data to learn how users express that intent.  
          For every intent there will also be a reply that the AI Bot should give, once it recognizes that intent. 
        </Typography>
        <Typography variant='subtitle1'>To help you setup your bot, we have created a selection of pre defined Intents based on your industry. 
          You can personalize all the bot replies and create your own intents at later stage.</Typography>
      </section>
    </section>
  );
}

export default PageOverview;