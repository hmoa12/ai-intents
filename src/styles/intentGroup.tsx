import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        intentGroupCont: {
            textAlign: 'center',
            width: '100%',
            flexDirection: 'column'
        },
        intentCardsCont: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            textAlign: 'center',
            width: '100%',
            '&:after': {
                content: '""',
                flex: 'auto',
            },
        },
        selectUnselectButton: {
            width: '140px',
            border: `2px solid #A4C8C1`,
            transition: 'background-color 0.3s ease',
            backgroundColor: '#F3EDEB',
            padding: '10',
            borderRadius: '10px',
            '&:hover': {
                border: `2px solid #ffe1cf`,
            }
        },
        groupDescription: {
            textAlign: 'center',
            padding: '2px 8px',
            fontSize: '20',
        },
        buttonAndSelectedCountCont: {
            textAlign: 'center',
            width: '100%',
            alignItems: 'center',
            padding: '8px 0 14px 8px',
            justifyContent: 'space-between',
        }
    })
);

export default useStyles