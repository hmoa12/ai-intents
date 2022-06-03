import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        closeButton: {
            width: '140px',
            border: `2px solid #ffe1cf}`,
            backgroundColor: '#ffe1cf',
            borderRadius: '10px',
            '&:hover': {
                border: `2px solid #EEFCF8`,
            }
        },
        dialogPaper: {
            borderRadius: 18
        },
        
    })
);

export default useStyles