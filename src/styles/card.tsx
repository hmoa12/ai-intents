import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        intentCardCont: {
            display: 'flex',
            flexDirection: 'column',
            transition: 'background-color 0.3s ease',
            backgroundColor: '#ffe1cf',
            justifyContent: 'space-between',
            flex: '0 1 calc(25% - 1em)',
            margin: 5,
            minWidth: '275px',
            minHeight: '275px',
            borderRadius: 30,
            border: `2px solid #A4C8C1`,
            cursor: 'pointer',
            '&:hover': {
                boxShadow: `0 8px 16px 0 rgba(0,0,0,0.2)`,
            },
            '@media (max-width: 420px)': {
                flex: '0 1 calc(100%)'
            },
        },
        intentCardSelected: {
            border: `2px solid #ffe1cf`,
            transition: 'background-color 0.3s ease',
            backgroundColor: '#CFE9E2',
        },
        intentCardContentCont: {
            textAlign: 'left',
            padding: 22,
        },
        selectIntentButton: {
            width: '60px',
            border: `0 solid #080808`,
            cursor: 'pointer',
            height: '60px',
            outline: 'none',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '26px 0',
            color: '#000',
            backgroundColor: '#CFE9E2',
        },
        intentButtonSelected: {
            color: '#080808',
            backgroundColor: `#ffe1cf`

        },
        detailsAddCont: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        detailsButton: {
            paddingLeft: 14,
            textTransform: 'capitalize',
            color: '#080808',
            '&:hover': {
                backgroundColor: 'transparent',
            }
        },
    })
);

export default useStyles