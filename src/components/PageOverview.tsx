import React from 'react';
import botImage from '../assets/images/bot-image.png';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/pageOverview';

// An overview to the user to know about what to do.
// This can be made in a more interactive way to make it even more user friendly.
const PageOverview: React.FC = (): React.ReactElement => {

  const classes = useStyles();

  return (
    <section className={classes.pageOverViewCont}>
      {/* <div className={classes.botImage}>
        <img src={botImage} alt='bot' className={classes.botImage}></img>
      </div> */}
      <section className={classes.pageDescriptionCont}>
        <Typography variant='h3'>Title</Typography>
        <div className={classes.overViewDescription}>Description text</div>
      </section>
    </section>
  );
}

export default PageOverview;