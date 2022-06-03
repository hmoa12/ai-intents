import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageOverViewCont: {
        padding: '15px',
        alignItems: 'center',
    },
    pageDescriptionCont: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        marginLeft: 30,
        marginTop: 10,

    },
    overViewDescription: {
        fontFamily: 'sans-serif, calibri, arial',
        fontSize: '1.5em'
    },
    '@media (max-width: 620px)': {
        pageDescriptionCont: {
            marginLeft: 0,
            padding: 12
        },
    }
});

export default useStyles